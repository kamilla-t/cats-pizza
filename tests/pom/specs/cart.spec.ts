import { test } from '../../fixtures/app.fixture';

test('Show empty cart state', async ({ mainApp }) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.navigationBar.openCartPage();
  await mainApp.cartPage.assertCartIsEmpty();
});

test('Removing last item makes cart empty', async ({ mainApp }) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.homePage.addFirstCatToCard();
  await mainApp.navigationBar.openCartPage();
  await mainApp.cartPage.removeFirstItemFromCart();
  await mainApp.cartPage.assertCartIsEmpty();
});

test('Clear cart removes all items', async ({ mainApp }) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.homePage.addFirstCatToCard();
  await mainApp.navigationBar.openCartPage();
  await mainApp.cartPage.clearCart();
  await mainApp.cartPage.assertCartIsEmpty();
});

test('Update cart badge and input value when quantity changes', async ({ mainApp }) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.homePage.addFirstCatToCard();
  await mainApp.navigationBar.openCartPage();
  await mainApp.cartPage.addOneMoreSameCat();
  await mainApp.cartPage.assertCatCount('2');
  await mainApp.homePage.assertCartBadgeCount(2);
});
