/// <reference types="cypress"/>

class RegisterUserPage {
    firstNameField(){
        return cy.get('input[name="customer.firstName"]');
    }

    lastNameField(){
        return cy.get('input[name="customer.lastName"]');
    }
    
    addressField(){
        return cy.get('input[name="customer.address.street"]');
    }

    cityField(){
        return cy.get('input[name="customer.address.city"]');
    }

    stateField(){
        return cy.get('input[name="customer.address.state"]');
    }

    zipCodeField(){
        return cy.get('input[name="customer.address.zipCode"]');
    }

    phoneField(){
        return cy.get('input[name="customer.phoneNumber"]');
    }

    ssnField(){
        return cy.get('input[name="customer.ssn"]');
    }

    usernameField(){
        return cy.get('input[name="customer.username"]');
    }

    passwordField(){
        return cy.get('input[name="customer.password"]');
    }

    confirmPasswordField(){
        return cy.get('input[name="repeatedPassword"]');
    }

    registerButton(){
        return cy.get('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input');
    }

    userRegistered() {
        return cy.get('#rightPanel > p');
    }

    addDetails(testData){
        var uniqueNumber = new Date().getTime();

        var obj = this;
        cy.fixture(testData).then(function(data) {
            obj.firstNameField().type(data.firstName+uniqueNumber);
            obj.lastNameField().type(data.lastName+uniqueNumber);
            obj.addressField().type(data.address);
            obj.cityField().type(data.city);
            obj.stateField().type(data.state);
            obj.zipCodeField().type(Math.floor((Math.random() * 99999) + 10000));
            obj.phoneField().type("9999" + Math.floor((Math.random() * 999999) + 100000));
            obj.ssnField().type(Math.floor((Math.random() * 999999) + 100000));
            obj.usernameField().type(data.username + uniqueNumber);

            var pwd = Math.floor((Math.random() * 99) + 10);
            obj.passwordField().type(data.password + pwd);
            obj.confirmPasswordField().type(data.password + pwd);
        })
       
        this.registerButton().click();
    }
}

export default RegisterUserPage