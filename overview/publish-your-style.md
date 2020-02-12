---
title: Publish your style
description: Learn how to publish map styles made in Mapbox Studio.
order: 5
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import constants from '../../constants.json';"
  - "import YouAreHere from '../../components/illustrations/you-are-here';"
  - "import Note from '@mapbox/dr-ui/note';"
  - "import AppropriateImage from '../../components/appropriate-image';"
contentType: guide
---

<p className="txt-l">Once you've finished adding data and styling your map, the next step is to add it to a web or mobile application. This section covers everything you can do with your published style.</p>

{{
  <YouAreHere
    activeItems={["Publish"]}
  />
}}

## Draft vs. production styles

For each style you create in Mapbox Studio, there is both a **draft** and **production** style URL available:
- Use the **draft** style URL to quickly iterate and get feedback on your style without impacting map styles being used in applications already in production.
- Use the **production** style URL when your style is ready for end users in a production application.

When making edits to your style in the style editor, the updated style is saved as a draft in your account. The **draft style URL** will include all edits to your style up to that point. The **production style URL** will only include edits you have made before hitting the [**Publish**](#publish) button.

{{<Note title="Do not use draft styles in production applications" theme="warning">}}
Draft style URLs are meant for prototyping and iteration &mdash; they are not cached and are heavily rate limited. Using a draft style URL in a production application could result in degraded performance and blank maps for your end users due to rate limiting. As a result, **draft style URLs should not be used in production.**
{{</Note>}}

<!-- add toggle video -->

## Publish

Before using your style in a production application, you need to publish it inside the style editor. When making edits to your style in the style editor, the updated style is saved as a draft in your account. **Changes made in the style editor will not be reflected in the production version of your style until you explicitly publish it** using the [**Publish**](/studio-manual/reference/styles/#publish-style) button.

{{
  <AppropriateImage
    imageId="overview-publish-share-production"
    alt="publish modal"
  />
}}


## Share button

Inside the style editor, there is a **Share** button in the top toolbar. This button will open a modal with all the available options for sharing or using your style as either a draft or production-ready style in an application.

For both draft and production versions of your style, there are three options for using the style:

- **Share**: A URL that can be shared with anyone.
- **Develop**: Convenient access to the resources needed to use your style on various platforms.
- **Download**: Download a zipped folder with the style JSON and all necessary assets.

Read more about each option below.

{{
  <AppropriateImage
    imageId="overview-publish-share-draft"
    alt="screenshot of the share and use modal"
  />
}}

### Share URL

The **Share**  URL provides a staging address for your map style. It gives you a quick way to share your map with others to get feedback, collaborate on designs, or to show off your creative work. Click the clipboard button {{<Icon name='clipboard' inline={true} />}} to copy the share URL to your clipboard. Paste it into a browser window to see your style.

### Develop

Your **style URL** and **access token** are provided in the share modal so you can use your custom style in a web, mobile, or third party application. A [style URL](https://docs.mapbox.com/help/glossary/style-url/) is how you refer to your map style . Combined with your access token, it allows you to access and use your map with any of the [Mapbox products](https://docs.mapbox.com/).

#### Style URL

A complete style URL, for example `mapbox://styles/mapbox/streets-v{{constants.VERSION_STREETS_STYLE}}`, is comprised of three components:

- `mapbox://styles`: points to Mapbox's Styles API
- `/mapbox`: your Mapbox username
- `/streets-v{{constants.VERSION_STREETS_STYLE}}`: your style's unique ID

If you are using the draft version of your style, `/draft`  will also be appended to the end of the style URL.

{{<Note>}}
The `mapbox://styles` notation for Mapbox styles is an alias to the full Styles API URL: `https://api.mapbox.com/styles/v1/streets-v{constants.VERSION_STREETS_STYLE}`.
{{</Note>}}

#### Access token

Mapbox uses [**access tokens**](https://docs.mapbox.com/help/glossary/access-token) to associate your apps and tool usage with your account. Every account has a default public access token, but you can create new access tokens as well. You can find your access tokens on your [Account page](https://account.mapbox.com).

#### Platforms

Toggle to the platform that is relevant to your project for related resources.

##### Web

The **Web** option provides the resources necessary to initialize your map style on a webpage using Mapbox GL JS.

[Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js) is a JavaScript library for creating interactive maps with Mapbox styles. This API harnesses the power of GL-driven maps, including smooth zooming, map bearing and pitch, and vector data available for interaction and styling in the browser. You can use custom styles created in the Mapbox Studio style editor, or the default styles we provide, and programmatically add additional data including GeoJSON, images, or even [video](https://docs.mapbox.com/mapbox-gl-js/example/video-on-a-map/)!

For information on using a Mapbox Studio style with Mapbox.js or Leaflet, see the [Mapbox.js and Leaflet section](#mapboxjs-and-leaflet) below.

{{<Note title="Right-to-left support in Mapbox GL JS">}}
Mapbox Studio loads the [`mapbox-gl-rtl-text`](https://github.com/mapbox/mapbox-gl-rtl-text) plugin, which adds support for text in the Arabic and Hebrew languages, by default. This plugin is not bundled with Mapbox GL JS. It must be set using the [`setRTLTextPlugin`](https://docs.mapbox.com/mapbox-gl-js/api/#setrtltextplugin) method in Mapbox GL JS.
{{</Note>}}

##### iOS, Android, and Unity

The **iOS**, **Android**, and **Unity** options provide the resources necessary to use your map style with one of our mobile Maps SDKs.

##### Third party

The **Third party** options provide the resources necessary to use your custom map style with various third-party applications including ArcGIS Online, Tableau, CARTO, and Fulcrum.

Both Mapbox template styles and your custom styles designed in Mapbox Studio come with a **WMTS endpoint** that can be used to add your styles to desktop GIS applications. You can use the following endpoint with any of your custom styles:

```
https://api.mapbox.com/styles/v1/YOUR_USERNAME/YOUR_STYLE_ID/wmts?access_token=YOUR_ACCESS_TOKEN
```

This WMTS endpoint allows you to use this map in:

- **ArcMap**: Available in ArcGIS Desktop 10+. See our documentation on [adding Mapbox layers as WMTS in ArcMap](https://docs.mapbox.com/help/tutorials/mapbox-arcgis-qgis/#add-mapbox-maps-in-arcmap) to get started.
- **QGIS**: This feature is available in QGIS 2.0+. See our documentation on [adding Mapbox layers as WMTS in QGIS](https://docs.mapbox.com/help/tutorials/mapbox-arcgis-qgis/#add-mapbox-maps-in-qgis) to get started.

### Download

Download a zip file that contains all pieces of your style, including a JSON document adhering to the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/), the [sprite](https://docs.mapbox.com/help/glossary/sprite) containing all icons and images used in the style, and all fonts used in the style. This can be stored locally, altered in a text editor, uploaded to your account, or shared with other Mapbox Studio users.


## Mapbox.js and Leaflet

You can use Mapbox Studio styles with other web mapping libraries like Mapbox.js and Leaflet using the [Mapbox Static Tiles API](https://docs.mapbox.com/api/maps/#static-tiles) to generate raster tiles from your Mapbox Studio style.

### Mapbox.js

[Mapbox.js](https://docs.mapbox.com/mapbox.js) is our older JavaScript web mapping library that extends the popular [Leaflet.js](http://leafletjs.com) library. Mapbox.js can be used to create interactive maps using your Mapbox Studio styles as a basemap. _Note that using Mapbox.js does not provide all the features available with a Mapbox Studio style._

Mapbox.js {{constants.VERSION_MAPBOXJS}} and beyond support adding styles from Mapbox Studio, using the `styleLayer` method:

```js
L.mapbox.styleLayer('mapbox://styles/YOUR_USERNAME/YOUR_STYLE_ID').addTo(map);
```

See the [full example](https://docs.mapbox.com/mapbox.js/example/v1.0.0/stylelayer/) in the Mapbox.js documentation.


### Leaflet

[Leaflet](https://leafletjs.com/) is an open-source JavaScript library for mobile-friendly interactive maps. You can add a Mapbox Studio style to a Leaflet map using this endpoint with the [`L.TileLayer`](https://leafletjs.com/reference-1.3.2.html#tilelayer) class:

```
https://api.mapbox.com/styles/v1/YOUR_USERNAME/YOUR_STYLE_ID/tiles/256/{z}/{x}/{y}?access_token=YOUR_ACCESS_TOKEN
```


## Attribution and Terms of Service

Whether you're creating a custom style with Mapbox Studio or building a mobile app with the Android SDK, all Mapbox tools are governed by our [attribution requirements](https://docs.mapbox.com/help/how-mapbox-works/attribution/) and our [terms of service](https://www.mapbox.com/tos). For more information about either of these requirements, [contact Mapbox Support](https://support.mapbox.com).
