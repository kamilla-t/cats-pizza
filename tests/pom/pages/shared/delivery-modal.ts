import { expect, Locator, Page } from '@playwright/test';

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

  async fillDeliveryForm(address: {
    city: string;
    street: string;
    building: string;
    apartment: string;
    comment: string;
  }) {
    await this.cityField.fill(address.city);
    await this.streetField.fill(address.street);
    await this.buildingField.fill(address.building);
    await this.apartmentField.fill(address.apartment);
    await this.commentField.fill(address.comment);
    await this.confirmOrderButton.click();
  }
  async fillWithoutAddress() {
    await this.confirmOrderButton.click();
  }
  async assertValidationError(message: string) {
    await expect(this.page.getByText(message)).toBeVisible();
  }
}
