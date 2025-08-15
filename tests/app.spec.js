const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
  // The test runner in this context serves files from the root of the repo.
  await page.goto('file://' + __dirname + '/../index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/東京近郊・川遊びインタラクティブガイド/);
});
