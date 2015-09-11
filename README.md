Silencio
========
Enables and disables selected OpsGenie policies.

[![Build Status](https://travis-ci.org/energizedwork/silencio.svg?branch=master)](https://travis-ci.org/energizedwork/silencio)

Installing
==========
```
npm install -g silencio
```

Usage
=====
Simply run ```silencio``` for usage.

```
silencio --help
silencio --mute
silencio --unmute
```

Configuration
=============
Configuration is set via environment variables.

Variable              | Required?  | Description
--------------------- | ---------- | ------------------------------------------
_OPSGENIE_API_KEY_    | yes        | OpsGenie API key
_OPSGENIE_POLICY_     | yes        | OpsGenie Alerting Policy to enable/disable
_OPSGENIE_API_URL_    | no         | OpsGenie API URL override
