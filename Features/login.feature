

Feature: Login
 


  Scenario: Successful login with valid credentials
    Given User launch chrome browser
   
    When User opens URL "https://admin-demo.nopcommerce.com/login"
    And User enters Email as "admin@yourstore.com" and password as "admin"
    And Click on login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User clicks on logout link
   
    Then close browser



