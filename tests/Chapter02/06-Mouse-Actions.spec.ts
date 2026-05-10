// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test
test('Mouse actions in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://playwright.dev/');

    // Left button click
    // await page.getByRole('link', { name: 'Get started' }).click({ button: 'left' });

    // Middle button click
    // await page.getByRole('link', { name: 'Get started' }).click({ button :'middle'});

    // Right button click
    // await page.getByRole('link', { name: 'Get started' }).click({ button: 'right' });

    // Mouse hover
    // await page.getByRole('button', { name: 'Switch between dark and light' }).hover();

    // Double click
    await page.getByRole('button', { name: 'Switch between dark and light' }).dblclick();
});