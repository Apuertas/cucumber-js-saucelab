## cucumber-js-saucelab

[Cucumber-JS](https://github.com/cucumber/cucumber-js) Integration with SauceLab.

<img src = "https://saucelabs.com/content/images/logo@3x.png" height = "100">
<img src = "https://cucumber.io/images/cucumber-logo.svg" height = "100">

### Environment Setup

1. Clone the repo
2. Install dependencies `npm install`
3. Update `package.json` file with your SourceLab username and access key.

### Running Tests

* Single Feature
    ```
    node ./node_modules/cucumber/bin/cucumber.js features/single.feature
    ```
[Sauce Labs Dashboard](https://saucelabs.com/beta/dashboard/tests)

### Advice/Troubleshooting

1. There may be additional latency when using a remote webdriver to run tests on Sauce Labs. Timeouts or Waits may need to be increased.
    * [Selenium tips regarding explicit waits](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Explicit+Waits)

### Resources
##### [Sauce Labs Documentation](https://wiki.saucelabs.com/)

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)

##### [WebdriverIO Documentation](http://webdriver.io/api.html)

##### [Node Documentation](https://nodejs.org/en/docs/)

##### [CucumberJS Documentation](https://github.com/cucumber/cucumber-js)

##### [Stack Overflow](http://stackoverflow.com/)
* A great resource to search for issues not explicitly covered by documentation
