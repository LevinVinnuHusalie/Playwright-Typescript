import { test, expect } from "@playwright/test";

test("First Test fail", { tag: ["@PlaywrightWithJenkins"] }, async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
    await page.getByRole("searchbox", { name: "Search" }).fill("Installation");
    await page.getByRole("link", { name: "Installation", exact: true }).click();

    await expect(page).toHaveTitle("Installation | Playwright");
});

test("First Test Success", { tag: ["@PlaywrightWithJenkins"] }, async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
    await page.getByRole("searchbox", { name: "Search" }).fill("Installation");
    await page.locator("#docsearch-hits0-item-0").getByRole("link", { name: "Installation" }).click();

    await expect(page).toHaveTitle("Installation | Playwright");
});
