# thirumal1206.github.io

Personal site: Astro, Markdown and MDX posts, one Vue island, hosted on GitHub Pages.

## Run locally

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # astro check + static build into dist/
npm test           # Playwright: axe, sideways scroll, links, demo, theme (desktop and phone)
```

## Write a post

Add `src/content/blog/<slug>.md` (or `.mdx` to embed a component):

```markdown
---
title: Post title
date: 2026-12-01
description: One line for the list, RSS and link previews.
---
Text.
```

## Publish

1. Create the public repo `thirumal1206.github.io` on GitHub and push this folder to `main`.
2. Repo Settings > Pages > Source: GitHub Actions.
3. Every push runs `.github/workflows/ci.yml`: type check, build, Playwright, Lighthouse budgets, then deploy. A failing check blocks the deploy.
