const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  reporter: 'mochawesome',
  env: {
    url: 'https://qachallenge.spectrm.io/v2/structure',
    username: 'arifmulla.in@gmail.com',
    password: 'Sangli@99'
  },
  retries: {
    runMode: 0,
  },
  projectId: "cwah7o",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/Spectrm/*.js',
  },
})
