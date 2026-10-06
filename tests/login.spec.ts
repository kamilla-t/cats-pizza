import { test, expect } from 'playwright/test';
import { MainApp } from '../pages/main-app';

let mainApp: MainApp;

test('Successfull login', async ({ page }) => {
  mainApp = new MainApp(page);
  await page.goto('/');
  await mainApp.navigationBar.loginBtn.click();
  await mainApp.loginPage.login('test@test.ru', 'Qwerty');
  await expect(mainApp.navigationBar.logOutBtn).toBeVisible();
});
