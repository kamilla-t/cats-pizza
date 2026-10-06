import { Locator, Page } from '@playwright/test';

export class NavigationBar {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get logoTab(): Locator {
    return this.page.getByTestId('logo');
  }
  get mainTab(): Locator {
    return this.page.getByTestId('mainTab');
  }
  get myOrdersTab(): Locator {
    return this.page.getByTestId('myOrdersTab');
  }
  get cartTab(): Locator {
    return this.page.getByTestId('cartTab');
  }
  get loginBtn(): Locator {
    return this.page.getByTestId('signInButton');
  }
  get logOutBtn(): Locator {
    return this.page.getByTestId('signOutButton');
  }
}
