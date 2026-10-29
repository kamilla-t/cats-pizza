import { expect, Locator, Page } from '@playwright/test';

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
  get registerModal(): Locator {
    return this.page.getByTestId('modal');
  }
  async openRegisterPage() {
    await this.registerBtn.click();
  }
  async register(name: string, email: string, password: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.rePasswordInput.fill(password);
    await this.signInBtn.click();
  }
  async assertRegisterPageCorrectView() {
    await expect(this.registerModal).toHaveScreenshot('registerPage.png');
  }
}
