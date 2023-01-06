import { assert } from 'console';
import {Builder, By, until} from 'selenium-webdriver';




const TIMEOUT = 10000
const RandomName = Math.random().toString(36).slice(2, 7);







export default class Test {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static newPassword = "Test_123456"
    static driver = new Builder().forBrowser('chrome').build()
     

    

    static async login() {
        await Test.driver.get("https://opensource-demo.orangehrmlive.com/");

        let accessData = await Test.driver.findElements(By.css('.oxd-sheet .oxd-text--p'));
        let username = (await accessData[0].getText()).split(' ').pop() || "";
        let password = (await accessData[1].getText()).split(' ').pop() || "";

        await Test.driver.findElement(By.css('[placeholder="Username"]')).sendKeys(username);
        await Test.driver.findElement(By.css('[placeholder="Password"]')).sendKeys(password);

        await Test.driver.findElement(By.css('button[type="submit"]')).click();
        

        return 'success';
    }


    async addPayGrade() {
        if (!Test.driver) return;
        await Test.driver.wait(until.elementLocated(By.xpath('//a[@class="oxd-main-menu-item" and .//span[text()="Admin"]]'))).click()
        
        await Test.driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/span'))).click();
        
        await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/ul/li[2]')).click();
        
        await Test.driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[1]/div/button'))).click();
        
        await Test.driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/input'))).sendKeys(RandomName);
        
        await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[1]/div/form/div[2]/button[2]')).click();

        return 'success'
    }

    async addAssignedCurency()  {
        if (!Test.driver) return;
        await Test.driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div/div[1]/div/button'))).click()
        
        await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]')).click();
        
        await Test.driver.wait(until.elementLocated(By.xpath(`//div[@role="option" and .//span[text()="AED - Utd. Arab Emir. Dirham"]]`))).click();
        
        await Test.driver.findElement(By.xpath(`//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[2]/div/div[1]/div/div[2]/input`)).sendKeys(1000);
        
        await Test.driver.findElement(By.xpath(`//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[2]/div/div[2]/div/div[2]/input`)).sendKeys(2000);
        
        await Test.driver.findElement(By.xpath(`//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[3]/button[2]`)).click();
        


        return 'success'
    }

    async checkCurencyExistance() {
        let result = await Test.driver.wait(until.elementLocated(By.xpath(`/html/body/div/div[1]/div[2]/div[2]/div[2]/div/div[3]/div/div[2]/div/div`))) ? 'success' : null

        return result
    }


    // async deleteCurency() {
    //     await Test.driver.wait(until.elementLocated(By.xpath(`//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div/div[3]/div/div[2]/div/div/div[5]/div/button[1]`))).click()

    //     return "success"

    // }

    // async addPerson() {
    //     if (!Test.driver) return;
    //     await Test.driver.findElement(By.xpath('//a[@class="oxd-main-menu-item" and .//span[text()="Admin"]]')).click();
    //     await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/span')).click();
    //     let displayLayout = await Test.driver.findElement(By.css('.orangehrm-full-width-grid')).getCssValue('display');
    //     if (displayLayout == "grid") {
    //         await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="User Role"]]//div[contains(@class, "oxd-select-text")]')).click();
    //         await Test.driver.findElement(By.xpath('//div[@role="option" and .//span[text()="ESS"]]')).click();

    //         await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Status"]]//div[contains(@class, "oxd-select-text")]')).click();
    //         await Test.driver.findElement(By.xpath('//div[@role="option" and .//span[text()="Enabled"]]')).click();

    //         await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Employee Name"]]//input'))
    //             .sendKeys(Test.employeeName);

    //         await Test.driver.findElement(By.xpath(`//div[@role="option" and .//span[text()="${Test.employeeName}"]]`)).click();

    //         console.log(Test.employeeName)

    //         await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Username"]]//input'))
    //             .sendKeys(this.username);
    //         await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Password"]]//input'))
    //             .sendKeys(Test.newPassword);
    //         await Test.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Confirm Password"]]//input'))
    //             .sendKeys(Test.newPassword);

    //         ;
    //         await Test.driver.findElement(By.xpath('//button[contains(., "Save")]')).click();
    //         await Test.driver.sleep(5000)

    //         return 'success';
    //     }
    // }
    // async removePerson() {
    //     let personCard = await Test.driver.findElement(By.xpath(`.//div[contains(@class, "oxd-table-card") and .//div[text()="${this.username}"] and .//div[text()="ESS"]]`));
    //     let removeButton = await personCard.findElement(By.xpath('.//*[contains(@class, "oxd-icon-button") and .//*[contains(@class, "bi-trash")]]'));
    //     await removeButton.click();
    //     let confirmButton = await personCard.findElement(By.xpath('//button[contains(., "Yes")]'));
    //     await confirmButton.click();

    //     return 'success';
    // }
}