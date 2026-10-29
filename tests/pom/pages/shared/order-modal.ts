import { expect, Locator, Page } from '@playwright/test';
import { MainApp } from '../main-app';

export class OrderModal {
  readonly page: Page;
  readonly mainApp: MainApp;
  constructor(page: Page) {
    this.page = page;
    this.mainApp = new MainApp(page);
  }

  get orderModal(): Locator {
    return this.page.getByTestId('modal');
  }
  get addToCart(): Locator {
    return this.page.getByTestId('catModalAddToCartBtn');
  }
  async openOrderModal() {
    await this.mainApp.homePage.addToCartBtn.first().click();
  }
  async assertCorrectPageViewWithOrderModal() {
    await expect(this.orderModal).toHaveScreenshot('orderModal.png');
  }
}
