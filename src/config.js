require('dotenv').load();

const {
  APP_PROTOCOL: PROTOCOL,
  APP_DOMAIN: DOMAIN,
  APP_PORT: PORT
} = process.env;

export const APP_URL =`${PROTOCOL}://${DOMAIN}:${PORT}`;
export const GRAPHQL_URL = `${APP_URL}/graphql`;

export default {
  APP_URL,
  GRAPHQL_URL,
  ...process.env,
};
