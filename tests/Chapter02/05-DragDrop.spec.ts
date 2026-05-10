import {test, expect} from '@playwright/test';

test("Drag and Drop Test Case", async ({ page }) => {
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

    const frame = page.frameLocator('.demo-frame').nth(0);
    const dragElement = frame.getByText('High Tatras 4 View larger'); 
    const dropElement = frame.locator('#trash');

    await dragElement.dragTo(dropElement);
    await expect(dropElement).toContainText('High Tatras 4 View larger');

});
