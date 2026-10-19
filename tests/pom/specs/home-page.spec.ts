import { test, expect } from '../../fixtures/app.fixture';

test('has header', async ({ page, mainApp }) => {
  await mainApp.navigationBar.openMainPage();

  const header = page.getByTestId('homePageHeader');
  await expect(header).toBeVisible();
});

test('Check card list items', async ({ page, mainApp }) => {
  await mainApp.navigationBar.openMainPage();

  const firstCard = page.getByTestId('catCard_0');
  const cardListItems = page.getByTestId(/catCard_/);

  await expect(firstCard).toBeVisible();
  await expect(cardListItems).toHaveCount(9);
});
