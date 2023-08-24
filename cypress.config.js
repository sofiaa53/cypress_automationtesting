const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      specPattern: "cypress/support/e2e/ts004_user.spec.js",
      //pageLoadTimeout: 30000,
      baseUrl: 'https://kasirdemo.belajarqa.com/',
      supportFile: false
    //setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
);
