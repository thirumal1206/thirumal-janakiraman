import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = ['/', '/blog/', '/blog/building-alfred/', '/blog/about-me/', '/blog/how-this-site-is-built/', '/now/'];

for (const theme of ['light', 'dark']) for (const path of pages) {
  test(`${path} (${theme}) has no accessibility violations and no sideways scroll`, async ({ page }) => {
    await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
    await page.goto(path);
    await page.waitForTimeout(800);
    await expect(page.locator('h1')).toHaveCount(1);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test('home lists every blog post and links resolve', async ({ page, request }) => {
  await page.goto('/');
  const links = await page.locator('#writing a').evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).getAttribute('href')!));
  expect(links.length).toBeGreaterThanOrEqual(3);
  for (const href of links) expect((await request.get(href)).status()).toBe(200);
});

test('toolwall demo changes its verdict', async ({ page }) => {
  await page.goto('/#open-source');
  await page.locator('astro-island:not([ssr])').first().waitFor();
  await page.getByRole('radio', { name: /delete_user/ }).click();
  await expect(page.locator('.verdict')).toHaveText('DENY');
  await page.getByRole('radio', { name: /read_invoice/ }).click();
  await expect(page.locator('.verdict')).toHaveText('ALLOW');
});

test('theme toggle switches and remembers', async ({ page }) => {
  await page.goto('/');
  const before = await page.locator('html').getAttribute('data-theme');
  await page.getByRole('button', { name: 'Switch colour theme' }).click();
  const after = await page.locator('html').getAttribute('data-theme');
  expect(after).not.toBe(before);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', after!);
});
