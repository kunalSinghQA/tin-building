import { chromium, expect, test } from "@playwright/test";
import * as StringUtils from "./string";
import * as sessionUtils from "./session";

export function useUser(test, userKeys) {
  sessionUtils.useSession(test, buildStorageFilePath(userKeys));
}

export function buildStorageFilePath(userKeys) {
  const file = StringUtils.ensureDoesNotStartWith(
    userKeys.storageStateFile,
    "/"
  );
  return sessionUtils.storageFileLocation + file;
}

export async function authenticateWebCP(config, userKeys) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const storageStatePath = buildStorageFilePath(userKeys);
  await page.goto(config.baseURL);
  await expect(page.getByRole("button", { name: "Accept" })).toBeVisible();
  await page.getByRole("button", { name: "Accept" }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshot.png' });
  await expect(page.getByRole("button", { name: "Log In" })).toBeVisible();
  await page.getByRole("button", { name: "Log In" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Log in with Facebook" }).click();
  await expect(
    page.getByPlaceholder("Email address or phone number")
  ).toBeVisible();
  await page
    .getByPlaceholder("Email address or phone number")
    .fill(config.facebookUsername);
  await page.locator("#loginform div").nth(1).click();
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill(config.facebookPassword);
  await page.getByRole("button", { name: "Log in" }).click();
  await page.waitForTimeout(2000);
  await sessionUtils.saveSession(page, storageStatePath);
  await browser.close();
}

export async function clearSession(userKeys) {
  const storageStatePath = buildStorageFilePath(userKeys);
  sessionUtils.clearSession(storageStatePath);
}
