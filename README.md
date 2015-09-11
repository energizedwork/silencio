Silencio
========

Enables and disables selected OpsGenie policies.

Installing
==========

```
npm install -g silencio
```

Usage
=====
Simply run ```silencio``` for usage.

```
silencio --mute
silencio --mute
```

Configuration
=============
```NODE_ENV``` is used to read config variables, as ./config/<NODE_ENV>.json

```defaults.json``` is used by default.

```OPSGENIE_API_KEY``` environment variable can be set to override configured OPSGENIE API KEY
