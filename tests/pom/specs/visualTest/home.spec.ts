import { test } from '../../../fixtures/app.fixture';

test('Home page with items has correct view', async ({ mainApp }) => {
  await mainApp.homePage.setupApiEmptyCart();
  await mainApp.navigationBar.openMainPage();
  await mainApp.homePage.assertCorrectPageView();
});

test('Order modal has correct view', async ({ mainApp }) => {
  await mainApp.homePage.setupApiEmptyCart();
  await mainApp.navigationBar.openMainPage();
  await mainApp.orderModal.openOrderModal();
  await mainApp.orderModal.assertCorrectPageViewWithOrderModal();
});

test('Empty cart drawer has correct view', async ({ mainApp }) => {
  await mainApp.homePage.setupApiEmptyCart();
  await mainApp.navigationBar.openMainPage();
  await mainApp.navigationBar.openCartDrawer();
  await mainApp.cartDrawer.assertCorrectViewEmptyCartDrawer();
});

test('Cart drawer with one item has correct view', async ({ mainApp }) => {
  await mainApp.homePage.setupApiCartWithItem();
  await mainApp.navigationBar.openMainPage();
  await mainApp.navigationBar.openCartDrawer();
  await mainApp.cartDrawer.assertCorrectViewCartDrawerWithOneItem();
});
