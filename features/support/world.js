const wd = require('webdriverio');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const SauceLabs = require('saucelabs');

// Setup assertions
chai.use(chaiAsPromised);
chai.should();

module.exports = function() {

  // Setup remote browser that wil be launched in saucelabs
  global.client = wd.remote({
    desiredCapabilities: {
      browserName: process.env.browserName,
      platform: process.env.platform,
      version: process.env.version,
      name: process.env.name
    },
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    host: 'ondemand.saucelabs.com',
    port: 80,
    logLevel: 'silent'
  });

  // Setup promises
  chaiAsPromised.transferPromiseness = global.client.transferPromiseness;

  // Cucumber World Object
  this.World = function World() {

    // Initiliaze webdriver session
    global.client.addCommand('sauceJobStatus', function(status, callback) {
      const sessionId = client.requestHandler.sessionID;
      var sauceAccount = new SauceLabs({
        username: process.env.SAUCE_USERNAME,
        password: process.env.SAUCE_ACCESS_KEY
      });
      sauceAccount.updateJob(sessionId, status, callback);
    }, true);

    this.client = global.client;

    return this;
  };
};
