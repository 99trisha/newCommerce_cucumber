package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Waithelper;

public class CustomerSearch {
	public WebDriver ldriver;
	Waithelper wh;
	public CustomerSearch(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(ldriver, this);
		wh=new Waithelper(ldriver);
	}
	
 

 
 @FindBy(id="SearchEmail")
	@CacheLookup
	WebElement txtEmail;
 
 
 @FindBy(id="SearchFirstName")
	@CacheLookup
	WebElement txtFirstName;
 
 @FindBy(id="search-customers")
	@CacheLookup
	WebElement btnSearchCustomer;
 
 @FindBy(xpath="//div[@class='dataTables_scrollBody']//tr")
 @CacheLookup
 List<WebElement> tableRows;
 
 
 @FindBy(xpath="//div[@class='dataTables_scrollBody']//tr/td")
 @CacheLookup
 List<WebElement> tableColumns;
 
 @FindBy(xpath="//div[@id='customers-grid_wrapper']")
 @CacheLookup
 WebElement searchtable;
 
 //Action methods
 public void setEmail(String email)
 {
	 wh.WaitForElement(txtEmail, 10);
	txtEmail.clear();
	 txtEmail.sendKeys(email);
 }
 
 public void clickSearch()
 {
	 btnSearchCustomer.click();
 }
 
 public void searchByFirstName(String name)
 {
	 txtEmail.sendKeys(name);
	 {
		 
	 }
 }
 
 public int getNoofRows()
 {
	 return(tableRows.size());
 }
 
 public int getNoColumns()
 {
	 return(tableColumns.size());
 }
 public boolean searchCustomerByEmail(String email)
 {
	 boolean flag=false;
	 for(int i=1;i<=getNoofRows();i++)
	 {
		 String emailid=searchtable.findElement(By.xpath("//div[@id='customers-grid_wrapper']//tbody/tr/td[2]")).getText();
		 System.out.println(emailid);
		 if(emailid.equals(email))
		 {
			 flag=true;
		 }
	 }
	 return flag;
 }
 
}
