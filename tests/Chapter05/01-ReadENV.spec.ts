import { test, expect } from "@playwright/test";

test("Read ENV Variables", async ({ page }) => {
    await page.goto(`${process.env.PLAYWRIGHT_URL}`);

    await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
    await page.getByRole("searchbox", { name: "Search" }).fill("Installation");
    await page.getByRole("link", { name: "Installation", exact: true }).first().click();

    await expect(page).toHaveTitle("Installation | Playwright");
});
