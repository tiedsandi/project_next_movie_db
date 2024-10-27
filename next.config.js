const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase, {defaultConfig}) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {
  //     env: {
  //       API_KEY: process.env.NEXT_PUBLIC_DEV_API_KEY,
  //       NEXT_PUBLIC_BASE_URL_IMAGE: 'https://image.tmdb.org/t/p/original/',
  //       CUSTOM_DEV_ENV_VAR: 'development-only-variable',
  //     },
  //   };
  // }

  return {
    env: {
      API_KEY: process.env.NEXT_PUBLIC_API_KEY,
      NEXT_PUBLIC_BASE_URL_IMAGE: 'https://image.tmdb.org/t/p/original/',
    },
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org',
      },
    ],
  },
};

module.exports = nextConfig; // Use CommonJS `module.exports`
