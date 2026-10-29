import { Page } from '@playwright/test';
import { cats } from '../../mockData/cats';

export class CatsApi {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async setCatsItems() {
    await this.page.route('*/**/api/cats', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify(cats),
      });
    });
  }
}
