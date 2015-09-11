var request = require('request'),
    config = require('config');

    config.opsgenie.api.key = process.env.OPSGENIE_API_KEY || config.opsgenie.api.key;

module.exports = {

  trigger: function(mute) {

    var operation = mute ? 'enable' : 'disable',
        muted = mute ? 'muted': 'unmuted';

    var req = {
      method: "POST",
      url: 'https://api.opsgenie.com/v1/json/alert/policy/' + operation,
      body: {
        apiKey: config.opsgenie.api.key,
        name: config.opsgenie.api.policy
      },
      json: true
    }

    if (!config.enabled) {
      console.warn('Silencio is disabled for environment', process.env.NODE_ENV);
      process.exit(0);
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
