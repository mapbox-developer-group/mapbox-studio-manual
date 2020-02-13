---
title: Browser support
description: Learn which browsers support each Mapbox product.
topics:
- data
- map design
- web apps
contentType: troubleshooting
---

The following is a list of browsers that are compatible with Mapbox tools.

## Mapbox.com

Mapbox.com, including [docs.mapbox.com](https://docs.mapbox.com/), is compatible with all modern browsers and Internet Explorer 11.

## Mapbox Studio

[Mapbox Studio](https://studio.mapbox.com/) is supported in browsers that support WebGL, a method of generating dynamic 3D graphics using JavaScript, accelerated through hardware. Mapbox Studio is compatible with all modern browsers, specifically:

* [Safari](http://www.apple.com/safari/) 9 and above.
* [Chrome](http://www.google.com/chrome/) latest.
* [Firefox](http://www.mozilla.org/en-US/firefox/new/) latest.
* [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) 13 (with the most recent Windows 10 update).

The Mapbox Studio style editor and dataset editor are not compatible with Internet Explorer. But you can access all other pages and features located from in the [Mapbox Studio dashboard](https://studio.mapbox.com/) using Internet Explorer 10+. This includes, but is not limited to, your account information, statistics, Mapbox Studio Classic styles, and Mapbox Editor projects.

We cannot guarantee that Mapbox Studio will work with browsers that only support WebGL experimentally.

For further information, see [caniuse.com](https://caniuse.com/#search=gl) to check for the most recent supported browsers or see [get.webgl.org](https://get.webgl.org/) to check if your browser supports WebGL.

## Mapbox GL JS

Like Mapbox Studio, [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) is supported in most modern browsers. The same requirements for Mapbox Studio apply to Mapbox GL JS.

In general, recent versions of Internet Explorer 11 and Microsoft Edge are compatible with Mapbox GL JS. But because certain versions of IE11 and Edge don't support necessary features for WebGL or offer fixes for related browser bugs, and because the underlying hardware must support WebGL, we can't guarantee support for all versions of either browser.

To test your clients' support for your applications, [see our example for checking browser compatibility](https://docs.mapbox.com/mapbox-gl-js/example/check-for-support/).

## Mapbox.js

[Mapbox.js](https://docs.mapbox.com/mapbox.js/) is supported in most modern browsers including Internet Explorer 8+.

Support for Internet Explorer versions does not include those versions in previous-version compatibility modes, such as Internet Explorer 8 in IE7 Compatibility Mode.
