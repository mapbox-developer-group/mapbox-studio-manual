---
title: Style a heatmap layer
description: Add and style a heatmap layer.
topic: Data visualization
image: thumbnail-add-a-heatmap-layer
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
    styleId="cjka4x1y61l0j2rktysvr9gcb"
    mapPosition={{
      zoomLevel: "1.71",
      centerLatitude: "34.494200",
      centerLongitude: "-17.346053",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Heatmap color expression:",
      layerName: "meteorites",
      propertyType: "paint",
      propertyName: "heatmap-color"
    }}
    specs={[
      <p>This is a modified version of the <strong>Basic template</strong> style.</p>,
      <p>A new <code>heatmap</code> layer called <code>meteorites</code> has been added.</p>,
      <p>The source data for the <code>meteorites</code> layer comes from a custom tileset that has been uploaded to Mapbox Studio.</p>
    ]}
  />
</GLWrapper>
}}

## About this style

- **Tileset from custom data**: The data that is used as the `source` for the `meteorites` layer comes from a custom tileset that was created by uploading a CSV file to Mapbox Studio. The original data comes from [NASA's open data portal](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh). The tileset itself contains the locations of various meteorite strikes and several properties including `mass (g)` (a number). Read more about [uploading data to Mapbox Studio in the Overview section](/studio-manual/overview/geospatial-data/#types-of-uploads).
- **Styling heatmap layers**: Open the `meteorites` layer to see how the `color`, `opacity`, `radius`, `weight`, and `intensity` style properties have been specified to style the heatmap layer.

## Related resources

**Looking for more guidance?** Read our [Make a heatmap with Mapbox Studio](https://www.mapbox.com/help/studio-heatmap-tutorial/) tutorial.
