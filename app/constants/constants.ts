// constants.js

// GA4 constants
export const GTM_ID = 'G-1PMYR3ETW4';

// General constants
export const BASE_URL = 'www.chriscatto';

export const constants = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.chriscatto.com',
  db: 'neon-catto',
  paymentLinks: {
    cattoTestProduct:
      process.env.NODE_ENV === 'development'
        ? 'https://buy.stripe.com/test_3csbKSf3O8fm0jm145'
        : 'https://buy.stripe.com/test_3csbKSf3O8fm0jm145',
  },
};
