import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ResultPage } from "../pages/ResultPage";
import { loadTestData } from "../utils/JsonHelper";
import { TestData } from "../interfaces/TestDataInterface";

export const test = base.extend<{
    homePage: HomePage;
    resultPage: ResultPage;
    testData: TestData;
}>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    resultPage: async ({ page }, use) => {
        await use(new ResultPage(page));
    },
    testData: async ({}, use) => {
        const data = await loadTestData();
        await use(data);
    },
});

export { expect } from "@playwright/test";
