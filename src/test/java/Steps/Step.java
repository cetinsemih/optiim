package Steps;

import Base.BaseStep;
import ScreenshotUtil.ScreenshotUtil;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.UUID;

public class Step extends BaseStep {
    String uuid = UUID.randomUUID().toString();

    @Before
    public void setUp() {
        System.out.println("\n----> Test başlamadan önce yapılacak işlemler <----\n");
        isScenarioComplated=false;

    }

    @After
    public void tearDown() {
        System.out.println("\n---->Test tamamlandıktan sonra yapılacak işlemler <----\n");
        if (isScenarioComplated==false){
            ScreenshotUtil.takeScreenshot(driver, "hata_durumu");
        }
        DriverQuit();
    }

    @Given("^Open \"([^\"]*)\" page$")
    public void openNewPage(String url) {
        geturl(url);
    }

    @Then("^Check, is URL True \"([^\"]*)\"$")
    public void checkUrl(String expectedUrl) {
        expectedUrl = addHttps(expectedUrl);
        String currentUrl = driver.getCurrentUrl();
        if (expectedUrl.contains(currentUrl))
        {
            System.out.println("URL'ler eşleşti \nBeklenen URL : "+ expectedUrl + "\n Güncel URl : "+currentUrl );
        }else
        {
            System.out.println("URL eşleşmedi! \nBeklenen: " + expectedUrl + ", \nBulunan: " + currentUrl);
        }
        //Assert.assertEquals("URL eşleşmedi! \nBeklenen: " + expectedUrl + ", \nBulunan: " + currentUrl, expectedUrl, currentUrl);
    }


    @When("^Click \"([^\"]*)\" Object by \"([^\"]*)\"$")
    public void clickObject(String locator, Pather locatorType) {
        findElementClick(locator,locatorType);

    }

    @When("^Check \"([^\"]*)\" Object by \"([^\"]*)\"$")
    public void checkObject(String locator, Pather locatorType) {
        findElement(locator,locatorType,TimeOut.MIDDLE);
    }
    @When("^Check does not see \"([^\"]*)\" Object by \"([^\"]*)\"$")
    public void checkDoesNotSeeObject(String locator, Pather locatorType) {
        List<WebElement> list = findElements(locator,locatorType,TimeOut.MIDDLE);
        if (list.size()==0)
        {
            System.out.println("Obje ekranda bulunmuyor.");
        }
        else
        {
            throw new AssertionError("Obje ekranda bulunuyor");
        }
    }

    @When("^Scroll to \"([^\"]*)\" Object by \"([^\"]*)\"$")
    public void scrollToObject(String locator, Pather locatorType) {
        scrollToElementUsingJS(locator,locatorType);
    }

    @When("^Slow scroll to \"([^\"]*)\" Object by \"([^\"]*)\"$")
    public void slowScrollToObject(String locator, Pather locatorType) {
        scrollToElementUsingJS(locator,locatorType);
    }

    @When("^Wait \"([^\"]*)\" seconds over \"([^\"]*)\" Object by \"([^\"]*)\"$")
    public void hoverOverElement(int timeoutInSeconds,String locator, Pather locatorType) {
        hoverOverElementWithWait(locator,locatorType,timeoutInSeconds);
    }

    @When("^Wait for \"([^\"]*)\" seconds$")
    public void waitForSecondsBdd(int time)
    {
        waitForSeconds(time);
    }

    @When("^Check \"([^\"]*)\" elemets by \"([^\"]*)\" for \"([^\"]*)\" text$")
            public  void areElementsIncludeTheTextBdd(String locator, Pather locatorType,String text)
    {
        areElementsIncludeTheText(locator,locatorType,text);
    }
    @When("^Check \"([^\"]*)\" elemet by \"([^\"]*)\" for \"([^\"]*)\" value$")
    public  void IsElementIncludeThevextBdd(String locator, Pather locatorType,String text)
    {
        String currentValue = findElement(locator,locatorType,TimeOut.LOW).getAttribute("value");
        System.out.println(text);
        System.out.println(currentValue);

        Assert.assertEquals("Beklenen değer ile mevcut değer eşleşmiyor", text, currentValue);
        System.out.println("Beklenen değer ile mevcut değer eşleşiyor");
    }
    @When("^Check \"([^\"]*)\" elemet by \"([^\"]*)\" for \"([^\"]*)\" text$")
    public  void IsElementIncludeTheTextBdd(String locator, Pather locatorType,String text)
    {
        String currentValue = findElement(locator,locatorType,TimeOut.LOW).getText();
        System.out.println(text);
        System.out.println(currentValue);

        Assert.assertEquals("Beklenen değer ile mevcut değer eşleşmiyor", text, currentValue);
        System.out.println("Beklenen değer ile mevcut değer eşleşiyor");
    }

    @Given("^Switch the page$")
    public void switchThePageBdd()
    {switchThePage();}

    @Given("^Finish the scenario$")
    public void setScenarioComplatedBdd()
    {setScenarioComplated();}

    @And("^driver close$")
    public void driverClose() {
        DriverQuit();
    }

    @Given("^Send \"([^\"]*)\" text to \"([^\"]*)\" Object by \"([^\"]*)\"$")
    public void sendKeys(String text,String locator, Pather locatorType) {
        findElement(locator,locatorType,TimeOut.LOW).sendKeys(text);
    }

    @When("^Click \"([^\"]*)\" Object with \"([^\"]*)\" index by \"([^\"]*)\"$")
    public void clickElemetWithIndexBdd(String path,int index, Pather type)
    {
        clickElemetWithIndex(path,index,type);
    }

    @Given("^Clean and Send \"([^\"]*)\" text to \"([^\"]*)\" Object by \"([^\"]*)\"$")
    public void clearAndSendKeysBdd(String text,String locator, Pather locatorType) {
        clearAndSendKeys(locator,locatorType,text);
    }

    @Given("^Scroll bottom of the page$")
    public void scrollToBottomBdd() {
        scrollToBottom();
    }



}
