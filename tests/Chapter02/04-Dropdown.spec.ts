import { test, expect } from "@playwright/test";

test("Dropdown Test Case", async ({ page }) => {
    await page.goto("https://www.facebook.com/");

    await page.getByRole("link", { name: "Create new account" }).click();
    await page
        .getByLabel("Select month")
        .locator("div")
        .filter({ hasText: /^Month$/ })
        .click();
    await page.getByText("October").click();
    await page
        .getByLabel("Select year")
        .locator("div")
        .filter({ hasText: /^Year$/ })
        .click();
    await page.getByText("2023").click();
    await expect(page.getByLabel("Select month")).toContainText("October");
    await expect(page.getByLabel("Select year")).toContainText("2023");
});
