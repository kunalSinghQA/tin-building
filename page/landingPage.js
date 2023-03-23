const { test, expect } = require("@playwright/test");
import data from "../payload/data.json";

exports.LandingPage = class LandingPage {
  constructor(page) {
    this.page = page;
    // this.headerDineAndDrink = page.getByRole('listitem').filter({ hasText: 'DINE & DRINK' });
    // this.headerMarket = page.getByRole('listitem').filter({ hasText: 'MARKET' });
    // this.headerThingsToDo = page.getByRole('listitem').filter({ hasText: 'THINGS TO DO' });
    // this.headerAbout = page.getByText('ABOUT', { exact: true });
    // this.headerShopNow = page.getByRole('listitem').filter({ hasText: 'Shop Now' });
    // this.linkGrocery = page.getByRole('listitem').filter({ hasText: 'Grocery' });
    // this.headerReservations = page.getByRole('listitem').filter({ hasText: 'Reservations' });
    // this.linkReservation = page.getByRole('link', { name: 'Reservations Link' });
    this.headerSignup = page.getByRole('button', { name: 'Sign Up' });
    this.headerLogin = page.getByRole('button', { name: 'Log In' });
  }

  async validatelandingPageLinks(page) {

    await page.waitForTimeout(1000);
    await page.waitForLoadState('networkidle');
    await page.reload();
    await page.waitForTimeout(1000);
    //await page.waitForLoadState('networkidle');
    let response = await tinBuilderApi;
    let respData = await response.text();
    respData = JSON.parse(respData)
    const itemsArray = respData.items[0].primarylinks.items
    console.log(itemsArray);

    //console.log(JSON.parse(respData))
  }

  async validateLinksInMarketPage(page, request) {
    console.log(data.landingPageLinks.length);
    for (let i = 0; i < data.landingPageLinks.length; i++) {
      console.log(data.landingPageLinks[i]);
      await test.step("Validating " + `${data.landingPageLinks[i]}` + " link", async () => {
        //await page.waitForTimeout(3000);
        await expect(page.getByText(`${data.landingPageLinks[i]}`, { exact: true }));
        //await expect(page.getByRole('listitem').filter({ hasText: `${data.landingPageLinks[i]}` })).toBeVisible();
        await page.waitForTimeout(3000);
      });
    }
  }


  async validateDineAndDrinkLink(page) {
    await test.step("Validating Dine & Drink Link", async () => {
      await expect(this.genericLink[0]).toBeVisible();
    });
  }

  async validateMarketLink(page) {
    await test.step("Validating Market Link", async () => {
      await expect(this.genericLink[1]).toBeVisible();
    });
  }
  async validateThingsToDoLink(page) {
    await test.step("Validating Things To Do Link", async () => {
      await expect(this.headerThingsToDo).toBeVisible();
    });
  }
  async validateAboutLink(page) {
    await test.step("Validating About Link", async () => {
      await expect(this.headerAbout).toBeVisible();
    });
  }

  async validateReservationsDropdown(page) {
    await test.step("Validating Reservation Dropdown", async () => {
      await expect(this.headerReservations).toBeVisible();
      await this.headerReservations.click();
      await expect(this.linkReservation).toBeVisible();
    });
  }

  async validateShopNowDropdown(page) {
    await test.step("Validating Shop Now Dropdown", async () => {
      await expect(this.headerShopNow).toBeVisible();
      await this.headerShopNow.click();
      await expect(this.linkGrocery).toBeVisible();
    });
  }

  async validateSignupLink(page) {
    await test.step("Validating Signup Link", async () => {
      await expect(this.headerSignup).toBeVisible();
    });
  }

  async validateLoginLink(page) {
    await test.step("Validating Login Link", async () => {
      await expect(this.headerLogin).toBeVisible();
    });
  }
  async clickOnLoginLink(page) {
    await test.step("clicking on Login Link", async () => {
      await this.headerLogin.click();
    });
  }
};
