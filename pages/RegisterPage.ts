import { Page, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the signup form
  async goto() {
    await this.page.goto('/');
    await this.page.click('a[href="/login"]');
    await expect(this.page).toHaveURL(/.*\/login/);
  }

  // Fills signup form with name and email
  async startSignup(name: string, email: string) {
    await this.page.fill('input[data-qa="signup-name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.click('button[data-qa="signup-button"]');
  }

  // Fills account details 
  async completeSignup(password: string) {

    // selects Title

    await this.page.click('input[id="id_gender1"]'); // Mr.

    // Password
    await this.page.fill('input[data-qa="password"]', password);

    // Date of birth
    await this.page.selectOption('select[data-qa="days"]', '25');
    await this.page.selectOption('select[data-qa="months"]', '9');
    await this.page.selectOption('select[data-qa="years"]', '1999');

    // Address info
    await this.page.fill('input[data-qa="first_name"]', 'Axel');
    await this.page.fill('input[data-qa="last_name"]', 'Horvat');
    await this.page.fill('input[data-qa="address"]', 'My mothers house');
    await this.page.selectOption('select[data-qa="country"]', 'United States');
    await this.page.fill('input[data-qa="state"]', 'NY');
    await this.page.fill('input[data-qa="city"]', 'New York');
    await this.page.fill('input[data-qa="zipcode"]', '12345');
    await this.page.fill('input[data-qa="mobile_number"]', '1234567890');

    // Create account
    await this.page.click('button[data-qa="create-account"]');
  }

  // Expect successful account creation
  async expectAccountCreated() {
    await expect(this.page.locator('h2[data-qa="account-created"]')).toBeVisible();
    await this.page.click('a[data-qa="continue-button"]');
  }

  // Expect error when trying to register with an existing email
  async expectEmailAlreadyExistsError() {
    await expect(this.page.locator('p:has-text("Email Address already exist")')).toBeVisible();
  }
}
