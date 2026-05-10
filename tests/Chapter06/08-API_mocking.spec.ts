import { test, expect } from "@playwright/test";

const mockingData = [
    { name: "Fruit 1", id: 1 },
    { name: "Fruit 2", id: 2 },
    { name: "Fruit 3", id: 3 },
    { name: "Fruit 4", id: 4 },
    { name: "Fruit 5", id: 5 },
];

test("API Mocking Test", async ({ page }) => {
    await page.route("*/**/api/v1/fruits", async (route) => {
        const json = mockingData;
        await route.fulfill({ json });
    });

    await page.goto(`${process.env.API_MOCKING_URL}`);
    // await expect(page.getByText(mockingData[0].name)).toBeVisible();

    for (const key in mockingData) {
        console.log(mockingData[key].name);
        expect(page.getByText(mockingData[key].name)).toBeVisible();
    }
});
