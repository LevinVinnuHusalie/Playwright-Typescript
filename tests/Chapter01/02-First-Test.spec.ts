import { test, expect } from "@playwright/test";

test("First Test", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill("Installation");
    await page.getByRole('link', { name: 'Installation', exact: true }).click();

    await expect(page).toHaveTitle("Installation | Playwright");
});
