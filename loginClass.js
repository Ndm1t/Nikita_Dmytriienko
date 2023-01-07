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
        await Test.driver.manage().setTimeouts( { implicit: 2000 } )
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
        await Test.driver.wait(until.elementLocated(By.xpath('//a[@class="oxd-main-menu-item" and .//span[text()="Admin"]]'))).click()
        
        await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/span')).click();
        
        await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/ul/li[2]')).click();
        
        await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[1]/div/button')).click();
        
        await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/input')).sendKeys(RandomName);
        
        await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[1]/div/form/div[2]/button[2]')).click();

        return 'success'
    }

    async addAssignedCurency()  {
        if (!Test.driver) return;
        await Test.driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div/div[1]/div/button'))).click()
        
        await Test.driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]')).click();
        
        await Test.driver.findElement(By.xpath(`//div[@role="option" and .//span[text()="AED - Utd. Arab Emir. Dirham"]]`)).click();
        
        await Test.driver.findElement(By.xpath(`//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[2]/div/div[1]/div/div[2]/input`)).sendKeys(1000);
        
        await Test.driver.findElement(By.xpath(`//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[2]/div/div[2]/div/div[2]/input`)).sendKeys(2000);
        
        await Test.driver.findElement(By.xpath(`//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[3]/button[2]`)).click();

        


        return 'success'
    }

    async checkCurencyExistance() {
        return await Test.driver.wait(until.elementLocated(By.className(`oxd-table-row oxd-table-row--with-border`))) ? "success" : null
    }


    async deleteCurency() {
        await Test.driver.findElement(By.className(`oxd-icon-button oxd-table-cell-action-space`)).click()
        await Test.driver.findElement(By.className(`oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin`)).click()
        

        return "success"

    }

    async clickCancelButton() {
        await Test.driver.wait(until.elementLocated(By.className("oxd-button oxd-button--medium oxd-button--ghost"))).click()

        return "success"
    }


    async checkAndDeletePayGradeExistance() {
        await Test.driver.wait(until.elementLocated(By.xpath(`//div[@class="oxd-table-card"]/div/div[2]/div[text()="${RandomName}"]/ancestor :: div[@class="oxd-table-card"]/div/div[4]/div/button`))).click()

        await Test.driver.wait(until.elementLocated(By.className("oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"))).click();

        return "success"
    }

}