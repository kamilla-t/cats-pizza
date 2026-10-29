import { test } from '../../../fixtures/app.fixture';

test('Login page has correct view', async ({ mainApp }) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.navigationBar.openLoginPage();
  await mainApp.loginPage.assertLoginPageCorrectView();
});
