---
title: Map styles
description: Learn what map styles are.
order: 2
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import YouAreHere from '../../components/illustrations/you-are-here';"
  - "import ChevronousText from '@mapbox/mr-ui/chevronous-text';"
  - "import AppropriateImage from '../../components/appropriate-image';"
contentType: guide
---

<p className="txt-l">Use the Mapbox Studio style editor to design a map to your exact specifications.</p>

{{
  <YouAreHere
    activeItems={["Template style", "Custom style", "Add data to style", "Style data"]}
  />
}}

## What is a style?

A **style** is a JSON document that conforms to the [Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec). The style specification is designed especially for [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js) (browser) and the Mapbox mobile SDKs (mobile) to read and understand so your map can be rendered on the page. The style controls almost everything about the map.

The [Mapbox Styles API](https://www.mapbox.com/api-documentation/maps/#styles) powers your ability to change the fonts, colors, and icons on a map style through the visual interface of Mapbox Studio. The Mapbox Styles API is an integral part of our cartography software and is used across several Mapbox tools.

### The style editor

The **Mapbox Studio style editor** is a visual interface for creating styles. Each layer you add to the style in the Mapbox Studio style editor is added to this JSON object via the Styles API when you save, and is then passed to the browser or device when the map is requested. Once created, you can keep your style hosted with Mapbox to serve to your map or you can download the JSON object as a document.

{{<a href="/studio-manual/reference/styles/" className="txt-bold">
  <ChevronousText text="Read more about the style editor" />
</a>}}


### Cartogram

You can also use **Cartogram**, a drag-and-drop tool, to create a custom map in seconds. Upload a picture, select the colors you want, and get a map that fits your brand and style. This new map is ready to be used in your website or mobile application, or you can edit it in Mapbox Studio.

{{<a href="https://apps.mapbox.com/cartogram/" className="txt-bold">
  <ChevronousText text="Try cartogram" />
</a>}}

## Template styles

There are several Mapbox-designed map styles that can either be used directly in your web or mobile application or be used as a starting point for creating a new custom style in Mapbox Studio. To explore available styles click **New style** on your [Styles page](https://studio.mapbox.com/styles/).

{{
  <AppropriateImage
    imageId="overview-map-design-template-styles"
    alt="a preview of all template map styles"
  />
}}

### Monochrome

When you choose **Monochrome**, you can choose between five preset monochrome options or use the color generator to create a completely new monochrome style based on a custom color you input.

{{
  <AppropriateImage
    imageId="overview-map-design-monochrome"
    alt="a preview of monochrome template style with color picker"
  />
}}

### Examples

The [**Examples page**](/studio-manual/examples/) contains a collection of style examples that highlight specific features like adding 3D buildings and hillshades. You can browse examples and add the styles directly to your account to get started.
