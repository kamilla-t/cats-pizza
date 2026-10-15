import { test, expect } from 'playwright/test';
import { MainApp } from '../pages/main-app';

let mainApp: MainApp;

const TEST_USER_EMAIL = 'test@test.ru';
const TEST_USER_PASSWORD = 'Qwerty';
//const API_URL = 'http://localhost:3001/api';

test.describe('Auth', () => {
  test('Successfull login', async ({ page }) => {
    mainApp = new MainApp(page);
    await page.goto('/');
    await mainApp.navigationBar.loginBtn.click();
    await mainApp.loginPage.login(TEST_USER_EMAIL, TEST_USER_PASSWORD);
    await expect(mainApp.navigationBar.logOutBtn).toBeVisible();
  });
});
