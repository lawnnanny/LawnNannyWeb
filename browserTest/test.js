let webdriver = require('selenium-webdriver');
let test = require('selenium-webdriver/testing');
let assert = require('assert');

let driver = null;

test.describe('webdriverjs test', () => {
    test.before((done) => {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        done();
    });

    test.it('Login Should Exist', (done) => {
        driver.get('localhost:3002/login');
        driver.getTitle().then((title) => {
            assert.equal(title, 'Terra');
            done();
        });
    });
}).timeout(5000);
