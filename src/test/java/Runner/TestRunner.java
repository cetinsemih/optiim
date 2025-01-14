package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/java/Features"},         // Feature dosyalarının doğru yolu
        glue = {"Steps", "Base"},                      // Paketlerin tam ismini kontrol edin
        tags = "@Before,@After,@Complated",            // Kullanılan etiketler
        plugin = {
                "pretty",
                "json:target/cucumber-reports/Cucumber.json",
                "junit:target/cucumber-reports/Cucumber.xml",
                "html:target/cucumber-reports"
        },
        monochrome = true                         // Konsol çıktısı okunaklı
)
public class TestRunner extends AbstractTestNGCucumberTests {
}
