import 'jasmine';

// importing custom class for testing
import Test from '../loginClass.js';

//to set jasmine default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000;

// Test scenarios
describe("Creating/deleting pay grade and currency", function () {

    describe("Selenium test case for login page", function () {
        it("takes username and password for logging in", async function () {

            expect(await Test.login()).toBe('success');

        });
    });

    // user instance with name and password
    const user = new Test("Nikita", "Test_123");


    describe("Create paygrade scenario", ()=>{
        it("Press add button, fills in the data and tries to add the paygrade", async ()=>{
            expect(await user.addPayGrade()).toBe('success')
        } )
    })


    describe("Create curency scenario", ()=>{
        it("Press add button, fills in the data and tries to add the curency", async ()=>{
            expect(await user.addAssignedCurency()).toBe('success')
        } )
    })


    // describe("Checking that paygrade has been created", ()=>{
    //     it("Looks for the responsive card in a currency list", async ()=>{
    //         expect(await user.checkCurencyExistance()).toBe('success')
    //     } )
    // })

    // describe("Deleting that paygrade has been created", ()=>{
    //     it("Deletes the responsive card in a currency list", async ()=>{
    //         expect(await user.deleteCurency()).toBe('success')
    //     } )
    // })

    // describe("Create user scenario", function () {
    //     it("Presses add button, fills in the data and tries to add the person", async function () {

    //         expect(await user.addPerson()).toBe('success');
    //     });
    // });

    // describe("Remove user scenario", function () {
    //     it("Presses add button, fills in the data and tries to add the person", async function () {

    //         expect(await user.removePerson()).toBe('success');
    //     });
    // });

})