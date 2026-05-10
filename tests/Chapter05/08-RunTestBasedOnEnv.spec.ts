import { test } from "../../src/fixtures/TestFixture";

test.describe("Run test based on environment", () => {
    test(`Search for a keyword and verify the title for ${process.env.ENVIRONMENT} environment`, async ({ homePage, resultPage, testData }) => {
        await homePage.goToUrl(`${process.env.PLAYWRIGHT_URL}`);
        const dataSets = [testData.TestData1, testData.TestData2].filter(
            (item): item is { word1: string; word2: string } => Boolean(item)
        );
        for (const element of dataSets) {
            console.log(`Running test with data: ${element.word1} and ${element.word2}`);
            await homePage.searchForKeyword(String(element.word1));
            await resultPage.verifyTitle(`${element.word1} | Playwright`);
            await homePage.searchForKeyword(String(element.word2));
            await resultPage.verifyTitle(`${element.word2} | Playwright`);
        }
    });
});
