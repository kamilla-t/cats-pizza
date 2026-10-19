import { Locator, Page } from '@playwright/test';

export class OrderModal {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get addToCart(): Locator {
    return this.page.getByTestId('catModalAddToCartBtn');
  }
}
