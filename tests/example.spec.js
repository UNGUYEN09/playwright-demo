import { test, expect } from '@playwright/test';

test('homepage has title and links to about page', async ({ page }) => {
  // Step 1: Open the page
  await page.goto('https://example.com');

  // Step 2: Check the title
  await expect(page).toHaveTitle(/Example Domain/);

  // Step 3: Locate the "More information..." link
  const moreInfo = page.locator('a');

  // Step 4: Verify the link text
  await expect(moreInfo).toHaveText('Learn more');

  // Step 5: Click the link
  await moreInfo.click();

  // Step 6: Confirm new URL
  await expect(page).toHaveURL(/iana.org/);
});
