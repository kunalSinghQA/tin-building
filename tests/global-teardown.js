const { use } = require("../playwright.config");
const { facebookAuthKeys, gmailAuthKeys } = require('../utils/users-auth-keys')
import { clearSession } from '../utils/authonticate';


async function removeAllTestUserSessions(config) {
  await clearSession(facebookAuthKeys);
  await clearSession(gmailAuthKeys);
}

async function globalTeardown() {
  await removeAllTestUserSessions(use);
}

export default globalTeardown;
