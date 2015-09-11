var Code = require('code'),
    nock = require('nock');

var expect = Code.expect;

describe('Silencio', function() {

    var apiUrl = process.env.OPSGENIE_API_URL = 'http://example.net',
        policy = process.env.OPSGENIE_POLICY = 'my_policy',
        apiKey = process.env.OPSGENIE_API_KEY = 'abcde12345';

    var silencio = require('../app');

    function expectApiCall(enable, done) {

      nock(apiUrl)
      .post('/v1/json/alert/policy/' + (enable ? 'enable' : 'disable'), {
        apiKey: apiKey,
        name: policy
      })
      .reply(200, function(uri, requestBody) {
        done();
      });

    }

    it('should make a call to silence alerting', function (done) {

      // expect:
      expectApiCall(true, done);

      // when:
      silencio.trigger(true);

    });

    it('should make a call to re-enable alerting', function (done) {

      // expect:
      expectApiCall(false, done);

      // when:
      silencio.trigger(false);

    });

});
