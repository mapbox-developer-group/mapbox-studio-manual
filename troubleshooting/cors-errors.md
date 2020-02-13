---
title: CORS errors
description: Learn how to address CORS errors.
topics:
- web apps
contentType: troubleshooting
---

CORS (cross origin request sharing) errors can be identified by checking for error messages in the console:

    XMLHttpRequest cannot load file:///mapbox.js/assets/data/states.geojson. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.

![CORS error](/help/img/screenshots/cors-error.png)

When you receive a CORS (cross origin request sharing) error, it means that the file you have opened is attempting to load external data, either from a relative or absolute URL:

```js
var statesLayer = L.mapbox.featureLayer()
  // Grab some GeoJSON data from a relative URL
  .loadURL('https://www.mapbox.com/mapbox.js/assets/data/states.geojson')
  .on('click', handleClick)
  .on('ready', resetStyles)
  .addTo(map);
```

The code above, copied from a [Mapbox.js](https://www.mapbox.com/mapbox.js/) example, points to a GeoJSON file in a different directory. Your browser interprets this as a [cross origin HTTP request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS). As with any AJAX request, this technique is subject to the [Same Origin Policy](http://en.wikipedia.org/wiki/Same_origin_policy). To avoid this error, you can either put the file on the same domain (or, for local testing, in the same directory) as the JavaScript, or open the file via a server delivering that supports CORS. [Python's SimpleHTTPServer](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/) supports CORS and is relatively straightforward to set up.
