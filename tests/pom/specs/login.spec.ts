import { test } from '../../fixtures/app.fixture';
import { testUsers } from '../data/testData';

test.describe('Login checks', () => {
  test('Successfull login', async ({ mainApp }) => {
    await mainApp.navigationBar.openMainPage();
    await mainApp.navigationBar.openLoginPage();
    await mainApp.loginPage.login(testUsers.existing.email, testUsers.existing.password);
    await mainApp.loginPage.assertSignedIn();
  });

  const invalidCredentialData = [
    {
      id: 'Invalid email',
      login: '123@gmail.com',
      password: testUsers.existing.password,
    },
    {
      id: 'Invalid password',
      login: testUsers.existing.email,
      password: '123',
    },
  ];

  for (const data of invalidCredentialData) {
    test(`Unsuccessful login - ${data.id}`, async ({ mainApp }) => {
      await mainApp.navigationBar.openMainPage();
      await mainApp.navigationBar.openLoginPage();
      await mainApp.loginPage.login(data.login, data.password);
      await mainApp.loginPage.assertErrorMessage('Неверный email или пароль');
    });
  }
});
