import { Locator, Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get registerBtn(): Locator {
    return this.page.getByTestId('registerButton');
  }
  get nameInput(): Locator {
    return this.page.getByTestId('nameInput');
  }
  get emailInput(): Locator {
    return this.page.getByTestId('emailInput');
  }
  get passwordInput(): Locator {
    return this.page.getByTestId('passwordInput');
  }
  get rePasswordInput(): Locator {
    return this.page.getByTestId('rePasswordInput');
  }
  get signInBtn(): Locator {
    return this.page.getByTestId('signInBtn');
  }

  async register(name: string, email: string, password: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.rePasswordInput.fill(password);
    await this.signInBtn.click();
  }
}
