package common.pages;

import cucumber.api.java.After;
import io.github.bonigarcia.wdm.WebDriverManager;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CalculatorPage {

    By firstInput = By.xpath("//div[@class='container']/input[1]");
    By secondInput = By.xpath("//div[@class='container']/input[2]");

    By multiplyButton = By.xpath("//button[@id='submit_btn']");
    By result = By.xpath("//div[@id='result']");
    By error = By.xpath("//span[@class='error-text']");


    String errorText = "Only numbers from 0 to 100 and not empty";

    public static WebDriver driver;

    public void clickMultiplyButton() {
        WebDriverWait wait = new WebDriverWait(driver, 2);
        WebElement button = driver.findElement(multiplyButton);
        wait.until(ExpectedConditions.elementToBeClickable(button));
        button.click();
    }

    public void openPage(String url) {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.navigate().to(url);
    }

    public void sendKeyFirstInput(String key) {
        driver.findElement(firstInput).clear();
        driver.findElement(firstInput).sendKeys(key);
    }

    public void sendKeySecondInput(String key) {
        driver.findElement(secondInput).clear();
        driver.findElement(secondInput).sendKeys(key);
    }

    public String getResult() throws InterruptedException {
        Thread.sleep(1500);
        WebElement answer = driver.findElement(result);
        String f = answer.getText();
        String[] data = f.split(": ");
        try {
            return data[1];
        } finally {
            if (!(data.length == 2)) {
                Assert.fail("Результат умножения не отобразился!");
            }
        }
    }

    public void getError() {
        WebDriverWait wait = new WebDriverWait(driver, 2);
        WebElement message_error = driver.findElement(error);
        wait.until(ExpectedConditions.visibilityOf(message_error));
        Assert.assertEquals(errorText.trim(), message_error.getText().trim());
    }

    public void checkMultiply() throws InterruptedException {
        int minNumber = 0;
        int maxNumber = 100;
        for (int i = 25; i <= maxNumber; i++) {
            for (int j = minNumber; j <= maxNumber; j++) {
                sendKeyFirstInput(String.valueOf(i));
                sendKeySecondInput(String.valueOf(j));
                clickMultiplyButton();
                String f = getResult();

                int serverSum = Integer.parseInt(f);

                if (i * j != serverSum) {
                    Assert.fail("Ошибка вычисления: " + i + "*" + j + "= " + serverSum);
                }
            }
        }
        assert true;
    }

    @After
    public void close() {
        driver.close();
    }
}
