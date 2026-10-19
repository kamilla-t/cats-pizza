import { expect, Locator, Page } from '@playwright/test';
import { MainApp } from '../main-app';

export class HomePage {
  readonly page: Page;
  readonly mainApp: MainApp;
  constructor(page: Page) {
    this.page = page;
    this.mainApp = new MainApp(this.page);
  }

  get addToCartBtn(): Locator {
    return this.page.getByTestId('addToCartBtn');
  }

  async addFirstCatToCard() {
    await this.addToCartBtn.first().click();
    await this.mainApp.orderModal.addToCart.click();
    await expect(this.mainApp.navigationBar.cartTab).toContainText('(1)');
    await expect(this.mainApp.navigationBar.cartTab).toBeVisible();
  }

  async goToCheckoutFromCart() {
    await this.mainApp.navigationBar.cartTab.click();
    await this.mainApp.cartDrawer.makeOrderBtn.click();
    await expect(this.page).toHaveURL('/cart');
    await this.mainApp.cartPage.makeOrderButton.click();
  }
}
