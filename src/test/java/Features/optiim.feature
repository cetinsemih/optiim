Feature: Example

  @Complated
  Scenario: Optiim - Selenium Task
    # 1. https://automationexercise.com/ adresine git ve doğru adresin açıldığını kontrol et
    Given Open "automationexercise.com/" page
    When Check, is URL True "automationexercise.com/"
    When Check "//div[@id='slider-carousel']" Object by "xPath"
    # Login sayfasına gir
    When Click "//a[text()=' Signup / Login']" Object by "xPath"
    When Check "//h2[contains(text(), 'Login to your account')]" Object by "xPath"
    #Kullanıcı adı ve şifresi ile login ol
    Given Send "optiim@test.com" text to "//div[@class='login-form']//input[@name='email']" Object by "xPath"
    Given Send "Test1234" text to "//div[@class='login-form']//input[@name='password']" Object by "xPath"
    When Click "//div[@class='login-form']//button" Object by "xPath"
    #Login sonrası ana sayfaya yönlendirildiği kontrol edilir.
    When Check "//h2[contains(text(), 'Features Items')]" Object by "xPath"
    # Products butona tıklanıp ürünler sayfasının açıldığı kontrol edilir.
    When Click "//a[text()=' Products']" Object by "xPath"
    When Check "//h2[contains(text(), 'All Products')]" Object by "xPath"
    #Arama alanına aranılacak kelime yazılıp ara butonuna tıklanır.
    Given Send "tshirt" text to "//input[@id='search_product']" Object by "xPath"
    When Click "//button[@id='submit_search']" Object by "xPath"
    # Listelenen ürünlerin hepsinin belirtilen metni içerdiği kontrol edilir.
    When Check "//div[@class='productinfo text-center']/p" elemets by "xPath" for "shirt" text
    #Ekranın en altına kaydırılır.
    Given Scroll bottom of the page
    #Listelenen ürünlerden verilen sıradaki ürüne tıklanır.
    When Click "//a[text()='View Product']" Object with "5" index by "xPath"
    # Ürün detay ekranında olunduğu kontrol edilir.
    When Check, is URL True "https://automationexercise.com/product_details"
    # Ürün adedi alanındaki değer silinip yerine belirtilen değer girilir.
    Given Clean and Send "2" text to "//input[@id='quantity']" Object by "xPath"
    # Ürün adedi alanında belirtilen adedde ürün olduğu kontrol edilir.
    When Check "//input[@id='quantity']" elemet by "xPath" for "2" value
    # Ürün sepete eklenir ve ekleme işlemi sonrası ürün eklendi pop-up ının açıldığı kontrol edilir.
    When Click "//button[@class='btn btn-default cart']" Object by "xPath"
    When Check "//h4[contains(text(), 'Added!')]" Object by "xPath"
    When Check "//p[contains(text(), 'Your product has been added to cart.')]" Object by "xPath"
    #Alışverişe devam et butonuna tıklanıp pop-up ın kapatılır.
    When Click "//button[contains(text(), 'Continue Shopping')]" Object by "xPath"
    #Sepet butonuna tıklanır.
    When Click "//a[contains(text(), 'Cart')]" Object by "xPath"
    #Önceki sayfadaki elementlerin artık listelenmediği görülür.
    When Check does not see "//h4[contains(text(), 'Added!')]" Object by "xPath"
    When Check does not see "//p[contains(text(), 'Your product has been added to cart.')]" Object by "xPath"
    #Sepet ekranında olunduğu kontrol edilir.
    When Check "//a[contains(text(), 'Proceed To Checkout')]" Object by "xPath"
    When Check "//tbody/tr" Object by "xPath"
    #Sepetteki ürünün adedinin istenilen adette olduğu kontrol edilir.
    When Check "//td[@class='cart_quantity']/button" elemet by "xPath" for "2" text
    #Ürünü kaldır butonuna tıklanır.
    When Click "//td[@class='cart_delete']/a" Object by "xPath"
    # Belirtilen saniye kadar bekle
    When Wait for "1" seconds
    # Ürünün sepetten kaldırıldığı görülür.
    When Check does not see "//tbody/tr" Object by "xPath"
    When Check does not see "//td[@class='cart_quantity']/button" Object by "xPath"
    #Sepetin boş olduğu görülür
    When Check "//b[contains(text(), 'Cart is empty!')]" Object by "xPath"
    # Sol üstteki logoya tıklanılır.
    When Click "//div[@class='logo pull-left']" Object by "xPath"
    # Sepet ekranında olunmadığı, ana sayfada olunduğu kontrol edilir.
    When Check does not see "//b[contains(text(), 'Cart is empty!')]" Object by "xPath"
    When Check "//div[@id='slider-carousel']" Object by "xPath"
    # Senaryo sonlandırılır.
    Given Finish the scenario


















