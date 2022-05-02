package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class CustomerPage {
	public WebDriver ldriver;
	public CustomerPage(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	By lnk_Customers_menu=By.xpath("//a[@href='#']//p[contains(text(), 'Customers')]");
	By lnk_Customera_menuitem= By.xpath("//a[@href='/Admin/Customer/List']//p[contains(text(), 'Customers')]");
	By btn_AddNew= By.xpath("//a[@class='btn btn-primary']//i");
	By txtEmail= By.id("Email");
	By txtPassword=By.id("Password");
	By btnSubmit= By.xpath("//button[@type='submit' and @name='save']");
	By headerAlert=By.xpath("//button[@type='button' and @class='close' and @data-dismiss='alert']");
	
	
	//Action Methods
	
	public String getPageTitle()
	{
		return ldriver.getTitle();
	}
	
	public void clickOnCustomerMenu()
	{
		ldriver.findElement(lnk_Customers_menu).click();
	}
	
	public void clickOnCustomerMenuItem()
	{
		ldriver.findElement(lnk_Customera_menuitem).click();
	}
	
	public void clickOnAddNewbtn()
	{
		ldriver.findElement(btn_AddNew).click();
			}
	public void setEmail(String email)
	{
		ldriver.findElement(txtEmail).sendKeys(email);
	}
	
	public void setPassword(String password)
	{
		ldriver.findElement(txtPassword).sendKeys(password);
	}
	
	public void submitNewCustomer()
	{
		ldriver.findElement(btnSubmit).click();
	}

}
