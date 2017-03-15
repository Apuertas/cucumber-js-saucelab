/*!
 * Cucumber Hooks
 */

module.exports = function () {

  this.Before(function (event, callback) {
    this.client
      .init()
      .call(callback);
  });

  /**
   * Cleanup after each feature
   *
   * @param {Function} event
   * @param {Function} callback
   */
  this.After(function(event, callback) {
    this.client
      .sauceJobStatus({
        passed: event.isSuccessful(),
        name: event.getName(),
        public: true
      }, callback)
      .end();
  });

};
