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


- ✅ Tests run on **Ubuntu latest**  
- ✅ Browsers are installed automatically (`chromium`, `firefox`, `webkit`)  
- ✅ Reports are generated as **artifacts**:
  - 📄 HTML report (`playwright-html-report`)
  - 🧾 JUnit report (`playwright-junit-report`)

### Workflow Status

![Playwright Tests](https://github.com/AxelXHorvat/ui-automation-exercise/actions/workflows/playwright.yml/badge.svg)

### Reports

- After each run you can download the **HTML report** from the Actions page to see a detailed run overview.  
- The **JUnit XML** report is also uploaded, so it can be integrated with CI tools or reporting dashboards.  
