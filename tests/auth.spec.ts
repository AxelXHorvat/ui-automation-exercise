// I grouped all 5 required test cases into a single file for clarity.
// In a real project I would split them by feature(Login,Register) but for this challenge it’s easier to review.

import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';


// Handle cookie consent popup if it appears. I hate it.
test.beforeEach(async ({ page }) => {
  await page.goto('/');
  const acceptButton = page.locator('button:has-text("Consent")');
  if (await acceptButton.isVisible({ timeout: 5000 }).catch(() => false)) {
    await acceptButton.click();
  }
});

// Login tests
test('Valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('AxelHorvat@example.com', 'LetsGoVerisk!');
  await loginPage.expectLoggedIn('Logged in');

  await loginPage.logout();
  
});

test('Invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('DoesNotExists@test.com', 'notMyPassword');
  await loginPage.expectLoginError();
});


//Register tests
test('Register new user', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  const email = `user_${Date.now()}@test.com`; // unique email each run

  await registerPage.goto();
  await registerPage.startSignup('Michael', email);
  await registerPage.completeSignup('LetsgoVerisk!');
  await registerPage.expectAccountCreated();
});

test('Register with existing email', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.goto();
  await registerPage.startSignup('Michael Jackson', 'axel.horvat@gmail.com');
  await registerPage.expectEmailAlreadyExistsError();
});




