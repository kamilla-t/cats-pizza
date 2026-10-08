import { Locator, Page } from '@playwright/test';

export class OrderConfirmedModal {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get modalTitle(): Locator {
    return this.page.getByTestId('orderConfirmedModalTitle');
  }
  get closeBtn(): Locator {
    return this.page.getByTestId('closeBtn');
  }
}
