import { expect, type Locator, type Page } from '@playwright/test';
import { MainApp } from '../main-app';

export class LoginPage {
  readonly page: Page;
  readonly mainApp: MainApp;
  constructor(page: Page) {
    this.page = page;
    this.mainApp = new MainApp(this.page);
  }

  get emailInput(): Locator {
    return this.page.getByTestId('emailInput');
  }
  get passwordInput(): Locator {
    return this.page.getByTestId('passwordInput');
  }
  get loginBtn(): Locator {
    return this.page.getByTestId('signInBtn');
  }
  get loginModal(): Locator {
    return this.page.getByTestId('modal');
  }
  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
  async assertSignedIn() {
    await expect(this.mainApp.navigationBar.logOutBtn).toBeVisible();
  }
  async assertErrorMessage(message: string) {
    await expect(this.page.getByText(message)).toBeVisible();
  }
  async assertLoginPageCorrectView() {
    await expect(this.loginModal).toHaveScreenshot('loginPage.png');
  }
}
