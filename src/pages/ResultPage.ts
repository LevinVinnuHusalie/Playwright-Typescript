import { Page, expect } from "@playwright/test";

export class ResultPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }
}
