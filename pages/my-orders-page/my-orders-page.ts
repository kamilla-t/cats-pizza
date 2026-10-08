import { Locator, Page } from '@playwright/test';

export class MyOrdersPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get myOrdersHeader(): Locator {
    return this.page.getByTestId('');
  }
  get ordersList(): Locator {
    return this.page.getByTestId('ordersList');
  }
  get orderDetailsItem(): Locator {
    return this.page.getByTestId('');
  }
}
