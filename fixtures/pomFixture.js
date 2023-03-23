const { test, expect } = require('@playwright/test');
import LandingPage from "../page/landingPage"
import LoginPage from "../page/loginPage"
import MarketPage from "../page/marketPage"
import SpecialHotPage from "../pages/specialHotPage"

const pages = fixtures.extend < pages > ({
    page: async ({ }, use, testInfo) => {
        landingPage: async ({ page }, use) => {
            await use(new LandingPage(page));
        },
            loginPage: async ({ page }, use) => {
                await use(new LoginPage(page));
            },
                marketPage: async ({ page }, use) => {
                    await use(new MarketPage(page));
                },
                    specialPage: async ({ page }, use) => {
                        await use(new SpecialHotPage(page));
                    },

})
    export const test = pages;