import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CustomerLoginPage from '../pages/customerLogin';

const customerLoginPage = new CustomerLoginPage();

Given('Navigate to the application', function(){
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
})

When('User enters the valid credentials and click Login', function(){
    customerLoginPage.login(this.configuration.username, this.configuration.password);    
})

When('User enters the invalid credentials and click Login', function(){
    customerLoginPage.login("test", "Password");
})

Then('Validate an invalid user login error message', function(){
    customerLoginPage.invalidUserErrorMsgLabel().should('have.text', this.configuration.invalidLoginError);
})

Then('Validate user lands on the Accounts Overview screen', function(){
    cy.title().should('contain', 'ParaBank | Accounts Overview');    
})