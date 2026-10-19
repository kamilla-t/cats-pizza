import { Locator, Page } from '@playwright/test';

export class NavigationBar {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get logoTab(): Locator {
    return this.page.getByTestId('logo');
  }
  get mainTab(): Locator {
    return this.page.getByTestId('mainTab');
  }
  get myOrdersTab(): Locator {
    return this.page.getByTestId('myOrdersTab');
  }
  get cartTab(): Locator {
    return this.page.getByTestId('cartTab');
  }
  get loginBtn(): Locator {
    return this.page.getByTestId('signInButton');
  }
  get logOutBtn(): Locator {
    return this.page.getByTestId('signOutButton');
  }

  async openMainPage() {
    await this.page.goto('/');
  }
  async openMyOrdersPage() {
    await this.myOrdersTab.click();
  }
  async openCartPage() {
    await this.cartTab.click();
  }
  async openLoginPage() {
    await this.loginBtn.click();
  }
  async logOut() {
    await this.logOutBtn.click();
  }
}
