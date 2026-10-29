import { test } from '../../../fixtures/app.fixture';

test('Register page has correct view', async ({ mainApp }) => {
  await mainApp.navigationBar.openMainPage();
  await mainApp.navigationBar.openLoginPage();
  await mainApp.registerPage.openRegisterPage();
  await mainApp.registerPage.assertRegisterPageCorrectView();
});
