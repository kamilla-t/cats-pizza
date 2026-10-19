import { test } from '../../fixtures/app.fixture';
import { testAddress, testUsers } from '../data/testData';

test.describe('Orders', () => {
  test.describe.configure({ mode: 'serial' });
  test.afterEach(async ({ mainApp }) => {
    await mainApp.cleanupApi.deleteOrdersByEmail(testUsers.existing.email);
  });

  test('Checkout - Login during purchase', async ({ mainApp }) => {
    await mainApp.navigationBar.openMainPage();
    await mainApp.homePage.addFirstCatToCard();
    await mainApp.homePage.goToCheckoutFromCart();
    await mainApp.loginPage.login(testUsers.existing.email, testUsers.existing.password);
    await mainApp.loginPage.assertSignedIn();
    await mainApp.deliveryModal.fillDeliveryForm(testAddress);
    await mainApp.orderConfirmedModal.verifyAndCloseOrderConfirmedModal();
    await mainApp.navigationBar.openMyOrdersPage();
    await mainApp.myOrdersPage.checkHasOrder();
  });

  test('Checkout - User logged in before purchase', async ({ mainApp }) => {
    await mainApp.navigationBar.openMainPage();
    await mainApp.navigationBar.openLoginPage();
    await mainApp.loginPage.login(testUsers.existing.email, testUsers.existing.password);
    await mainApp.loginPage.assertSignedIn();
    await mainApp.homePage.addFirstCatToCard();
    await mainApp.homePage.goToCheckoutFromCart();
    await mainApp.deliveryModal.fillDeliveryForm(testAddress);
    await mainApp.orderConfirmedModal.verifyAndCloseOrderConfirmedModal();
    await mainApp.navigationBar.openMyOrdersPage();
    await mainApp.myOrdersPage.checkHasOrder();
  });
});
