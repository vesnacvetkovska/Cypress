/// <reference types="Cypress"/>

import HomePage from "../PageObjects/HomePage"

describe('Proto Commerce test suit', () => {
  before(()=>{
    cy.visit(Cypress.env('protoCommerce_url'))
  })

  it('passes', () => {
   
cy.get(':nth-child(1) > .form-control').click();
cy.get('form.ng-pristine').click();
cy.get('form > div:nth-child(1) > div')
cy.get(':nth-child(1) > .form-control').clear('Name is required');
cy.get(':nth-child(1) > .form-control').type('Name is required');
cy.get(':nth-child(2) > .form-control').click();
cy.get(':nth-child(1) > .form-control').should('have.value', 'Name is required')
cy.get('.ng-invalid.ng-dirty').click();
cy.get('.alert').click();
cy.get(':nth-child(2) > .form-control').clear('Email is required');
cy.get(':nth-child(2) > .form-control').type('Email is required');
cy.get('form.ng-touched').click();
cy.get(':nth-child(2) > .form-control').should('have.value', 'Email is required');
cy.get('#exampleInputPassword1').clear('1');
cy.get('#exampleInputPassword1').type('123456');
cy.get('#exampleCheck1').check();
cy.get('#exampleFormControlSelect1').select('Female');
cy.get('#exampleFormControlSelect1').should('have.id', 'exampleFormControlSelect1');
cy.get('#inlineRadio2').check();
cy.get('#inlineRadio2').should('be.checked')
cy.get(':nth-child(8) > .form-control').type('2020-05-05');
cy.get(':nth-child(8) > .form-control').should('have.value', '2020-05-05');
cy.get('.btn').click();
cy.get ('.alert').scrollIntoView() // scroll into view

cy.get(':nth-child(2) > .nav-link').click();
cy.get(':nth-child(2) > .card > .card-footer > .btn').click();
cy.get(':nth-child(2) > .card > .card-body > .card-title > a').
then(($PLPProductName)=>{
  const productName = $PLPProductName.text()
  cy.wrap(productName).as('PLPProductName')
  
})

cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').should('have.text', ' Checkout ( 1 )\n            (current)\n          ');
cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
cy.get('.media').
then(($ShoppCartProdName)=>{
 const  shoppCartProdName = $ShoppCartProdName.text()
  cy.wrap(shoppCartProdName).as('ShoppCartProdName')


})

cy.get(':nth-child(3) > :nth-child(5) > .btn').click();
cy.get('#country').clear('b');
cy.get('#country').type('B');
cy.wait(7000) // wait
cy.get(' div > div.suggestions').contains('Belgium').click()
cy.get('.checkbox > label').click();
cy.get('#checkbox2').check();
cy.get('.ng-untouched').click();
cy.get('.ng-untouched > .btn').click();
cy.get('.alert').should('have.text', '\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ');



  })
})