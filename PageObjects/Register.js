class Register 
{
    NameFiled (){
        return cy.get(':nth-child(1) > .form-control')
    }
    RegisterBtn (){
        return cy.get('.ico-register')
    }
    GenderFemale (){
        return cy.get('#gender-female')
    }
   FirstName (){
        return cy.get('#FirstName')
    }
    LastName (){
        return cy.get('#LastName')
    }
    DayOfBirth (){
        return cy.get('[name="DateOfBirthDay"]')
    }
    MonthOfBirth (){
        return cy.get('[name="DateOfBirthMonth"]')
    }
    YearOfBirth (){
        return cy.get('[name="DateOfBirthYear"]')
    }
    Email () {
        return cy.get('#Email')
    }
    Company () {
        return cy.get('#Company')

    }

      Password () {
        return   cy.get('#Password')

    }

    ConfirmPassword () {
        return   cy.get('#ConfirmPassword')

    }

   
    RegsiterBtnDown () {
        return   cy.get('#register-button')

    }

}
export default Register;