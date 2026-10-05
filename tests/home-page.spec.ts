import { test, expect } from '@playwright/test';

test('has header', async ({ page }) => {
  await page.goto('/');

  const header = page.getByTestId('homePageHeader');
  await expect(header).toBeVisible();
});

test('Check card list items', async ({ page }) => {
  await page.goto('/');
  const firstCard = page.getByTestId('catCard_0');
  const cardListItems = page.getByTestId(/catCard_/);

  await expect(firstCard).toBeVisible();
  await expect(cardListItems).toHaveCount(9);
});
