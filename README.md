# UI Automation Exercise

This project contains **UI automated tests** for [Automation Exercise](https://automationexercise.com) using **Playwright**.  
It is part of a technical challenge, implementing 5 required test cases with **Page Object Model (POM)**, **cross-browser execution**, **reporting**, and **CI/CD integration**.  

---

## 📌 Test Cases Implemented
1. Register new user  
2. Register user with existing email  
3. Login with valid credentials  
4. Login with invalid credentials  
5. Logout  

---

## 🚀 Run Tests Locally

### Install dependencies
```bash
npm install
```
### Run all tests
```bash
npx playwright test
```
### Open the HTML report
```bash
npx playwright show-report
```

## ⚙️ Reporting
* HTML Report: generated in playwright-report/ after each run.
* JUnit Report: exported as playwright-report/results.xml for CI/CD integration.

## 🔄 CI/CD (GitHub Actions)
A workflow is provided in .github/workflows/playwright.yml that:

* Installs dependencies and browsers
* Executes all Playwright tests in Chromium, Firefox, and WebKit
* Uploads test reports as artifacts for review
