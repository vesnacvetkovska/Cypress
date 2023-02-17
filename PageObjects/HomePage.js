class HomePage{

    NameFiled (){
        return cy.get(':nth-child(1) > .form-control')
    }
}

// export e metoda koja se koristi za da moze ovaa klasa da ja koristat drugi datoteki
export default HomePage;
