import { Page } from '@playwright/test';
import { LoginPage } from './login-page/login-page';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { RegisterPage } from './register-page/register-page';
import { HomePage } from './home-page/home-page';
import { OrderModal } from './shared/order-modal';
import { CartDrawer } from './shared/cart-drawer';
import { CartPage } from './cart-page/cart-page';
import { DeliveryModal } from './shared/delivery-modal';
import { OrderConfirmedModal } from './shared/order-confirmed-modal';
import { MyOrdersPage } from './my-orders-page/my-orders-page';
import { CleanupApi } from '../API/cleanupApi';
import { CartApi } from '../API/mockApi/CartApi';
import { CatsApi } from '../API/mockApi/catsApi';
import { OrdersApi } from '../API/mockApi/ordersApi';
import { AuthApi } from '../API/mockApi/AuthApi';

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
  public get homePage(): HomePage {
    return new HomePage(this.page);
  }
  public get orderModal(): OrderModal {
    return new OrderModal(this.page);
  }
  public get cartDrawer(): CartDrawer {
    return new CartDrawer(this.page);
  }
  public get cartPage(): CartPage {
    return new CartPage(this.page);
  }
  public get deliveryModal(): DeliveryModal {
    return new DeliveryModal(this.page);
  }
  public get orderConfirmedModal(): OrderConfirmedModal {
    return new OrderConfirmedModal(this.page);
  }
  public get myOrdersPage(): MyOrdersPage {
    return new MyOrdersPage(this.page);
  }
  public get cleanupApi(): CleanupApi {
    return new CleanupApi(this.page.request, 'http://localhost:3001/api');
  }
  public get cartApi(): CartApi {
    return new CartApi(this.page);
  }
  public get catsApi(): CatsApi {
    return new CatsApi(this.page);
  }
  public get ordersApi(): OrdersApi {
    return new OrdersApi(this.page);
  }
  public get authApi(): AuthApi {
    return new AuthApi(this.page);
  }
}
