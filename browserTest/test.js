var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

test.describe('webdriverjs test', function() {
    test.before(function(done) {
        this.driver = new webdriver.Builder().forBrowser('chrome').build();
        done();
    });

    test.it('should go to Google', function(done) {
        this.driver.get('https://www.google.com');
        this.driver.getTitle().then(function(title) {
            require('assert').equal(title, 'Google');
            done();
        });
    });
});
