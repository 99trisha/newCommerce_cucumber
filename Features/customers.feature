

Feature: Customer
 

  Scenario: Add a new customer
    Given User launch chrome browser
     When User opens URL "https://admin-demo.nopcommerce.com/login"
    And User enters Email as "admin@yourstore.com" and password as "admin"
    And Click on login
   Then User can view dashboard
   When User click on customers menu
   And click on customer menu item
   And click on add new button
   Then USer can view add new page
   When User enter customer info
   And click on save button
   Then User can view confirmation message "The new customer has been added successfully."
   And close browser
    
  
 Scenario: Search customer by EmailID
  Given User launch chrome browser
     When User opens URL "https://admin-demo.nopcommerce.com/login"
    And User enters Email as "admin@yourstore.com" and password as "admin"
    And Click on login
   Then User can view dashboard
 	When User click on customers menu
   And click on customer menu item
   And User enter customer email
   When User click on Search button
   Then User should find Email in Search table
   And close browser