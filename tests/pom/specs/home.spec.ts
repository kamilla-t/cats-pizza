import { test } from '../../fixtures/app.fixture';

test('Catalog opens and shows cards', async ({ mainApp }) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.homePage.assertLoaded();
  await mainApp.homePage.assertCardsVisible();
});

test('Guest adds first cat to cart and sees badge count', async ({ mainApp }) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.homePage.addFirstCatToCard();
  await mainApp.homePage.assertCartBadgeCount(1);
});

test('Guest opens cart and navigates to cart page', async ({ mainApp }) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.homePage.addFirstCatToCard();
  await mainApp.navigationBar.openCartPage();
  await mainApp.homePage.assertCardPageOpened();
});
