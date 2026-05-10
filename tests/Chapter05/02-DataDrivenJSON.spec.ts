import { test, expect } from "@playwright/test";

import testData from "../../test-data/qa/test-data.json";

type TestData = {
    TestData1: {
        word1: string;
        word2: string;
    };
    TestData2: {
        word1: string;
        word2: string;
    };
};

const testDataType = testData as TestData;

for (const dataSetName in testDataType) {
    const skill = testDataType[dataSetName as keyof TestData];

    test(`Data Driven Testing with JSON Data with ${skill.word1} and ${skill.word2}`, async ({ page }) => {
        await page.goto(`${process.env.PLAYWRIGHT_URL}`);

        await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
        await page.getByRole("searchbox", { name: "Search" }).fill(skill.word1);
        await page.getByRole("link", { name: skill.word1, exact: true }).first().click();

        await expect(page).toHaveTitle(`${skill.word1} | Playwright`);

        await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
        await page.getByRole("searchbox", { name: "Search" }).fill(skill.word2);
        await page.getByRole("link", { name: skill.word2, exact: true }).first().click();

        await expect(page).toHaveTitle(`${skill.word2} | Playwright`);
    });

}
