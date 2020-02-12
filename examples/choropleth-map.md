---
title: Create a choropleth map
description: Add a fill layer and use expressions to style a choropleth map.
topic: Data visualization
image: thumbnail-choropleth
prependJs:
  - "import StudioExample from '../../components/studio-example';"
  - "import GLWrapper from '@mapbox/dr-ui/gl-wrapper';"
contentType: example
language:
- No code
---

{{
<GLWrapper>
  <StudioExample
    username="mapbox"
    styleId="cjk8ulzsi7psd2tqp6lp69yx5"
    mapPosition={{
      zoomLevel: "3.77",
      centerLatitude: "39.859114",
      centerLongitude: "-79.762491",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Expression to style a choropleth map:",
      layerName: "state-data",
      propertyType: "paint",
      propertyName: "fill-color"
    }}
    specs={[
      <p>This is a modified version of the <strong>Basic template</strong> style.</p>,
      <p>A new <code>fill</code> layer called <code>state-data</code> has been added.</p>,
      <p>The source data for the <code>state-data</code> layer comes from a custom tileset that has been uploaded to Mapbox Studio.</p>,
      <p>States are styled using property expressions to <strong>style features across a data range</strong>.</p>
    ]}
  />
</GLWrapper>
}}

## About this style

- **Tileset from custom data**: The data that is used as the `source` for the `state-data` layer comes from a custom tileset that was created by uploading a GeoJSON file to Mapbox Studio. This data is borrowed from [the Leaflet choropleth tutorial](http://leafletjs.com/examples/choropleth/) and contains data on population density across US states. The tileset itself contains the geometry for each state and two properties: `name` (a string) and `density` (a number). Read more about [uploading data to Mapbox Studio in the Overview section](/studio-manual/overview/geospatial-data/).
- **Styling with expressions**: The `state-data` layer is styled using property expressions. In this case, property expressions are being used on the _Color_ property to style features across a data range. The color of each feature will be determined based on its `density`.

## Related resources

**Looking for more guidance?** Read our [Make a choropleth map, part 1: create a style](https://www.mapbox.com/help/choropleth-studio-gl-pt-1/) tutorial.
