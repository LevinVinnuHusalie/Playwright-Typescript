import { test, expect } from "@playwright/test";

import path from "path";
import { readExcelFile } from "../../src/utils/ExcelHelper";

const filePath = path.join(__dirname, "../../test-data/qa/test-data.xlsx");

const records = readExcelFile(filePath);

for (const record of records) {
    test(`Data Driven Testing with Excel Data with ${record.Skill1} and ${record.Skill2}`, async ({ page }) => {
        await page.goto(`${process.env.PLAYWRIGHT_URL}`);

        await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
        await page.getByRole("searchbox", { name: "Search" }).fill(record.Skill1);
        await page.getByRole("link", { name: record.Skill1, exact: true }).first().click();

        await expect(page).toHaveTitle(`${record.Skill1} | Playwright`);

        await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
        await page.getByRole("searchbox", { name: "Search" }).fill(record.Skill2);
        await page.getByRole("link", { name: record.Skill2, exact: true }).click();

        await expect(page).toHaveTitle(`${record.Skill2} | Playwright`);
    });
}
