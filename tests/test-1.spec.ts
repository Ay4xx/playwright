import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test('compra de item', async ({ page }) => {

  qase.id(1);

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Ayax');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Gaytan');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('22222');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="payment-info-label"]')).toBeVisible();
  await expect(page.locator('[data-test="shipping-info-label"]')).toBeVisible();
  await expect(page.locator('[data-test="total-label"]')).toBeVisible();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="checkout-complete-container"]')).toBeVisible();
});