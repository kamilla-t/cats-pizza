import { expect, Locator, Page } from '@playwright/test';
import { MainApp } from '../main-app';

export class MyOrdersPage {
  readonly page: Page;
  readonly mainApp: MainApp;
  constructor(page: Page) {
    this.page = page;
    this.mainApp = new MainApp(page);
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
  async checkHasOrder() {
    await expect(this.ordersList.getByRole('listitem').first()).toBeVisible();
  }
  async setApiWithOneOrder() {
    await this.mainApp.authApi.setupAuth();
    await this.mainApp.ordersApi.setOneOrder();
  }
  async setApiEmptyOrders() {
    await this.mainApp.authApi.setupAuth();
    await this.mainApp.ordersApi.setEmptyOrders();
  }
  async assertCorrectViewWithOneOrder() {
    await expect(this.page).toHaveScreenshot('ordersListWithOneItem.png');
  }
  async assertCorrectViewEmptyOrdersList() {
    await expect(this.page).toHaveScreenshot('emptyOrdersList.png');
  }
}
