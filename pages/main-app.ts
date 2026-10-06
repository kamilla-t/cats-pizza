import { Page } from '@playwright/test';
import { LoginPage } from './login-page/login-page';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { RegisterPage } from './register-page/register-page';

export class MainApp {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public get loginPage(): LoginPage {
    return new LoginPage(this.page);
  }
  public get navigationBar(): NavigationBar {
    return new NavigationBar(this.page);
  }
  public get registerPage(): RegisterPage {
    return new RegisterPage(this.page);
  }
}
