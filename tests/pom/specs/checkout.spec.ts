import { test } from '../../fixtures/app.fixture';
import { testUsers } from '../data/testData';

test('Authorised user sees validation error for empty required address fields', async ({
  mainApp,
}) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.homePage.addFirstCatToCard();
  await mainApp.homePage.goToCheckoutFromCart();
  await mainApp.loginPage.login(testUsers.existing.email, testUsers.existing.password);
  await mainApp.loginPage.assertSignedIn();
  await mainApp.orderConfirmedModal.assertCheckoutOpened();
  await mainApp.deliveryModal.fillWithoutAddress();
  await mainApp.deliveryModal.assertValidationError(
    'Пожалуйста, заполните обязательные поля адреса.',
  );
});
