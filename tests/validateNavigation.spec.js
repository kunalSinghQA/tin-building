const { test } = require("@playwright/test");
const { facebookAuthKeys } = require("../utils/users-auth-keys");
const { useUser } = require("../utils/authonticate");
useUser(test, facebookAuthKeys);
test("TC-001 Validate Navigation", async ({ page, request }) => {
  await page.goto('/');
  await page.waitForTimeout(30000);
});
