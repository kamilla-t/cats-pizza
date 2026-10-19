import { expect, Locator, Page } from '@playwright/test';

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

  async verifyAndCloseOrderConfirmedModal() {
    await expect(this.modalTitle).toHaveText('Заказ оформлен');
    await this.closeBtn.click();
  }
}
