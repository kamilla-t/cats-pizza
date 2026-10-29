import { test } from '../../../fixtures/app.fixture';

test('Empty orders has correct view', async ({ mainApp }) => {
  await mainApp.myOrdersPage.setApiEmptyOrders();
  await mainApp.navigationBar.openMainPage();
  await mainApp.navigationBar.openMyOrdersPage();
  await mainApp.myOrdersPage.assertCorrectViewEmptyOrdersList();
});

test('One order have correct view', async ({ mainApp }) => {
  await mainApp.myOrdersPage.setApiWithOneOrder();
  await mainApp.navigationBar.openMainPage();
  await mainApp.navigationBar.openMyOrdersPage();
  await mainApp.myOrdersPage.assertCorrectViewWithOneOrder();
});
