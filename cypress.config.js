const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      // Aquí puedes poner otros eventos válidos, pero no 'uncaught:exception'
    },
    pageLoadTimeout: 90000,
  },
});


