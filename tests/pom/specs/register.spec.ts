import { test } from '../../fixtures/app.fixture';
import { testUsers } from '../data/testData';

test.describe('Auth', () => {
  let createdUserEmail: string | null = null;

  test.afterEach(async ({ mainApp }) => {
    if (!createdUserEmail) return;
    await mainApp.cleanupApi.deleteUserByEmail(createdUserEmail);
    createdUserEmail = null;
  });

  test('Register a new user', async ({ mainApp }) => {
    createdUserEmail = `${Date.now()}@test.ru`;
    await mainApp.navigationBar.openMainPage();
    await mainApp.navigationBar.openLoginPage();
    await mainApp.registerPage.openRegisterPage();
    await mainApp.registerPage.register('Kamilla', createdUserEmail, testUsers.existing.password);
    await mainApp.loginPage.assertSignedIn();
  });

  test('Reject duplicate email registration', async ({ mainApp }) => {
    await mainApp.navigationBar.openMainPage();
    await mainApp.navigationBar.openLoginPage();
    await mainApp.registerPage.openRegisterPage();
    await mainApp.registerPage.register(
      'Kamilla',
      testUsers.existing.email,
      testUsers.existing.password,
    );
    await mainApp.loginPage.assertErrorMessage('Пользователь с таким email уже существует');
  });
});
