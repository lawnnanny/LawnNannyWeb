let webdriver = require('selenium-webdriver');
let test = require('selenium-webdriver/testing');
let assert = require('assert');

let driver = new webdriver.Builder().forBrowser('chrome').build();

test.it('Login Should Exist', (done) => {
    driver.get('localhost:3002/login');
    driver.getTitle().then((title) => {
        assert.equal(title, 'Terra');
        done();
    });
}).timeout(30000);
