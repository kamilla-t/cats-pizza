import { test } from '../../../fixtures/app.fixture';

test('Empty cart has correct view', async ({ mainApp }) => {
  await mainApp.cartPage.setApiEmptyCart();
  await mainApp.navigationBar.openMainPage();
  await mainApp.navigationBar.openCartPage();
  await mainApp.cartPage.assertCorrectEmptyView();
});

test('Cart with one item has correct view', async ({ mainApp }) => {
  await mainApp.cartPage.setApiCartWithOneItem();
  await mainApp.navigationBar.openMainPage();
  await mainApp.navigationBar.openCartPage();
  await mainApp.cartPage.assertCorrectViewWithOneItem();
});
