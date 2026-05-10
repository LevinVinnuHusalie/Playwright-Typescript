import { test } from "@playwright/test";
import { ResultPage } from "../../src/pages/ResultPage";
import { HomePage } from "../../src/pages/HomePage";

test.describe("Page Object Model Implementation", () => {

    test("Search for a keyword and verify the title", async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goToUrl(`${process.env.PLAYWRIGHT_URL}`);
        await homePage.searchForKeyword(`${process.env.SEARCH_TEXT}`);
        const resultPage = new ResultPage(page);    
        await resultPage.verifyTitle(`${process.env.SEARCH_TEXT} | Playwright`);
    });
    
}); 