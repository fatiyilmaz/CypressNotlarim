const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:run', (details) => {
        /* ... */
        if (details.specs && details.browser) {
          // details.specs and details.browser will be undefined in interactive mode
          console.log(
            'Running',
            details.specs.length,
            'specs in',
            details.browser.name
          )
        }
      })
    },
    baseUrl : 'https://etsy.com',//baseUrl dogru konuma tasindi
    viewportWidth: 1280,
    viewportHeight: 720
  }
});
