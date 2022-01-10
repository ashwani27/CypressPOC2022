Feature: CustomerLogin

    Scenario: Valid customer user login
    Given Navigate to the application
    When User enters the valid credentials and click CustomerLogin
    Then Validate user lands on the Accounts Overview screen