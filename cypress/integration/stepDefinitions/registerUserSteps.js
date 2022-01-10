import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import RegisterUserPage from '../pages/registerUser';
import CustomerLoginPage from '../pages/customerLogin';

const customerLoginPage = new CustomerLoginPage();
const registerUserPage = new RegisterUserPage();

When ('Navigate to register page and create a new user', function(){
    customerLoginPage.registerLink().click();
    registerUserPage.addDetails("addDetails");
})

Then ('Validate user is registered successfully', function(){
    registerUserPage.userRegistered().should('contain', 'Your account was created successfully. You are now logged in.');
})