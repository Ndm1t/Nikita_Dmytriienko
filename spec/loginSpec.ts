import 'jasmine';

// importing custom class for testing
import { Test } from '../loginClass';

//to set jasmine default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

// Test scenarios
describe("Authorize, add, remove user test scenario", function () {

    describe("Selenium test case for login page", function () {
        it("takes username and password for logging in", async function () {

            expect(await Test.login()).toBe('success');

        });
    });

    // user instance with name and password
    const user = new Test("Nikita", "admin123");

    describe("Create user scenario", function () {
        it("Presses add button, fills in the data and tries to add the person", async function () {

            expect(await user.addPerson()).toBe('success');
        });
    });

    describe("Remove user scenario", function () {
        it("Presses add button, fills in the data and tries to add the person", async function () {

            expect(await user.removePerson()).toBe('success');
        });
    });

})