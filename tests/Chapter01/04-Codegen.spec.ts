import { test, expect } from '@playwright/test';

test('Codegen Test Case', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community' }).click();
  await expect(page.locator('h1')).toContainText('Welcome');
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('typescript');
  await page.getByRole('link', { name: 'TypeScript', exact: true }).click();
  await expect(page.locator('h1')).toContainText('TypeScript');
});