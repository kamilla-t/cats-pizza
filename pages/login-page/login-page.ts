import type { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get emailInput(): Locator {
    return this.page.getByTestId('emailInput');
  }
  get passwordInput(): Locator {
    return this.page.getByTestId('passwordInput');
  }
  get loginBtn(): Locator {
    return this.page.getByTestId('signInBtn');
  }
  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}
