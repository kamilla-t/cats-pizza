import { test, expect } from '@playwright/test';
import { MainApp } from '../pages/main-app';

let mainApp: MainApp;

test('Register a new user', async ({ page }) => {
  mainApp = new MainApp(page);
  await page.goto('/');
  await mainApp.navigationBar.loginBtn.click();
  await mainApp.registerPage.registerBtn.click();
  await mainApp.registerPage.register('Kamilla', `${Date.now()}@test.ru`, 'Password123');
  await expect(mainApp.navigationBar.logOutBtn).toBeVisible();
});
