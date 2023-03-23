const { test, expect } = require("@playwright/test");
import data from "../payload/data.json";
import api from "../payload/api.json";

exports.MarketPage = class MarketPage {
  constructor(page) {
    this.page = page;
    this.marketLink = page.getByRole('link', { name: 'MARKET' });
    this.linkContact = page.getByRole('link', { name: 'Contact' });
    this.itemAvocado = page.getByRole('listitem').filter({ hasText: 'Avocado' }).getByRole('button', { name: 'Add Item' })
    this.cartButton = page.getByRole('button', { name: 'Order Now' });
  }
  async validateLinksInMarketPage(page) {
    console.log(data.links.length);
    for (let i = 0; i < data.links.length; i++) {
      console.log(data.links[i]);
      await test.step("Validating " + `${data.links[i]}` + " link", async () => {
        await expect(page.getByText(`${data.links[i]}`, { exact: true })).toBeVisible();
        await page.waitForTimeout(3000);
      });
    }
  }
  async validateGeorges(page) {
    await page.waitForTimeout(15000);
    let resp = await page.waitForResponse(api.georges);
    resp = await resp.body();
    //console.log(JSON.stringify(resp));
    //const resp = await page.response.get(api.georges);
    //const resp1 = await page.response.get(api.georges);
    console.log(resp);
  }


  async clickMarketLink(page) {
    await test.step("Navigating to Market Link", async () => {
      await this.marketLink.click();
    });
  }
  async validateMarketLinkHeading(page) {
    await test.step("Validating Market Link Heading", async () => {
      await expect(this.headingMarket).toBeVisible();
    });
  }

  async validateHeadingCategories(page) {
    await test.step("Validating Heading Categories", async () => {
      await expect(this.headingCategories).toBeVisible();
    });
  }

  async validateCheeseLink(page) {
    await test.step("Validating Cheese Link", async () => {
      await expect(this.linkCheese).toBeVisible();
    });
  }
  async validateSeafoodLink(page) {
    await test.step("Validating Sea Food Link", async () => {
      await expect(this.linkSeaFood).toBeVisible();
    });
  }

  async validateGroceryLink(page) {
    await test.step("Validating Grocery Link", async () => {
      await expect(this.linkGrocery).toBeVisible();
    });
  }

  async validateDairyLink(page) {
    await test.step("Validating Dairy Link", async () => {
      await expect(this.linkDairy).toBeVisible();
    });
  }

  async validateBottledBeverageLink(page) {
    await test.step("Validating Bottled Beverage Link", async () => {
      await expect(this.linkBottledBeverage).toBeVisible();
    });
  }

  async validateSnacksLink(page) {
    await test.step("Validating Snacks Link", async () => {
      await expect(this.linkSnacks).toBeVisible();
    });
  }

  async validateConfectionLink(page) {
    await test.step("Validating Confection Link", async () => {
      await expect(this.linkConfection).toBeVisible();
    });
  }

  async validateHomegoodsLink(page) {
    await test.step("Validating Home Goods Link", async () => {
      await expect(this.linkHomegoods).toBeVisible();
    });
  }

  async validateBakeryLink(page) {
    await test.step("Validating Bakery Link", async () => {
      await expect(this.linkBakery).toBeVisible();
    });
  }

  async validateCharcuterieLink(page) {
    await test.step("Validating Charcuterie Link", async () => {
      await expect(this.linkCharcuterie).toBeVisible();
    });
  }
  async clickProduceLink(page) {
    await test.step("Navigating to Market Link", async () => {
      await expect(this.linkProduce).toBeVisible();
      await this.linkProduce.click();
    });
  }
  async validateProduceLink(page) {
    await test.step("Validating Produce Link", async () => {
      await expect(this.linkProduce).toBeVisible();
    });
  }

  async validateButcherLink(page) {
    await test.step("Validating Butcher Link", async () => {
      await expect(this.linkButcher).toBeVisible();
    });
  }

  async validatePastaLink(page) {
    await test.step("Validating Pasta Link", async () => {
      await expect(this.linkPasta).toBeVisible();
    });
  }
  async validateContactLink(page) {
    await test.step("Validating Contact Link", async () => {
      await expect(this.linkContact).toBeVisible();
    });
  }
  async addItemAvocadoToTheCart(page) {
    await test.step("selecting item Avocado to the cart", async () => {
      await expect(this.itemAvocado).toBeVisible();
      await this.itemAvocado.click();
      //await this.    
    });
  }
  // async checkTheCart(page) {
  //     await test.step("checking items in the cart", async () => {
  //         await expect(this.cartButton).toBeVisible();
  //         await this.cartButton.click(); 
  //         //await this.    
  //     });
  // }




};
