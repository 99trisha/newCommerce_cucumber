package stepDefinitions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.CustomerPage;
import pageObjects.CustomerSearch;
import pageObjects.LoginPage;

public class Steps extends BaseClass {
	
	@Before
	public void setup() throws IOException
	{
		//Reading properties file
		configProperties= new Properties();
		FileInputStream configPropFile= new FileInputStream("config.properties");
		configProperties.load(configPropFile);
		
		//System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		String br=configProperties.getProperty("browser");
		
		if(br.equals("chrome")){
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+configProperties.getProperty("chromepath"));
		driver= new ChromeDriver();}
	}
	
	@Given("^User launch chrome browser$")
	public void user_launch_chrome_browser() throws Throwable {
		
		lp=new LoginPage(driver);
	    
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
		driver.get(url);
	   
	}

	@When("^User enters Email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enters_Email_as_ans_password_as(String email, String password) throws Throwable {
	    
		lp.setUsername(email);
		lp.setPassword(password);
	}

	@When("^Click on login$")
	public void click_on_login() throws Throwable {
	   lp.clickLogin();
	}

	@Then("^Page Title should be \"([^\"]*)\"$")
	public void page_Title_should_be(String title) throws Throwable {
		if(driver.getPageSource().contains("Login was unsuccessful"))
		{
			driver.close();
			Assert.assertTrue(false);
		} else{
			
			Assert.assertEquals(title, driver.getTitle());
		}
		
	    
	}

	@When("User clicks on logout link$")
	public void user_clicks_on_logout_link() throws Throwable {
	   lp.clickLogout();
	   Thread.sleep(3000);
	}



	@Then("close browser")
	public void close_browser() throws Throwable {
	   driver.quit();
	}
	
	
	//Customer feature step definitions
	@Then("^User can view dashboard$")
	public void user_can_view_dashboard() throws Throwable {
		cp=new CustomerPage(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration", cp.getPageTitle());
	   
	}

	@When("^User click on customers menu$")
	public void user_click_on_customers_menu() throws Throwable {
	cp.clickOnCustomerMenu();
	}

	@When("^click on customer menu item$")
	public void click_on_customer_menu_item() throws Throwable {
	 cp.clickOnCustomerMenuItem();
	}

	@When("^click on add new button$")
	public void click_on_add_new_button() throws Throwable {
		cp.clickOnAddNewbtn();
	 	}

	@Then("^USer can view add new page$")
	public void user_can_view_add_new_page() throws Throwable {

		Assert.assertEquals("Add a new customer / nopCommerce administration", cp.getPageTitle());
	}

	@When("^User enter customer info$")
	public void user_enter_customer_info() throws Throwable {
		String email=randomString()+"@gmail.com";
	cp.setEmail(email);
	cp.setPassword("abcde");
	}

	@When("^click on save button$")
	public void click_on_save_button() throws Throwable {
	 cp.submitNewCustomer();
	 Thread.sleep(2000);
	}

	@Then("^User can view confirmation message \"([^\"]*)\"$")
	public void user_can_view_confirmation_message(String message) throws Throwable {
	   Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains(message));
	}

	//Steps for Search customer using email ID

@When("^User enter customer email$")
public void user_enter_customer_email() throws Throwable {
  cs= new CustomerSearch(driver);
  cs.setEmail("victoria_victoria@nopCommerce.com");
  
}

@When("^User click on Search button$")
public void user_click_on_Search_button() throws Throwable {
    cs.clickSearch();
    Thread.sleep(3000);
    
}

@Then("^User should find Email in Search table$")
public void user_should_find_Email_in_Search_table() throws Throwable {
	boolean status=cs.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
	Assert.assertEquals(true, status);
}

	
}
