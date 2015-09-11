var request = require('request'),
    Hoek = require('hoek');

var apiKey = process.env.OPSGENIE_API_KEY,
    apiUrl = process.env.OPSGENIE_API_URL || 'https://api.opsgenie.com',
    policy = process.env.OPSGENIE_POLICY;

    Hoek.assert(apiKey, 'Opsgenie api key (env OPSGENIE_API_KEY) is required');
    Hoek.assert(policy, 'Opsgenie policy name (env OPSGENIE_POLICY) is required');

module.exports = {

  trigger: function(mute) {

    var operation = mute ? 'enable' : 'disable',
        muted = mute ? 'muted': 'unmuted';

    var req = {
      method: "POST",
      url: apiUrl + '/v1/json/alert/policy/' + operation,
      body: {
        apiKey: apiKey,
        name: policy
      },
      json: true
    }

    request(req, function(error, response, resp) {

      if (!error && response.statusCode == 200 && resp.status === "success") {
        console.log('Alerting', muted, 'successfully');
        process.exit(0);
      }

      console.error('Cannot', operation, 'alerting.', error || resp);
      process.exit(1);

    });

  }

};
