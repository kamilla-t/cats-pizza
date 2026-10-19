import { Locator, Page } from '@playwright/test';

export class CartDrawer {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get makeOrderBtn(): Locator {
    return this.page.getByTestId('goToCartPageBtn');
  }
}
