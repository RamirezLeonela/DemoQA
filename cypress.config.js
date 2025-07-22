const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    retries: {
      runMode: 2,  // Reintenta hasta 2 veces en GitHub Actions o CI
      openMode: 0  // Sin reintentos al correr en local GUI
    },
    pageLoadTimeout: 120000, // Espera hasta 2 minutos para cargar páginas
    setupNodeEvents(on, config) {
      // Evita que errores de scripts externos rompan el test
      on('uncaught:exception', (err, runnable) => {
        return false
      })
    }
  }
})

