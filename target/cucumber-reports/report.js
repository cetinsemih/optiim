$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("optiim.feature");
formatter.feature({
  "line": 1,
  "name": "Example",
  "description": "",
  "id": "example",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2225559300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Optiim - Selenium Task",
  "description": "",
  "id": "example;optiim---selenium-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Complated"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "# 1. https://automationexercise.com/ adresine git ve doğru adresin açıldığını kontrol et"
    }
  ],
  "line": 6,
  "name": "Open \"automationexercise.com/\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Check, is URL True \"automationexercise.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Check \"//div[@id\u003d\u0027slider-carousel\u0027]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Login sayfasına gir"
    }
  ],
  "line": 10,
  "name": "Click \"//a[text()\u003d\u0027 Signup / Login\u0027]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Check \"//h2[contains(text(), \u0027Login to your account\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Kullanıcı adı ve şifresi ile login ol"
    }
  ],
  "line": 13,
  "name": "Send \"optiim@test.com\" text to \"//div[@class\u003d\u0027login-form\u0027]//input[@name\u003d\u0027email\u0027]\" Object by \"xPath\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Send \"Test1234\" text to \"//div[@class\u003d\u0027login-form\u0027]//input[@name\u003d\u0027password\u0027]\" Object by \"xPath\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Click \"//div[@class\u003d\u0027login-form\u0027]//button\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Login sonrası ana sayfaya yönlendirildiği kontrol edilir."
    }
  ],
  "line": 17,
  "name": "Check \"//h2[contains(text(), \u0027Features Items\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "# Products butona tıklanıp ürünler sayfasının açıldığı kontrol edilir."
    }
  ],
  "line": 19,
  "name": "Click \"//a[text()\u003d\u0027 Products\u0027]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Check \"//h2[contains(text(), \u0027All Products\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#Arama alanına aranılacak kelime yazılıp ara butonuna tıklanır."
    }
  ],
  "line": 22,
  "name": "Send \"tshirt\" text to \"//input[@id\u003d\u0027search_product\u0027]\" Object by \"xPath\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Click \"//button[@id\u003d\u0027submit_search\u0027]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "# Listelenen ürünlerin hepsinin belirtilen metni içerdiği kontrol edilir."
    }
  ],
  "line": 25,
  "name": "Check \"//div[@class\u003d\u0027productinfo text-center\u0027]/p\" elemets by \"xPath\" for \"shirt\" text",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#Ekranın en altına kaydırılır."
    }
  ],
  "line": 27,
  "name": "Scroll bottom of the page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#Listelenen ürünlerden verilen sıradaki ürüne tıklanır."
    }
  ],
  "line": 29,
  "name": "Click \"//a[text()\u003d\u0027View Product\u0027]\" Object with \"5\" index by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "# Ürün detay ekranında olunduğu kontrol edilir."
    }
  ],
  "line": 31,
  "name": "Check, is URL True \"https://automationexercise.com/product_details\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# Ürün adedi alanındaki değer silinip yerine belirtilen değer girilir."
    }
  ],
  "line": 33,
  "name": "Clean and Send \"2\" text to \"//input[@id\u003d\u0027quantity\u0027]\" Object by \"xPath\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "# Ürün adedi alanında belirtilen adedde ürün olduğu kontrol edilir."
    }
  ],
  "line": 35,
  "name": "Check \"//input[@id\u003d\u0027quantity\u0027]\" elemet by \"xPath\" for \"2\" value",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "# Ürün sepete eklenir ve ekleme işlemi sonrası ürün eklendi pop-up ının açıldığı kontrol edilir."
    }
  ],
  "line": 37,
  "name": "Click \"//button[@class\u003d\u0027btn btn-default cart\u0027]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Check \"//h4[contains(text(), \u0027Added!\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Check \"//p[contains(text(), \u0027Your product has been added to cart.\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#Alışverişe devam et butonuna tıklanıp pop-up ın kapatılır."
    }
  ],
  "line": 41,
  "name": "Click \"//button[contains(text(), \u0027Continue Shopping\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "#Sepet butonuna tıklanır."
    }
  ],
  "line": 43,
  "name": "Click \"//a[contains(text(), \u0027Cart\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "#Önceki sayfadaki elementlerin artık listelenmediği görülür."
    }
  ],
  "line": 45,
  "name": "Check does not see \"//h4[contains(text(), \u0027Added!\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Check does not see \"//p[contains(text(), \u0027Your product has been added to cart.\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 47,
      "value": "#Sepet ekranında olunduğu kontrol edilir."
    }
  ],
  "line": 48,
  "name": "Check \"//a[contains(text(), \u0027Proceed To Checkout\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Check \"//tbody/tr\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#Sepetteki ürünün adedinin istenilen adette olduğu kontrol edilir."
    }
  ],
  "line": 51,
  "name": "Check \"//td[@class\u003d\u0027cart_quantity\u0027]/button\" elemet by \"xPath\" for \"2\" text",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#Ürünü kaldır butonuna tıklanır."
    }
  ],
  "line": 53,
  "name": "Click \"//td[@class\u003d\u0027cart_delete\u0027]/a\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 54,
      "value": "# Belirtilen saniye kadar bekle"
    }
  ],
  "line": 55,
  "name": "Wait for \"1\" seconds",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 56,
      "value": "# Ürünün sepetten kaldırıldığı görülür."
    }
  ],
  "line": 57,
  "name": "Check does not see \"//tbody/tr\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "Check does not see \"//td[@class\u003d\u0027cart_quantity\u0027]/button\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 59,
      "value": "#Sepetin boş olduğu görülür"
    }
  ],
  "line": 60,
  "name": "Check \"//b[contains(text(), \u0027Cart is empty!\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 61,
      "value": "# Sol üstteki logoya tıklanılır."
    }
  ],
  "line": 62,
  "name": "Click \"//div[@class\u003d\u0027logo pull-left\u0027]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "# Sepet ekranında olunmadığı, ana sayfada olunduğu kontrol edilir."
    }
  ],
  "line": 64,
  "name": "Check does not see \"//b[contains(text(), \u0027Cart is empty!\u0027)]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Check \"//div[@id\u003d\u0027slider-carousel\u0027]\" Object by \"xPath\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 66,
      "value": "# Senaryo sonlandırılır."
    }
  ],
  "line": 67,
  "name": "Finish the scenario",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "automationexercise.com/",
      "offset": 6
    }
  ],
  "location": "Step.openNewPage(String)"
});
formatter.result({
  "duration": 4034796400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automationexercise.com/",
      "offset": 20
    }
  ],
  "location": "Step.checkUrl(String)"
});
formatter.result({
  "duration": 8205400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@id\u003d\u0027slider-carousel\u0027]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 48
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 32369300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//a[text()\u003d\u0027 Signup / Login\u0027]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 49
    }
  ],
  "location": "Step.clickObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 665210800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//h2[contains(text(), \u0027Login to your account\u0027)]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 67
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 26573601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "optiim@test.com",
      "offset": 6
    },
    {
      "val": "//div[@class\u003d\u0027login-form\u0027]//input[@name\u003d\u0027email\u0027]",
      "offset": 32
    },
    {
      "val": "xPath",
      "offset": 93
    }
  ],
  "location": "Step.sendKeys(String,String,BaseStep$Pather)"
});
formatter.result({
  "duration": 186256699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 6
    },
    {
      "val": "//div[@class\u003d\u0027login-form\u0027]//input[@name\u003d\u0027password\u0027]",
      "offset": 25
    },
    {
      "val": "xPath",
      "offset": 89
    }
  ],
  "location": "Step.sendKeys(String,String,BaseStep$Pather)"
});
formatter.result({
  "duration": 97113401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027login-form\u0027]//button",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 54
    }
  ],
  "location": "Step.clickObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 1903121901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//h2[contains(text(), \u0027Features Items\u0027)]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 60
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 39328800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//a[text()\u003d\u0027 Products\u0027]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 43
    }
  ],
  "location": "Step.clickObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 1424519800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//h2[contains(text(), \u0027All Products\u0027)]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 58
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 38956000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tshirt",
      "offset": 6
    },
    {
      "val": "//input[@id\u003d\u0027search_product\u0027]",
      "offset": 23
    },
    {
      "val": "xPath",
      "offset": 65
    }
  ],
  "location": "Step.sendKeys(String,String,BaseStep$Pather)"
});
formatter.result({
  "duration": 207628899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@id\u003d\u0027submit_search\u0027]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 49
    }
  ],
  "location": "Step.clickObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 816929800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027productinfo text-center\u0027]/p",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 62
    },
    {
      "val": "shirt",
      "offset": 74
    }
  ],
  "location": "Step.areElementsIncludeTheTextBdd(String,BaseStep$Pather,String)"
});
formatter.result({
  "duration": 133035201,
  "status": "passed"
});
formatter.match({
  "location": "Step.scrollToBottomBdd()"
});
formatter.result({
  "duration": 13921100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//a[text()\u003d\u0027View Product\u0027]",
      "offset": 7
    },
    {
      "val": "5",
      "offset": 48
    },
    {
      "val": "xPath",
      "offset": 61
    }
  ],
  "location": "Step.clickElemetWithIndexBdd(String,int,BaseStep$Pather)"
});
formatter.result({
  "duration": 1131065399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://automationexercise.com/product_details",
      "offset": 20
    }
  ],
  "location": "Step.checkUrl(String)"
});
formatter.result({
  "duration": 11294601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "//input[@id\u003d\u0027quantity\u0027]",
      "offset": 28
    },
    {
      "val": "xPath",
      "offset": 64
    }
  ],
  "location": "Step.clearAndSendKeysBdd(String,String,BaseStep$Pather)"
});
formatter.result({
  "duration": 516772201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//input[@id\u003d\u0027quantity\u0027]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 43
    },
    {
      "val": "2",
      "offset": 55
    }
  ],
  "location": "Step.IsElementIncludeThevextBdd(String,BaseStep$Pather,String)"
});
formatter.result({
  "duration": 40694600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027btn btn-default cart\u0027]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 59
    }
  ],
  "location": "Step.clickObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 144521500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//h4[contains(text(), \u0027Added!\u0027)]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 52
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 34397199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//p[contains(text(), \u0027Your product has been added to cart.\u0027)]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 81
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 19674900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[contains(text(), \u0027Continue Shopping\u0027)]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 67
    }
  ],
  "location": "Step.clickObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 671104500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//a[contains(text(), \u0027Cart\u0027)]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 49
    }
  ],
  "location": "Step.clickObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 924685599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//h4[contains(text(), \u0027Added!\u0027)]",
      "offset": 20
    },
    {
      "val": "xPath",
      "offset": 65
    }
  ],
  "location": "Step.checkDoesNotSeeObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 23497000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//p[contains(text(), \u0027Your product has been added to cart.\u0027)]",
      "offset": 20
    },
    {
      "val": "xPath",
      "offset": 94
    }
  ],
  "location": "Step.checkDoesNotSeeObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 26771500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//a[contains(text(), \u0027Proceed To Checkout\u0027)]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 64
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 14227301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//tbody/tr",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 30
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 48977500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//td[@class\u003d\u0027cart_quantity\u0027]/button",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 55
    },
    {
      "val": "2",
      "offset": 67
    }
  ],
  "location": "Step.IsElementIncludeTheTextBdd(String,BaseStep$Pather,String)"
});
formatter.result({
  "duration": 36965100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//td[@class\u003d\u0027cart_delete\u0027]/a",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 48
    }
  ],
  "location": "Step.clickObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 139562400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "Step.waitForSecondsBdd(int)"
});
formatter.result({
  "duration": 1012139500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//tbody/tr",
      "offset": 20
    },
    {
      "val": "xPath",
      "offset": 43
    }
  ],
  "location": "Step.checkDoesNotSeeObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 26549500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//td[@class\u003d\u0027cart_quantity\u0027]/button",
      "offset": 20
    },
    {
      "val": "xPath",
      "offset": 68
    }
  ],
  "location": "Step.checkDoesNotSeeObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 12866100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//b[contains(text(), \u0027Cart is empty!\u0027)]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 59
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 14211200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027logo pull-left\u0027]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 50
    }
  ],
  "location": "Step.clickObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 1172396100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//b[contains(text(), \u0027Cart is empty!\u0027)]",
      "offset": 20
    },
    {
      "val": "xPath",
      "offset": 72
    }
  ],
  "location": "Step.checkDoesNotSeeObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 21939501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@id\u003d\u0027slider-carousel\u0027]",
      "offset": 7
    },
    {
      "val": "xPath",
      "offset": 48
    }
  ],
  "location": "Step.checkObject(String,BaseStep$Pather)"
});
formatter.result({
  "duration": 12212100,
  "status": "passed"
});
formatter.match({
  "location": "Step.setScenarioComplatedBdd()"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.after({
  "duration": 764144600,
  "status": "passed"
});
});