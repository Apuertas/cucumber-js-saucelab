module.exports = function () {

  this.Given(/^I open Google$/, function(callback) {
    this.client
      .url('https://www.google.com/')
      .call(callback);
  });

};
