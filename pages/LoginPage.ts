import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Nav to login
  async goto() {
  await this.page.goto('/');
  await this.page.click('a[href="/login"]');
  await expect(this.page).toHaveURL(/.*\/login/);
}

  // fills login form
  async login(email: string, password: string) {
    await this.page.fill('input[data-qa="login-email"]', email);
    await this.page.fill('input[data-qa="login-password"]', password);
    await this.page.click('button[data-qa="login-button"]');
  }

  // validates correct login
  async expectLoggedIn(username: string) {
    await expect(this.page.locator('a:has-text("Logged in as")')).toContainText(username);
  }

  // validates incorrect login
  async expectLoginError() {
    await expect(this.page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
  }

  // Logout
  async logout() {
    await this.page.click('a[href="/logout"]');
    await expect(this.page).toHaveURL(/.*\/login/);
  }
}
