const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 8000,
  chromeWebSecurity:false,

  env: {
    baseUrl:
      "https://www.businessinsider.com/ikea-nyc-store-planning-studio-tour-2019-4",
      newsUrl: "https://www.businessinsider.com/latest"  
    
  },
  
    

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
