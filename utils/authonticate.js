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

export async function gmailLogin(config) {

}

export async function facebookLogin(config) {
  await page.getByRole("button", { name: "Log in with Facebook" }).click();
  await expect(
    page.getByPlaceholder("Email address or phone number")
  ).toBeVisible();
  await page
    .getByPlaceholder("Email address or phone number")
    .fill(config.Username);
  await page.locator("#loginform div").nth(1).click();
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill(config.Password);
  await page.getByRole("button", { name: "Log in" }).click();
}

export async function authenticateWebCP(config, userKeys) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const storageStatePath = buildStorageFilePath(userKeys);
  await page.goto(config.baseURL);
  await expect(page.getByRole("button", { name: "Accept" })).toBeVisible();
  await page.getByRole("button", { name: "Accept" }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole("button", { name: "Log In" })).toBeVisible();
  await page.getByRole("button", { name: "Log In" }).click();
  await page.waitForTimeout(2000);
  // Login With Facebook
  if (userKeys.username == "facebook_username") {
    await facebookLogin(config);
  }
  // Login with Gmail
  if (userKeys.username == "gmail_username") {
    await gmailLogin(config);
  }
  await sessionUtils.saveSession(page, storageStatePath);
  await browser.close();
}

export async function clearSession(userKeys) {
  const storageStatePath = buildStorageFilePath(userKeys);
  sessionUtils.clearSession(storageStatePath);
}
