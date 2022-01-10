/// <reference types="cypress"/>

class CustomerLoginPage {
    usernameField() {
        return cy.get('input[name="username"]');
    }

    passwordField() {
        return cy.get('input[name="password"]');
    }

    submitButton() {
        return cy.get('input[type="submit"]');
    }

    registerLink() {
        return cy.get('#loginPanel > p:nth-child(3) > a');
    }

    invalidUserErrorMsgLabel() {
        return cy.get('#rightPanel > p');
    }

    logoutLink() {
        return cy.get('#leftPanel > ul > li:nth-child(8) > a');
    }

    login(username, password){
        this.usernameField().type(username);
        this.passwordField().type(password);
        this.submitButton().click();
    }
}
export default CustomerLoginPage