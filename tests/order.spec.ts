import { test, expect } from '@playwright/test';
import { MainApp } from '../pages/main-app';

let mainApp: MainApp;

test('Checkout - Login during purchase', async ({ page }) => {
  mainApp = new MainApp(page);
  await page.goto('/');
  await mainApp.homePage.addToCartBtn.first().click();
  await mainApp.orderModal.addToCart.click();

  await expect(mainApp.navigationBar.cartTab).toContainText('(1)');
  await expect(mainApp.navigationBar.cartTab).toBeVisible();
  await mainApp.navigationBar.cartTab.click();

  await mainApp.cartDrawer.makeOrderBtn.click();

  await expect(page).toHaveURL('/cart');

  await mainApp.cartPage.makeOrderButton.click();

  await mainApp.loginPage.login('test@test.ru', 'Qwerty');
  await expect(mainApp.navigationBar.logOutBtn).toBeVisible();

  await mainApp.deliveryModal.fillDeliveryForm('Kazan', 'Kotik street', '5', '100', 'Test comment');

  await expect(mainApp.orderConfirmedModal.modalTitle).toHaveText('Заказ оформлен');
  await mainApp.orderConfirmedModal.closeBtn.click();

  await mainApp.navigationBar.myOrdersTab.click();
  // await expect(mainApp.myOrdersPage.ordersList).toHaveCount(1);
  await expect(mainApp.myOrdersPage.ordersList.getByRole('listitem').first()).toBeVisible();
});

test('Checkout - User logged in before purchase', async ({ page }) => {
  mainApp = new MainApp(page);
  await page.goto('/');
  await mainApp.navigationBar.loginBtn.click();
  await mainApp.loginPage.login('test@test.ru', 'Qwerty');
  await expect(mainApp.navigationBar.logOutBtn).toBeVisible();

  await mainApp.homePage.addToCartBtn.first().click();
  await mainApp.orderModal.addToCart.click();

  await expect(mainApp.navigationBar.cartTab).toContainText('(1)');
  await expect(mainApp.navigationBar.cartTab).toBeVisible();
  await mainApp.navigationBar.cartTab.click();

  await mainApp.cartDrawer.makeOrderBtn.click();

  await expect(page).toHaveURL('/cart');

  await mainApp.cartPage.makeOrderButton.click();

  await mainApp.deliveryModal.fillDeliveryForm('Kazan', 'Kotik street', '5', '100', 'Test comment');

  await expect(mainApp.orderConfirmedModal.modalTitle).toHaveText('Заказ оформлен');
  await mainApp.orderConfirmedModal.closeBtn.click();

  await mainApp.navigationBar.myOrdersTab.click();
  // await expect(mainApp.myOrdersPage.ordersList).toHaveCount(0);
  await expect(mainApp.myOrdersPage.ordersList.getByRole('listitem').first()).toBeVisible();
});
