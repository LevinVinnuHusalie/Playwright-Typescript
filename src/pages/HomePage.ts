import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchBtn: Locator;
    readonly searchBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBtn = page.getByRole("button", { name: "Search (Ctrl+K)" });
        this.searchBox = page.getByRole("searchbox", { name: "Search" })
    }

    async goToUrl(url: string) {
        if (process.env.ENVIRONMENT === 'qa') {
            console.log("Running tests in QA environment");
        } else if (process.env.ENVIRONMENT === 'dev') {
            console.log("Running tests in Development environment");
        }
        await this.page.goto(url);
    }

    async searchForKeyword(keyword: string) {
        await this.searchBtn.click();
        await this.searchBox.fill(keyword);
        await this.page.getByRole("link", { name: keyword, exact: true }).first().click();
    }
}