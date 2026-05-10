import { test } from "../../src/fixtures/TestFixture";

test.describe("Page Object Model Implementation", () => {

    test("Search for a keyword and verify the title", async ({ page, homePage, resultPage }) => {
        await homePage.goToUrl(`${process.env.PLAYWRIGHT_URL}`);
        await homePage.searchForKeyword(`${process.env.SEARCH_TEXT}`);
        await resultPage.verifyTitle(`${process.env.SEARCH_TEXT} | Playwright`);
    });
    
}); 