import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');
  await page.click('#checkout');
});

test('user can complete checkout', async ({ page }) => {
  await page.fill('#first-name', 'Ian');
  await page.fill('#last-name', 'Tester');
  await page.fill('#postal-code', 'KY8 1AA');
  await page.click('#continue');
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

test('checkout without postcode shows an error', async ({ page }) => {
  await page.fill('#first-name', 'Ian');
  await page.fill('#last-name', 'Tester');
  await page.click('#continue');
  await expect(page.locator('[data-test="error"]')).toHaveText('Error: Postal Code is required');
});