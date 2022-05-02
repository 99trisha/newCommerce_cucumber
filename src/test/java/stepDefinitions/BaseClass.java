package stepDefinitions;

import java.util.Properties;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;

import pageObjects.CustomerPage;
import pageObjects.CustomerSearch;
import pageObjects.LoginPage;

public class BaseClass {

	public WebDriver driver;
	public LoginPage lp;
	public CustomerPage cp;
	public CustomerSearch cs;
	
	
	public Properties configProperties;
	
	//created fro generating random string for unique email id
	public static String randomString()
	{
		String generatedString1=RandomStringUtils.randomAlphabetic(5);
		return(generatedString1);
	}
	
	
}
