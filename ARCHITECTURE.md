# How this site works

A static site. Astro turns Markdown, data files and components into plain HTML at build time. GitHub Actions tests it and publishes it to GitHub Pages. There is no server, no database and no running cost.

## Architecture

```mermaid
flowchart LR
  subgraph Source["Repository: thirumal1206.github.io"]
    D["src/data/site.ts<br/>profile, work, experience"]
    P["src/content/blog/*.md(x)<br/>posts, schema checked"]
    C["src/pages + components<br/>Astro pages, one Vue island"]
    S["public/<br/>photo, icons, images"]
  end

  subgraph CI["GitHub Actions: ci.yml"]
    B["npm ci<br/>astro check + build"]
    T["Playwright<br/>axe a11y, light + dark,<br/>desktop + phone, links"]
    L["Lighthouse budgets<br/>perf, a11y, SEO"]
    A["upload Pages artifact"]
  end

  subgraph Host["GitHub Pages"]
    G["thirumal1206.github.io<br/>static HTML, CSS, a few KB of JS<br/>HTTPS, global CDN"]
  end

  V(("Visitor"))

  D & P & C & S -->|git push main| B --> T --> L --> A -->|deploy-pages| G
  V -->|HTTPS| G
```

## How it is built

| Part | Tool | Why |
|---|---|---|
| Framework | Astro 7 | Pages render to HTML at build time and ship no JavaScript unless a component asks for it. |
| Content | Markdown and MDX in a typed content collection | A post is one file. The schema rejects a post without a title, date or description. |
| Profile data | `src/data/site.ts` | Copy lives apart from layout, so editing a line never touches markup. |
| Interactive part | One Vue component (the toolwall demo), hydrated only when it scrolls into view | Shows a real interaction without making the page heavy. |
| Styling | One CSS file with light and dark tokens | No CSS framework; the theme is a set of variables. |
| Feeds | RSS and sitemap generated at build | Readers and search engines pick up new posts automatically. |

## How it is checked

Every push and pull request runs `.github/workflows/ci.yml`:

1. `npm ci` from the lockfile.
2. `astro check` (types in pages, components and content) and the production build.
3. Playwright end to end tests on desktop Chrome and a phone profile: an axe accessibility scan of every page in light and dark mode, no sideways scroll, every post link answers 200, the demo and the theme toggle work.
4. Lighthouse with minimum scores: performance and best practices 95, accessibility and SEO 100.
5. Only on `main`, and only if all of the above passed: the built `dist/` folder is published.

## How it is hosted

- GitHub Pages serves the files from GitHub's CDN over HTTPS, free for public repositories.
- A repository named `<user>.github.io` is served at `https://<user>.github.io/` with no path prefix.
- Deploys use the official Pages actions (`upload-pages-artifact`, `deploy-pages`), so no build output is ever committed.
- A custom domain can be added later in Settings > Pages; hosting stays free.

## Run it locally

```bash
npm ci
npm run dev     # http://localhost:4321
npm run build   # type check and build into dist/
npm test        # the same Playwright suite CI runs
```
