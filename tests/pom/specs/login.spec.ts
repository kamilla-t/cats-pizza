import { test } from '../../fixtures/app.fixture';
import { testUsers } from '../data/testData';

test.describe('Auth', () => {
  test('Successfull login', async ({ mainApp }) => {
    await mainApp.navigationBar.openMainPage();
    await mainApp.navigationBar.openLoginPage();
    await mainApp.loginPage.login(testUsers.existing.email, testUsers.existing.password);
    await mainApp.loginPage.assertSignedIn();
  });
});
