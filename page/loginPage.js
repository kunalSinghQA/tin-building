const { test, expect } = require("@playwright/test");
import data from "../payload/data.json"

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginBtn = page.getByRole('button', { name: `${data.loginPageLinks[0]}` });
    this.fbLogIn = page.getByRole('button', { name: `${data.loginPageLinks[1]}` });
    this.fbUsernameField = page.getByPlaceholder(`${data.loginPageLinks[2]}`)
    this.fbPasswordField = page.getByPlaceholder(`${data.loginPageLinks[3]}`);
    this.fbLoginBtn = page.getByRole('button', { name: `${data.loginPageLinks[4]}` });
    this.gmailLogin = page.getByRole('button', { name: `${data.loginPageLinks[5]}` });
    this.gmailUsernameField = page.getByRole('textbox', { name: `${data.loginPageLinks[6]}` });
    this.gmailPasswordField = page.getByRole('textbox', { name: `${data.loginPageLinks[7]}` });
    this.nextButton = page.getByRole('button', { name: 'Next' });
  }

  async navigateToTinHomepage(page, webpageaddress) {
    await test.step("Navigate to webpage", async () => {
      await this.page.goto(webpageaddress, { setTimeout: 5000 });
    });
  }
  async loginWithGmailAccount(page, username, password) {
    await test.step("Login with Gmail Account", async () => {
      await this.gmailLogin.click();
      await expect(this.gmailUsernameField).toBeVisible();
      await this.gmailUsernameField.fill(username);
      await this.nextButton.click();
      await expect(this.gmailPasswordField).toBeVisible();
      await this.gmailPasswordField.fill(password);
      await this.nextButton.click();
    });
  }
  async loginWithFacebookAccount(page, username, password) {
    await test.step("Login with Facebook Account", async () => {
      await this.fbLogIn.click();
      await expect(this.fbUsernameField).toBeVisible();
      await this.fbUsernameField.fill(username);
      await expect(this.fbPasswordField).toBeVisible();
      await this.fbPasswordField.fill(password);
      await this.fbLoginBtn.click();
    });
  }

  async navigateToHomepage(page, webpageaddress) {
    await test.step("Navigate to webpage", async () => {
      await this.page.goto(webpageaddress, { setTimeout: 120000 });
    });
  }

  async waitForLoginPageVisible(page) {
    await test.step("Wait till login page load completely", async () => {
      await this.page.waitForSelector(".logoMain.pointer", {
        setTimeout: 120000,
      });
    });
  }
};
