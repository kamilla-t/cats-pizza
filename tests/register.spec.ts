import { test, expect } from '@playwright/test';
import { MainApp } from '../pages/main-app';

let mainApp: MainApp;

//const TEST_USER_EMAIL = 'test@test.ru';
const TEST_USER_PASSWORD = 'Qwerty';
const API_URL = 'http://localhost:3001/api';

test.describe('Auth', () => {
  let createdUserEmail: string | null = null;

  test.afterAll(async ({ request }) => {
    if (!createdUserEmail) return;

    await request.delete(`${API_URL}/users/by-email`, {
      data: { email: createdUserEmail },
    });

    createdUserEmail = null;
  });

  test('Register a new user', async ({ page }) => {
    mainApp = new MainApp(page);
    createdUserEmail = `${Date.now()}@test.ru`;

    await page.goto('/');
    await mainApp.navigationBar.loginBtn.click();
    await mainApp.registerPage.registerBtn.click();
    await mainApp.registerPage.register('Kamilla', createdUserEmail, TEST_USER_PASSWORD);
    await expect(mainApp.navigationBar.logOutBtn).toBeVisible();
  });
});
