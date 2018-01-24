let webdriver = require('selenium-webdriver');
let test = require('selenium-webdriver/testing');
let assert = require('assert');

let driver = null;

test.describe('webdriverjs test', function() {
    this.timeout(5000);
    test.before((done) => {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        done();
    });

    test.it('Login Should exist', (done) => {

        driver.get('localhost:3002/login');
        driver.getTitle().then((title) => {
            assert.equal(title, 'React App');
            done();
        });
    });

});
