/// <reference types="Cypress"/>


describe('API SPEC', () => {
  it('API Call', () => {
    cy.visit('https://demo.nopcommerce.com/')
    let verToken ;
    cy.get('input[name="__RequestVerificationToken"]').then((input)=>{
      verToken = input.attr('value')
      return verToken
    })
      
    
    cy.request({
      method: 'GET',
      url: 'https://demo.nopcommerce.com/', // baseUrl is prepend to URL
      
    }).then((response)=>{
      //cy.log(response)
      
      cy.request({
        method: 'POST',
        url: 'https://demo.nopcommerce.com/login?returnurl=%2F',
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        followRedirect: true,
        body: {
          'Email': 'vesne@test.com',
          'Password': '123456',
          '__RequestVerificationToken': verToken,
          'RememberMe': false
        }
      })
      cy.visit('https://demo.nopcommerce.com/')
    })
  })

  
})
