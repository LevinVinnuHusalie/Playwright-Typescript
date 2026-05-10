import { test, expect } from "@playwright/test";

test("Assertions Test Case", async ({ page }) => {
    await page.goto("https://www.youtube.com/");

    // await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
    // await expect(page.getByRole('combobox', { name: 'Search' })).toBeEditable();
    // await expect(page.getByRole('combobox', { name: 'Search' })).toBeEnabled();
    // await expect(page.getByRole('combobox', { name: 'Search' })).toBeEmpty();

    await page.getByRole("combobox", { name: "Search" }).fill("Playwright");
    await page.getByRole("combobox", { name: "Search" }).press("Enter");
    await expect(page).toHaveURL("https://www.youtube.com/results?search_query=Playwright");
    await expect(page.getByRole('link', { name: 'Playwright Beginner Tutorials' })).toHaveText("Playwright Beginner Tutorials");
    await expect(page.locator('span[id="country-code"]')).toHaveCount(2);
    // await expect(page.locator('span[id="country-code"]').first()).toBeDisabled();
});
