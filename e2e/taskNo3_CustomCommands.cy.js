/// <reference types="Cypress"/>

import HomePage from "../PageObjects/HomePage"

describe('Proto Commerce test suit', () => {
  before(()=>{
    cy.visit(Cypress.env('protoCommerce_url'))
    cy.fixture('protoCommerceData.json').then(function (data) {
      this.data = data;
    })

})
  it('CustomCommands', function() {
cy.get(':nth-child(1) > .form-control').click();
cy.get('form.ng-pristine').click();
cy.get('form > div:nth-child(1) > div')
cy.get(':nth-child(1) > .form-control').clear('Name is required');
cy.get(':nth-child(1) > .form-control').type(this.data.name);
cy.get(':nth-child(2) > .form-control').click();
cy.get(':nth-child(1) > .form-control').should('have.value', 'Vesna')
cy.get('.ng-invalid.ng-dirty').click();
cy.get('.alert').click();
cy.get(':nth-child(2) > .form-control').clear('Email is required');
cy.get(':nth-child(2) > .form-control').type(this.data.email1);
cy.get('form.ng-touched').click();
cy.get(':nth-child(2) > .form-control').should('have.value', 'vesne.naumovska@hotmail.com');
cy.get('#exampleInputPassword1').clear('1');
cy.get('#exampleInputPassword1').type(this.data.password); //fixtures
cy.get('#exampleCheck1').check();
cy.get('#exampleFormControlSelect1').select(this.data.female); // fixtures
cy.get('#exampleFormControlSelect1').should('have.id', 'exampleFormControlSelect1');
cy.get('#inlineRadio2').check();
cy.get('#inlineRadio2').should('be.checked')
cy.get(':nth-child(8) > .form-control').type(this.data.birthDate); // fixtures
cy.get(':nth-child(8) > .form-control').should('have.value', '2020-05-05');
cy.get('.btn').click();
cy.get ('.alert').scrollIntoView() // scroll into view
cy.contains('Shop').click()

cy.SelectAndAddToCart(this.data.productNameSamsungNote8) // custom command add to cart, with data fixtures 

 cy.get('#navbarResponsive > ul > li > a').click()
 cy.get('.media-body').should('contain.text', 'Samsung Note 8')
 cy.get(':nth-child(3) > :nth-child(5) > .btn').click();
cy.get('#country').clear('b');
cy.get('#country').type('B');
cy.wait(7000) // wait
cy.get(' div > div.suggestions').contains(this.data.belgium).click() // fixtures
cy.get('.checkbox > label').click();
cy.get('#checkbox2').check();
cy.get('.ng-untouched').click();
cy.get('.ng-untouched > .btn').click();
cy.get('.alert').should('have.text', '\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ');



});
})