$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/customers.feature");
formatter.feature({
  "line": 3,
  "name": "Customer",
  "description": "",
  "id": "customer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12547077905,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Add a new customer",
  "description": "",
  "id": "customer;add-a-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User click on customers menu",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on customer menu item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on add new button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "USer can view add new page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 2673011078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3295914591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_ans_password_as(String,String)"
});
formatter.result({
  "duration": 1520103180,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 15347187037,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 48863999,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customers_menu()"
});
formatter.result({
  "duration": 580909633,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customer_menu_item()"
});
formatter.result({
  "duration": 9395310940,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_add_new_button()"
});
formatter.result({
  "duration": 14553507844,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_add_new_page()"
});
formatter.result({
  "duration": 94736254,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enter_customer_info()"
});
formatter.result({
  "duration": 1587220975,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_save_button()"
});
formatter.result({
  "duration": 12639622380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully.",
      "offset": 36
    }
  ],
  "location": "Steps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "duration": 3313416318,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 2153037900,
  "status": "passed"
});
formatter.before({
  "duration": 4208895176,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search customer by EmailID",
  "description": "",
  "id": "customer;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enters Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User can view dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User click on customers menu",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "click on customer menu item",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter customer email",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User should find Email in Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 2499106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 5513308325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_ans_password_as(String,String)"
});
formatter.result({
  "duration": 1445085518,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 9077168957,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "duration": 74546121,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customers_menu()"
});
formatter.result({
  "duration": 468757750,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customer_menu_item()"
});
formatter.result({
  "duration": 6160663509,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enter_customer_email()"
});
formatter.result({
  "duration": 2452950605,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Search_button()"
});
formatter.result({
  "duration": 3908528606,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_find_Email_in_Search_table()"
});
formatter.result({
  "duration": 712953444,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 3322353345,
  "status": "passed"
});
formatter.uri("./Features/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7169720275,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 37061808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4624018789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_ans_password_as(String,String)"
});
formatter.result({
  "duration": 2303029888,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 10332590387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 1188097230,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_logout_link()"
});
formatter.result({
  "duration": 6287132653,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 1495639536,
  "status": "passed"
});
});