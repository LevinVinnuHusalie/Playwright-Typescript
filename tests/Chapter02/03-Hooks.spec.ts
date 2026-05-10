import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
    console.log("Running before all tests");
});

test.afterAll(async () => {
    console.log("Running after all tests");
});

test.beforeEach(async () => {
    console.log("Running before each test");
});

test.afterEach(async () => {
    console.log("Running after each test");
});

test("Hooks Test Case 1", async ({ page }) => {
    await page.goto("https://playwright.dev/");
});

test("Hooks Test Case 2", async ({ page }) => {
    await page.goto("https://playwright.dev/");
});