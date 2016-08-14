require('dotenv').load();

export const {
  APP_PROTOCOL,
  APP_DOMAIN,
} = process.env;

export const APP_PORT = Number(process.env.APP_PORT);

export const APP_URL =
  `${APP_PROTOCOL}://${APP_DOMAIN}:${APP_PORT}`;

export const GRAPHQL_URL = `${APP_URL}/graphql`;

export const PRODUCTION = process.env.PRODUCTION === 'true' ? true : false;
