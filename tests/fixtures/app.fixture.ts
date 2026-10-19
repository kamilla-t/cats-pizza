import { test as base } from '@playwright/test';
import { MainApp } from '../pom/pages/main-app';

// Declare the types of your fixtures.
type MyFixtures = {
  mainApp: MainApp;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  mainApp: async ({ page }, use) => {
    const mainApp = new MainApp(page);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(mainApp);
  },
});
export { expect } from '@playwright/test';
