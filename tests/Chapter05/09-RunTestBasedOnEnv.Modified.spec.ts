import { test } from "../../src/fixtures/TestFixture";
import { TestData1 } from "../../src/interfaces/TestDataInterface";

// test.describe("Run test based on environment", () => {
//     test(`Search for a keyword and verify the title for ${process.env.ENVIRONMENT} environment`, async ({ homePage, resultPage, testData }) => {
//         await homePage.goToUrl(`${process.env.PLAYWRIGHT_URL}`);
//         for (const key in testData) {
//             const element = testData[key as keyof typeof testData];
//             if (element) {
//                 console.log(`Running test with data: ${element.word1} and ${element.word2}`);
//                 await homePage.searchForKeyword(String(element.word1));
//                 await resultPage.verifyTitle(`${element.word1} | Playwright`);
//                 await homePage.searchForKeyword(String(element.word2));
//                 await resultPage.verifyTitle(`${element.word2} | Playwright`);
//             }
//         }
//     });
// });

test.describe("Run test based on environment", () => {
    test(`Search for a keyword and verify the title for ${process.env.ENVIRONMENT} environment`, async ({ homePage, resultPage, testData }) => {
        await homePage.goToUrl(`${process.env.PLAYWRIGHT_URL}`);
        for (const [name, data] of Object.entries(testData)) {
            console.log(`Running test from ${name}`);

            await homePage.searchForKeyword(String(data.word1));
            await resultPage.verifyTitle(`${data.word1} | Playwright`);

            await homePage.searchForKeyword(String(data.word2));
            await resultPage.verifyTitle(`${data.word2} | Playwright`);
        }
    });
});
