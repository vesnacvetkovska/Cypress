
/// <reference types="Cypress"/>

describe('green kart test suit', () => {
  beforeEach(()=>{
    cy.visit(Cypress.env('greenKart_url'))  // visit url, beforeEach
  })
  
    
  it.skip('search items', () => {
    
    cy.get('.search-keyword').type('ca') //search item
    cy.get('.search-button').click()  
    cy.get(".products") //get all products
    cy.get('h4.product-name') // get products names
         .then(($value) => {
       
        length = $value.length // count the products
       //cy.log(length);
       
       const text= $value.text().toLowerCase() // convert found text to lower case, for optimazed search
       cy.log(text)
 
       expect(text).to.contain('ca') // assertation
         })

  
      })

      it('place order', () =>{
        cy.get(':nth-child(1) > .product-action > button').as('add to card brocolli bth') // alias 
        
        cy.get('@add to card brocolli bth').click() //add to cart item
        cy.get('@add to card brocolli bth').should('contain.text','ADDED') // assertation 
        cy.get('.cart-icon > img').click(); //open shopping cart
         cy.get('.cart-preview > .action-block > button').click(); 
         cy.get('.product-name').should('contain.text', 'Brocolli - 1 Kg') // assertation in shopping cart is added proper item

        cy.get('#root > div > div > div > div > button').click(); 
        cy.url().should('eq', "https://rahulshettyacademy.com/seleniumPractise/#/country") // assertation user is on proper page
        cy.get('select').select('Brazil'); // select country
        cy.get('select').should('contain.text', 'Brazil') // assert proper country is selected
        cy.get('.chkAgree').as('agree check btn') //  aslias chack agree btn
        cy.get('@agree check btn').check() // check agree btn
        cy.get('@agree check btn').should('be.checked'); // assertation btn is cheked
        cy.get('button').click();
        cy.get('[style="color:green;font-size:25px"]').should('contain.text', 'Thank you, your order has been placed successfully') // assert successfully placed ored  message
        cy.wait(6000) // wait till user is navigate to home page
        cy.url().should('eq', "https://rahulshettyacademy.com/seleniumPractise/#/") // assert user is navigate to home page



      })
    })

 

  
  

 
