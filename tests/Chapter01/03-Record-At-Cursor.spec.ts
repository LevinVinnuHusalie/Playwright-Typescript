import { test, expect } from "@playwright/test";

test("Record at Cursor", async ({ page }) => {
    await test.step("Navigate to Playwright website and validate elements", async () => {
        await page.goto("https://playwright.dev/");
    });

    await test.step("Validate elements on the page", async () => {
        await expect(page.getByRole("button", { name: "Search (Ctrl+K)" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Get started" })).toBeVisible();
        await expect(page.locator("h1")).toContainText("Playwright enables reliable web automation for testing, scripting, and AI agents.");
    });

    await test.step("Search for Installation and navigate to the page", async () => {
        await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
        await page.getByRole("searchbox", { name: "Search" }).fill("Installation");
        await page.getByRole("link", { name: "Installation", exact: true }).click();
    });

    await test.step("Validate the title of the Installation page", async () => {
        await expect(page).toHaveTitle("Installation | Playwright");
    });
});
