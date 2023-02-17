/// <reference types="Cypress"/>

import Register from "../PageObjects/Register"


describe('Test Suit Nop Commerce', () => {
 
beforeEach(function (){
  
  cy.visit(Cypress.env('demoNopCommerce_url'))
  cy.fixture('nopCommerce.json').then(function (data) {
    this.data = data;
  })
 
})
  it('e2e scenario', function () {
    const register = new Register ()

cy.get('.ico-register').click();

register.GenderFemale().check()

register.FirstName().type(this.data.name);

register.LastName().type(this.data.lastName);
register.DayOfBirth().select(this.data.DayOfBirth);
register.MonthOfBirth().select(this.data.MonthOfBirth);
register.YearOfBirth().select(this.data.YearOfBirth);
register.Email().type(this.data.Email);
register.Company(this.data.CompanyName)
register.Password().type(this.data.Password);
register.ConfirmPassword().type(this.data.Password);
register.RegsiterBtnDown().click();
cy.get('.result').should('have.text', 'Your registration completed');
cy.get('.ico-login').click();
cy.get('#Email').clear('v');
cy.get('#Email').type('vesne@test.com');
cy.get('#Password').clear('1');
cy.get('#Password').type('123456');
cy.get('form > .buttons > .button-1').click();
cy.get('.ico-logout').should('have.text', 'Log out');
cy.get(':nth-child(1) > .category-item > .picture > a > img').click();
cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click();
cy.get(':nth-child(2) > .product-item > .details > .product-title > a').should('contain.text', 'HTC One Mini Blue');
cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click();
cy.get('.close').click();
cy.get('.cart-label').click();
cy.get('.product-name').should('contain.text', 'HTC One Mini Blue');
cy.get('#updatecart').click();
cy.get('.continue-shopping-button').click();

cy.get(':nth-child(3) > .product-item > .details > .product-title > a').click();
cy.get('h1').should('have.text', 'Nokia Lumia 1020');
cy.get('#add-to-cart-button-20').click();
cy.get('.content > a').click();
cy.url().should('eq', 'https://demo.nopcommerce.com/cart')
cy.get('#discountcouponcode').clear('1');
cy.get('#discountcouponcode').type('123');
cy.get('#termsofservice').check();
cy.get('.page-body').click();
cy.get('#checkout').click();
cy.url().should('eq','https://demo.nopcommerce.com/onepagecheckout#opc-billing' )
cy.get('#BillingNewAddress_City').click();
cy.get('#BillingNewAddress_City').type('bitola');
cy.get('#BillingNewAddress_Address1').type('bitola');
cy.get('#BillingNewAddress_ZipPostalCode').type('7000');
cy.get('#BillingNewAddress_PhoneNumber').type('0000000001');
cy.get('#BillingNewAddress_CountryId').select('158');
cy.get('#billing-buttons-container > .new-address-next-step-button').click();
cy.get('#shipping-method-buttons-container > .button-1').click();
cy.get('#paymentmethod_1').check();
cy.url().should('eq', 'https://demo.nopcommerce.com/onepagecheckout#opc-payment_method')
cy.get('#payment-method-buttons-container > .button-1').click();
cy.get('tbody > :nth-child(1) > :nth-child(2)').click();
cy.get('#CreditCardType').select('MasterCard');
cy.get('#CardholderName').clear('V');
cy.get('#CardholderName').type('Vesna N');
cy.get('#CardNumber').clear('1');
cy.get('#CardNumber').type('1111 2222 3333 4444');
cy.get('#ExpireMonth').select('5');
cy.get('#CardCode').clear('1');
cy.get('#CardCode').type('123');
cy.get('#payment-info-buttons-container > .button-1').click();
cy.get(':nth-child(1) > .product > .product-name').should('have.text', 'HTC One Mini Blue');
cy.get(':nth-child(2) > .product > .product-name').should('have.text', 'Nokia Lumia 1020');
cy.get('#confirm-order-buttons-container > .button-1').click();
cy.get('h1').should('have.text', 'Thank you');
cy.get('.section > .title > strong').should('have.text', 'Your order has been successfully processed!');
cy.get('.buttons > .button-1').click();
cy.url().should('eq', 'https://demo.nopcommerce.com/')



  })
})