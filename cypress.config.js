const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports',
    overwrite: false,        // importante para não sobrescrever relatórios anteriores
    html: false,             // desativa o html para gerar só json (merge usa json)
    json: true               // gera arquivo json que será usado para merge
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    baseUrl: 'https://sampleapp.tricentis.com/101',
    testIsolation: false
  }
});
