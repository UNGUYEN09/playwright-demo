import { test, expect } from '@playwright/test';

test('login form works correctly', async ({ page }) => {
  // Go to the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill in the username and password
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // Click the login button
  await page.click('button[type="submit"]');

  // Verify the success message
  await expect(page.locator('#flash')).toContainText(
    'You logged into a secure area!'
  );
});
