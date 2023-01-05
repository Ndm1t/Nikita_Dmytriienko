import {Builder, By, until, Key, logging} from 'selenium-webdriver';

export class Test {
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    static employeeName = "SWAUAAH  AATXG";
    static newPassword = "Test_123456"
    static driver = new Builder().forBrowser('chrome').build();

    static async login() {
        await Test.driver.get("https://opensource-demo.orangehrmlive.com/");
        await Test.driver.manage().setTimeouts({ implicit: 10000 });

        let accessData = await Test.driver.findElements(By.css('.oxd-sheet .oxd-text--p'));
        let username = (await accessData[0].getText()).split(' ').pop() || "";
        let password = (await accessData[1].getText()).split(' ').pop() || "";

        await Test.driver.findElement(By.css('[placeholder="Username"]')).sendKeys(username);
        await Test.driver.findElement(By.css('[placeholder="Password"]')).sendKeys(password);

        await Test.driver.findElement(By.css('button[type="submit"]')).click();

        return 'success';
    }

    async addPerson() {
        if (!Test.driver) return;
        await Test.driver.findElement(By.xpath('//a[@class="oxd-main-menu-item"]')).click();
        await Test.driver.findElement(By.xpath('//button[contains(., "Add")]')).click();
        let displayLayout = await Test.driver.findElement(By.css('.orangehrm-full-width-grid')).getCssValue('display');
        if (displayLayout == "grid") {
            await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="User Role"]]//div[contains(@class, "oxd-select-text")]')).click();
            await Test.driver.findElement(By.xpath('//div[@role="option" and .//span[text()="ESS"]]')).click();

            await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Status"]]//div[contains(@class, "oxd-select-text")]')).click();
            await Test.driver.findElement(By.xpath('//div[@role="option" and .//span[text()="Enabled"]]')).click();

            await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Employee Name"]]//input'))
                .sendKeys(Test.employeeName);

            await Test.driver.findElement(By.xpath(`//div[@role="option" and .//span[text()="${Test.employeeName}"]]`)).click();

            console.log(Test.employeeName)

            await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Username"]]//input'))
                .sendKeys(this.username);
            await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Password"]]//input'))
                .sendKeys(Test.newPassword);
            await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Confirm Password"]]//input'))
                .sendKeys(Test.newPassword);

            await Test.driver.sleep(1000);
            await Test.driver.findElement(By.xpath('//button[contains(., "Save")]')).click();
            await Test.driver.sleep(5000)

            return 'success';
        }
    }
    async removePerson() {
        let personCard = await Test.driver.findElement(By.xpath(`.//div[contains(@class, "oxd-table-card") and .//div[text()="${this.username}"] and .//div[text()="ESS"]]`));
        let removeButton = await personCard.findElement(By.xpath('.//*[contains(@class, "oxd-icon-button") and .//*[contains(@class, "bi-trash")]]'));
        await removeButton.click();
        let confirmButton = await personCard.findElement(By.xpath('//button[contains(., "Yes")]'));
        await confirmButton.click();

        return 'success';
    }
}