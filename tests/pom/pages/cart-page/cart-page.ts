import { expect, Locator, Page } from '@playwright/test';
import { MainApp } from '../main-app';

export class CartPage {
  readonly page: Page;
  readonly mainApp: MainApp;
  constructor(page: Page) {
    this.page = page;
    this.mainApp = new MainApp(page);
  }

  get makeOrderButton(): Locator {
    return this.page.getByTestId('makeOrderBtn');
  }
  get removeItemBtn(): Locator {
    return this.page.getByTestId('removeBtn');
  }
  get clearCartBtn(): Locator {
    return this.page.getByTestId('clearCartBtn');
  }
  get itemCounterInput(): Locator {
    return this.page.getByTestId('itemCounter');
  }
  get plusBtn(): Locator {
    return this.page.getByTestId('plusBtn');
  }
  get minusBtn(): Locator {
    return this.page.getByTestId('minusBtn');
  }

  async assertCartIsEmpty() {
    await expect(
      this.page.getByText('Корзина пуста. Добавьте котика с главной страницы.'),
    ).toBeVisible();
  }
  async assertCatCount(value: string) {
    await expect(this.itemCounterInput).toHaveValue(value);
  }
  async removeFirstItemFromCart() {
    await this.removeItemBtn.first().click();
  }
  async clearCart() {
    await this.clearCartBtn.click();
  }
  async addOneMoreSameCat() {
    await this.plusBtn.click();
  }
  async setApiEmptyCart() {
    await this.mainApp.cartApi.setEmptyCart();
  }
  async setApiCartWithOneItem() {
    await this.mainApp.cartApi.setCartWithOneItem();
  }
  async assertCorrectViewWithOneItem() {
    await expect(this.page).toHaveScreenshot('cartWithOneItem.png');
  }
  async assertCorrectEmptyView() {
    await expect(this.page).toHaveScreenshot('emptyCart.png');
  }
}
