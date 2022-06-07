package common.steps;

import common.pages.CalculatorPage;
import common.Credentials;
import io.cucumber.java.ru.Дано;
import io.cucumber.java.ru.Когда;
import io.cucumber.java.ru.Тогда;
import org.junit.Assert;


public class CalculatorWebSteps extends Credentials {


    CalculatorPage calculatorPage = new CalculatorPage();

    @Дано("открываем страницу")
    public void openPage() {
        calculatorPage.openPage(urlWeb);
    }

    @Дано("проверка")
    public void checkMultiplyStep() throws InterruptedException {
        calculatorPage.openPage(urlWeb);
        calculatorPage.checkMultiply();
    }

    @Когда("^вводим значение (.*) и значение (.*) в поля и выполняем умножение$")
    public void multiply(String first, String second) {
        calculatorPage.sendKeyFirstInput(first);
        calculatorPage.sendKeySecondInput(second);
        calculatorPage.clickMultiplyButton();
    }

    @Тогда("^проверяем корректность результата умножения значения (.*) и значения (.*)$")
    public void getResult(String first, String second) throws InterruptedException {
        int first_int = Integer.parseInt(first.trim());
        int second_int = Integer.parseInt(second.trim());
        int result_of_multiply = first_int * second_int;
        Assert.assertEquals(result_of_multiply, Integer.parseInt((calculatorPage.getResult().trim())));
        calculatorPage.close();
    }

    @Тогда("проверяем, что ошибка отображается")
    public void checkError() {
        calculatorPage.getError();
    }

}

