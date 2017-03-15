module.exports = function () {

  this.Given(/^I open side-panel$/, function(callback) {
    this.client
      .url('http://side-panel.codeexperiments.com/search/flights')
      .call(callback);
  });

  this.Then(/^Set "(.*)" to "(.*)"$/, function(name, inputText, callback) {
    this.client
      .setValue('input[name=' + name + ']', inputText)
      .call(callback);
  });

  this.Then(/^Click at all X$/, function(callback) {
    this.client
      .click(".SearchFlights__Flight__removeWrapper")
      .call(callback);
  });

  this.Then(/^I click the send button$/, function(callback) {
    this.client
      .click(".SearchFlights__searchActions.Button__root.Button__primary.Button__medium")
      .call(callback);
  });

  this.Then(/^Selected flight is displayed and the "(.*)" "(.*)" appears$/, function(name, inputText, callback) {
    this.client
      .getValue('input[name=' + name + ']').should.eventually.be.equal(inputText)
      .call(callback);
  });

  this.Then(/^Invalid message is displayed in "(.*)" field$/, function(name, callback) {
    this.client
      .getValue('input[name=' + name + ']').should.eventually.be.equal('Invalid ' + name)
      .call(callback);
  });

};
