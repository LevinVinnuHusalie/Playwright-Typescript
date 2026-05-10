import { test, expect } from "@playwright/test";

test("Locator Test Case", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    //GetByRole
    // await page.getByRole('link', { name: 'Get Started' }).click();

    //GetByLabel
    // await page.getByLabel('Search').click();

    //GetByPlaceholder
    // await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
    // await page.getByPlaceholder('Search Docs').click(); 

    //GetByText
    // await page.getByText('Get Started').click();

    //GetByAltText
    // await page.getByAltText('VS Code').click();

    //GetByTitle
    // await page.getByTitle('system mode').click();

    //GetByTestId
    // await page.getByTestId('test-id').click();

    //CSS or XPath
    // await page.locator('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div/span/a[1]').click();
    // await page.locator('#__docusaurus_skipToContent_fallback > header > div > div > span > a.gh-btn').click();

});
