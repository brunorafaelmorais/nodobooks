module.exports = {
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'pt-BR'
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }

    return config
  }
}
