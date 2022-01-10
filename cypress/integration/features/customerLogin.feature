Feature: CustomerLogin

    Scenario: Valid customer user login
    Given Navigate to the application
    When User enters the valid credentials and click Login
    Then Validate user lands on the Accounts Overview screen

    Scenario: Invalid customer user login
    Given Navigate to the application
    When User enters the invalid credentials and click Login
    Then Validate an invalid user login error message