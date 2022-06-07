# language: ru

@test

Функция: веб-интерфейс калькулятора

  Проверка работы веб-интерфейса

  Структура сценария: веб тест

    Дано открываем страницу
    Когда вводим значение <один> и значение <два> в поля и выполняем умножение
    Когда проверяем корректность результата умножения значения <один> и значения <два>

    Примеры:
      | один | два |
      | 50   | 22  |
      | 100  | 0   |
      | 99   | 1   |
      | 100  | 1   |

  Структура сценария: проверка умножения с некорретными данными

    Дано открываем страницу
    Когда вводим значение <один> и значение <два> в поля и выполняем умножение
    Тогда проверяем, что ошибка отображается

    Примеры:
      | один  | два |
      | 87878 | 22  |
      |       | 0   |
      | раз   | 1   |


  Сценарий: проверка того, что, после выполнения негативного сценария, позитивный сценарий выполняется

    Дано открываем страницу
    Когда вводим значение раз и значение 4 в поля и выполняем умножение
    Тогда проверяем, что ошибка отображается
    Затем вводим значение 5 и значение 5 в поля и выполняем умножение
    Когда проверяем корректность результата умножения значения 5 и значения 5

#  Сценарий:
#    Когда проверка