---
title: Blank or missing map tiles
description: Learn why you may be seeing blank or missing tiles.
topics:
- data
- map design
- web apps
prependJs:
    - "import UserAccessToken from '../../components/user-access-token';"
contentType: troubleshooting
---

Maps can fail to load for a variety of reasons related to your Mapbox account, your code, the browser you are using, the network you are on, or your computer. This guide will walk you through how to troubleshoot some common reasons maps fail to load.

## Your style ID or tileset ID is invalid

If you are using a Mapbox Studio style, check to make sure the [style URL](/help/glossary/style-url) you are using contains a valid style ID. If you are using a Classic style, make sure the [tileset ID](/help/glossary/tileset-id) is valid.

### Style ID

You can test the style ID by finding the [style URL](/help/glossary/style-url) you've added to your code, copying the string after the last `/`, and navigating to the following URL in your web browser (be sure to replace `username` with your own and use the string you copied from your style URL to replace the `style_id`):

```
https://api.mapbox.com/styles/v1/{username}/{style_id}?access_token={{ <UserAccessToken /> }}
```

If a JSON object is not returned, your style ID is invalid. You can find valid style URLs on your [Styles page](https://studio.mapbox.com/styles). You may also use any of the [Mapbox styles](https://docs.mapbox.com/api/maps/#styles).

### Tileset ID

You can test the tileset ID for both tilesets and Classic styles by finding the tileset ID you've added to your code and navigating to the following URL in your web browser (be sure to replace the `{tileset_id}` with your own):

```
https://api.mapbox.com/v4/{tileset_id}/page.html?access_token={{ <UserAccessToken /> }}
```

If this page doesn't load, your tileset ID is invalid. You can find valid tileset IDs on your [Tilesets page](https://studio.mapbox.com/tilesets). If you have any Mapbox Studio Classic projects or styles, you can find their IDs on your [Classic page](https://studio.mapbox.com/classic/).

## Your access token is invalid

You can test your access token by navigating to the following URL in your web browser, making sure that you've replaced `{access_token}` with the access token used in your code:

```
https://api.mapbox.com/v4/mapbox.satellite/page.html?access_token={{ <UserAccessToken /> }}
```

If this page doesn't load, your access token is faulty. Head to your [Access tokens page](https://account.mapbox.com/access-tokens), generate a new access token, and try again.

## Your invoice is unpaid

If you [exceed the API requests included in the free tier](https://www.mapbox.com/pricing/) and do not have a valid payment method for your account, your account will be disabled and your maps will no longer be displayed. After the first failed payment, you will have a brief grace period to visit your [Account settings page](https://account.mapbox.com/settings#billing) and add or update your payment information before your account is disabled.


If your account is disabled, you can reactivate it following these steps:

- Log in to your Mapbox account at [mapbox.com/account](https://account.mapbox.com).
- After logging in, choose a plan from the prompt that is displayed.
- After choosing a plan, update the payment information on your [Account settings page](https://account.mapbox.com/settings#billing).
- [Contact support](https://support.mapbox.com/hc/en-us/requests/new?ticket_form_id=360000279191) so we can run your outstanding invoice.

Your tiles will be restored shortly after you have reactivated your account.

<!--copyeditor ignore hidden-->

## Your map is hidden

If you're hiding your map initially with CSS rules like `display:none`, then showing it dynamically with JavaScript, it may have some problems appearing and sizing correctly.

The map can't determine its own size when it's hidden from the page, since it doesn't have a size in the browser's calculation.

To detect and resize your map with Mapbox GL JS, you can call [`map.resize()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#resize). If you're using Mapbox.js, you can call the [`map.invalidateSize()`](https://www.mapbox.com/mapbox.js/api/v3.1.1/l-map-class/#map-set-methods) method.

### Mapbox GL JS

When working with Mapbox GL JS, call `map.resize()` on the map object after its containing element is resized or shown:

```js
// your code that shows the map div
$('#map-div').show();

// detect the map's new width and height and resize it
map.resize();
```

Read more about [resize](https://docs.mapbox.com/mapbox-gl-js/api/#map#resize) in the documentation.

### Mapbox.js

When working with Mapbox.js, call `map.invalidateSize()` after showing the map:

```js
// your code that shows the map div
$('#map-div').show();

// invalidate the size of your map
map.invalidateSize();
```

Read more about invalidateSize in the [mapbox.js documentation](https://docs.mapbox.com/mapbox.js/).

## WebGL is not supported

Mapbox GL JS maps (including the Mapbox Studio style editor and dataset editor) can fail to display because of issues with your browser, your network, your computer, or some combination of all three. WebGL compatibility can be tricky to troubleshoot and, but here are some general guidelines and resources:

- **Is WebGL supported and enabled in your current browser?** Mapbox GL JS and Mapbox Studio are compatible with most modern browsers, but require that [WebGL is supported and enabled](https://caniuse.com/#search=webgl).
- **Are you using a browser that supports the specific Mapbox product you are trying to use?** Read more about browser support by product in our [Browser support guide](/help/troubleshooting/mapbox-browser-support).
- **Does the device you are using support WebGL?** You will need to refer to the technical specifications for your specific device.
- **Are you trying to access Mapbox products from behind a firewall?** If you're interacting with the Mapbox REST APIs and having trouble getting a response, you can try white-listing the domain `api.mapbox.com`.
