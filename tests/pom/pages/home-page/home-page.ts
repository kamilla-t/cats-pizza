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
  get homePageHeader(): Locator {
    return this.page.getByTestId('homePageHeader');
  }

  async addFirstCatToCard() {
    await this.addToCartBtn.first().click();
    await this.mainApp.orderModal.addToCart.click();
    await expect(this.mainApp.navigationBar.cartTab).toContainText('(1)');
    await expect(this.mainApp.navigationBar.cartTab).toBeVisible();
  }

  async goToCartPage() {
    await this.mainApp.cartDrawer.makeOrderBtn.click();
  }

  async goToCheckoutFromCart() {
    await this.mainApp.navigationBar.openCartPage();
    await this.goToCartPage();
    await this.assertCardPageOpened();
    await this.mainApp.cartPage.makeOrderButton.click();
  }
  async assertLoaded() {
    await expect(this.page).toHaveURL('/');
    await expect(this.homePageHeader).toBeVisible();
  }
  async assertCardsVisible() {
    const cards = this.page.getByTestId(/catCard_/);
    await expect(cards.first()).toBeVisible();
    await expect(cards).toHaveCount(9);
  }
  async assertCartBadgeCount(count: number) {
    await expect(this.mainApp.navigationBar.cartTab).toContainText(`(${count})`);
  }
  async assertCardPageOpened() {
    await expect(this.page).toHaveURL(/\/cart$/);
    await expect(this.page.getByRole('heading', { name: 'Корзина' })).toBeVisible();
  }
}
