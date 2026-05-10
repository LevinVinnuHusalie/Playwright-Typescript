import { test, expect } from "@playwright/test";

test("Screenshot Test Case", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.screenshot({ path: "./screenshots/screenshot.png"});

    await page.screenshot({ path: "./screenshots/FullScreenshot.png", fullPage: true });
});
