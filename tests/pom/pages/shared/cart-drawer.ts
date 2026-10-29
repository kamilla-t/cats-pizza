import { expect, Locator, Page } from '@playwright/test';

export class CartDrawer {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get cartDrawer(): Locator {
    return this.page.getByTestId('cartDrawer');
  }
  async assertCorrectViewEmptyCartDrawer() {
    await expect(this.cartDrawer).toHaveScreenshot('emptyCartDrawer.png');
  }
  async assertCorrectViewCartDrawerWithOneItem() {
    await expect(this.cartDrawer).toHaveScreenshot('cartDrawerWithOneItem.png');
  }
}
