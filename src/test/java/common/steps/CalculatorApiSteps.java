package common.steps;

import common.Credentials;
import io.cucumber.java.ru.Когда;
import io.cucumber.java.ru.Тогда;
import io.restassured.RestAssured;
import io.restassured.config.HttpClientConfig;
import io.restassured.config.RestAssuredConfig;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import net.serenitybdd.rest.SerenityRest;
import org.apache.http.params.CoreConnectionPNames;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;


public class CalculatorApiSteps extends Credentials {


    @Когда("^умножаем (.*) и (.*)$")
    public void multiply(String first, String second) {
        SerenityRest.given().
                contentType(ContentType.fromContentType("application/x-www-form-urlencoded")).
                log().all().
                body("first=" + first + "&second=" + second + "").
                post(url);
    }

    @Когда("^отправляем некорректный запрос (.*) и (.*)$")
    public void incorrectRequest(String first, String second) {
        SerenityRest.given().
                contentType(ContentType.fromContentType("application/x-www-form-urlencoded")).
                log().all().
                body("first=" + first + "&second=" + second + "").
                get(url);
    }


    @Когда("^проверка того, результат умножения (.*) и (.*) правильный$")
    public void ifMultiplyCorrect(String first, String second) {
        SerenityRest.lastResponse().prettyPrint();
        int first_int = Integer.parseInt(first.trim());
        int second_int = Integer.parseInt(second.trim());
        int result_of_multiply = first_int * second_int;

        Assert.assertEquals(result_of_multiply, Integer.parseInt((SerenityRest.lastResponse().asString()).trim()));
    }


    @Тогда("^убеждаемся, что код ответа (.*)$")
    public void checkStatusCode(int code) {
        SerenityRest.lastResponse().prettyPrint();
        SerenityRest.lastResponse().
                then().
                statusCode(code);
    }

    @Когда("^для пинга передаём время продолжительности теста (.*) и ожидание (.*) секунд$")
    public void serverUpTimeTest(int intervalHours, int sleepSec) throws Exception {
        long timeMs = System.currentTimeMillis() + (intervalHours * 60 * 60 * 1000L);
        while (System.currentTimeMillis() < timeMs) {
            Response response = SerenityRest.given().
                    contentType(ContentType.fromContentType("application/x-www-form-urlencoded")).
                    log().all().
                    post(url).andReturn();

            if (response.getStatusCode() != 200) {
                Assert.fail("Ошибка подключения к серверу");
            }

            Thread.sleep(sleepSec);
        }
        assert true;
    }

    @Когда("лимит одновременных подключений {int}")
    public void serverMaxConnectionTest(int maxConnection) throws Exception {
        int sleepMs = 800;
        RestAssuredConfig config = RestAssured.config().
                httpClient(HttpClientConfig.httpClientConfig()
                        .setParam(CoreConnectionPNames.CONNECTION_TIMEOUT, sleepMs - 100)
                        .setParam(CoreConnectionPNames.SO_TIMEOUT, sleepMs - 100));

        AtomicInteger terminatedCount = new AtomicInteger(-1);
        for (int i = 1; i <= maxConnection; i++) {
            List<Thread> threads = new ArrayList<>();
            for (int j = 0; j < i; j++) {

                int finalI = i;
                threads.add(new Thread(() -> {

                    Response response = SerenityRest.
                            given().
                            config(config).
                            contentType(ContentType.fromContentType("application/x-www-form-urlencoded")).
                            body("first=" + (ThreadLocalRandom.current().nextInt(1, 101) + "&second=" + (ThreadLocalRandom.current().nextInt(1, 101) + ""))).
                            post(url).andReturn();

                    if (response.getStatusCode() != 200) {
                        terminatedCount.set(finalI);

                    }

                }));
            }

            System.out.printf("%n");
            System.out.println(i);

            threads.forEach(Thread::start);
            Thread.sleep(sleepMs);

            if (terminatedCount.get() != -1) {
                Assert.fail("Тест упал! Количестов запросов: " + terminatedCount.get() + " задержка " + sleepMs);
            }
        }
        assert true;
    }


    @Когда("перемножение всех чисел от 0 до 100, проверка умножения")
    public void allNumbersTest() throws Exception {
        AtomicBoolean testFailed = new AtomicBoolean(false);
        int minNumber = 0;
        int maxNumber = 100;

        for (int i = minNumber; i <= maxNumber; i++) {
            for (int j = minNumber; j <= maxNumber; j++) {
                int finalI = i;
                int finalJ = j;

                new Thread(() -> {
                    Response response = SerenityRest.
                            given().
                            contentType(ContentType.fromContentType("application/x-www-form-urlencoded")).
                            body("first=" + finalI + "&second=" + finalJ).
                            post(url).andReturn();

                    int mIJ = finalI * finalJ;
                    int serverRes = Integer.parseInt(response.body().prettyPrint());
                    if (mIJ != serverRes) {
                        testFailed.set(true);
                    } else {
                        System.out.println(finalI + "*" + finalJ + "=" + mIJ + "server:" + serverRes);
                    }
                }).start();

                if (j % 5 == 0)
                    Thread.sleep(300);

                if (testFailed.get()) {
                    Assert.fail("Ошибка вычисления: " + i + "*" + j);
                    return;
                }
            }
        }
        assert true;
    }
}
