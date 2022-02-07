module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/articoli/:article',
        destination: '/articles/:article',
      },
      {
        source: '/prodotti/:article',
        destination: '/products/:article',
      },
    ];
  },
};
