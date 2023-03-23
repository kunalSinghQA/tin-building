const { use } = require("../playwright.config");
import { facebookAuthKeys, gmailAuthKeys } from '../utils/users-auth-keys';
import { authenticateWebCP } from '../utils/authonticate';

async function loginAllTestUsers(use) {
  // get auth state for all needed test user accounts
  await authenticateWebCP(use, facebookAuthKeys);
  await authenticateWebCP(use, gmailAuthKeys);
}

async function globalSetup() {
  await loginAllTestUsers(use);
}

export default globalSetup;