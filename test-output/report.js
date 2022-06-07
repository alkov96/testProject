$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "запрос, который выполняет умножение",
  "description": "  Проверка запроса на умножение",
  "keyword": "Функция",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "проверка умножения",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@positive"
    },
    {
      "name": "@api"
    },
    {
      "name": "@tag1"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем \u003cпервое значение\u003e и \u003cвторое значение\u003e",
  "keyword": "Когда "
});
formatter.step({
  "name": "проверка того, результат умножения \u003cпервое значение\u003e и \u003cвторое значение\u003e правильный",
  "keyword": "Тогда "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Примеры",
  "rows": [
    {
      "cells": [
        "первое значение",
        "второе значение"
      ]
    },
    {
      "cells": [
        "50",
        "22"
      ]
    }
  ]
});
formatter.scenario({
  "name": "проверка умножения",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@api"
    },
    {
      "name": "@tag1"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 50 и 22",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "проверка того, результат умножения 50 и 22 правильный",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "проверка умножения граничных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем \u003cпервое значение\u003e и \u003cвторое значение\u003e",
  "keyword": "Когда "
});
formatter.step({
  "name": "проверка того, результат умножения \u003cпервое значение\u003e и \u003cвторое значение\u003e правильный",
  "keyword": "Тогда "
});
formatter.step({
  "name": "убеждаемся, что код ответа 200",
  "keyword": "Тогда "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Примеры",
  "rows": [
    {
      "cells": [
        "первое значение",
        "второе значение"
      ]
    },
    {
      "cells": [
        "99",
        "0"
      ]
    },
    {
      "cells": [
        "100",
        "1"
      ]
    },
    {
      "cells": [
        "100",
        "100"
      ]
    },
    {
      "cells": [
        "0",
        "0"
      ]
    },
    {
      "cells": [
        "0",
        "1"
      ]
    },
    {
      "cells": [
        "100",
        "99"
      ]
    }
  ]
});
formatter.scenario({
  "name": "проверка умножения граничных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@tag"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 99 и 0",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "проверка того, результат умножения 99 и 0 правильный",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 200",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения граничных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@tag"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 100 и 1",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "проверка того, результат умножения 100 и 1 правильный",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 200",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения граничных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@tag"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 100 и 100",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "проверка того, результат умножения 100 и 100 правильный",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 200",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения граничных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@tag"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 0 и 0",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "проверка того, результат умножения 0 и 0 правильный",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 200",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения граничных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@tag"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 0 и 1",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "проверка того, результат умножения 0 и 1 правильный",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 200",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения граничных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@tag"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 100 и 99",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "проверка того, результат умножения 100 и 99 правильный",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 200",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "проверка умножения дробных чисел",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем \u003cпервое значение\u003e и \u003cвторое значение\u003e",
  "keyword": "Когда "
});
formatter.step({
  "name": "проверка того, результат умножения \u003cпервое значение\u003e и \u003cвторое значение\u003e правильный",
  "keyword": "Тогда "
});
formatter.step({
  "name": "убеждаемся, что код ответа 200",
  "keyword": "Тогда "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Примеры",
  "rows": [
    {
      "cells": [
        "первое значение",
        "второе значение"
      ]
    },
    {
      "cells": [
        "50.1",
        "22"
      ]
    }
  ]
});
formatter.scenario({
  "name": "проверка умножения дробных чисел",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 50.1 и 22",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "проверка того, результат умножения 50.1 и 22 правильный",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 200",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "проверка умножения некорректных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем \u003cпервое значение\u003e и \u003cвторое значение\u003e",
  "keyword": "Когда "
});
formatter.step({
  "name": "убеждаемся, что код ответа 400",
  "keyword": "Тогда "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Примеры",
  "rows": [
    {
      "cells": [
        "первое значение",
        "второе значение"
      ]
    },
    {
      "cells": [
        "!",
        "0"
      ]
    },
    {
      "cells": [
        "bla",
        "4"
      ]
    },
    {
      "cells": [
        "bla",
        "blabla"
      ]
    },
    {
      "cells": [
        "-1",
        "0"
      ]
    },
    {
      "cells": [
        "101",
        "854986"
      ]
    },
    {
      "cells": [
        "56.4",
        "2"
      ]
    },
    {
      "cells": [
        "01",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "проверка умножения некорректных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем ! и 0",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 400",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения некорректных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем bla и 4",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 400",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения некорректных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем bla и blabla",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 400",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения некорректных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем -1 и 0",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 400",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения некорректных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 101 и 854986",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 400",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения некорректных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 56.4 и 2",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 400",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "проверка умножения некорректных значений",
  "description": "",
  "keyword": "Структура сценария",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "умножаем 01 и 2",
  "keyword": "Когда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "убеждаемся, что код ответа 400",
  "keyword": "Тогда "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});