import { Locator, Page } from '@playwright/test';

export class DeliveryModal {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get cityField(): Locator {
    return this.page.getByLabel('Город*:');
  }
  get streetField(): Locator {
    return this.page.getByLabel('Улица*:');
  }
  get buildingField(): Locator {
    return this.page.getByLabel('Дом*:');
  }
  get apartmentField(): Locator {
    return this.page.getByLabel('Квартира:');
  }
  get commentField(): Locator {
    return this.page.getByLabel('Комментарий курьеру:');
  }
  get onlineRadioOption(): Locator {
    return this.page.getByLabel('Онлайн-картой');
  }
  get cashRadioOption(): Locator {
    return this.page.getByLabel('Наличными курьеру');
  }
  get confirmOrderButton(): Locator {
    return this.page.getByRole('button', { name: 'Подтвердить заказ' });
  }

  async fillDeliveryForm(
    city: string,
    street: string,
    building: string,
    apartment: string,
    comment: string,
  ) {
    await this.cityField.fill(city);
    await this.streetField.fill(street);
    await this.buildingField.fill(building);
    await this.apartmentField.fill(apartment);
    await this.commentField.fill(comment);
    await this.confirmOrderButton.click();
  }
}
