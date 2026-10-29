import { Page } from '@playwright/test';
import { fakeAuth } from '../../mockData/auth';

export class AuthApi {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async setupAuth() {
    await this.page.addInitScript((auth) => {
      window.localStorage.setItem('auth', JSON.stringify(auth));
    }, fakeAuth);
  }
}
