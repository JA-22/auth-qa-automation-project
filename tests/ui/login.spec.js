const { test, expect } = require('@playwright/test');

test('user can login successfully', async ({ page }) => {

  await page.goto('http://localhost:5173');

  await page.fill('#email', 'user@test.com');
  await page.fill('#password', '123456');

  await page.click('#loginButton');

});