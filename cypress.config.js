

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio:true,
  },
  

  env: {
    protoCommerce_url: 'https://rahulshettyacademy.com/angularpractice/',
    demoNopCommerce_url: 'https://demo.nopcommerce.com/',
    greenKart_url: 'https://rahulshettyacademy.com/seleniumPractise/#/' ,
    }
 

});
