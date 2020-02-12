---
title: Add a hillshade layer
description: Add a raster-dem source as a hillshade layer for detailed slope and shading.
topic: Map design
image: thumbnail-hillshade
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
    styleId="cjk8t3twt9pgr2smwl6cyyy7y"
    mapPosition={{
      zoomLevel: "6",
      centerLatitude: "46.629445",
      centerLongitude: "8.785110",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Hillshade layer color:",
      layerName: "mapbox-terrain-rgb",
      propertyType: "paint",
      propertyName: "hillshade-shadow-color"
    }}
    specs={[
      <p>This is a modified version of the <strong>Basic template</strong> style.</p>,
      <p>A new <code>hillshade</code> layer named <code>mapbox-terrain-rgb</code> has been added.</p>,
    ]}
  />
</GLWrapper>
}}

## About this style

- **Hillshade layer data**: The data for the hillshade layer comes from the `mapbox-terrain-rgb` tileset. Mapbox Terrain-RGB is a raster-dem source that contains global elevation data encoded in raster PNG tiles as color values. Because it uses a raster-dem source to calculate the slope and shadow pixel-by-pixel on the user’s computer, the resulting hillshading is much more detailed than the shading that’s possible with a vector-terrain tileset. It’s the difference between styling individual pixels vs. broader, less detailed polygons. Read more about the [Mapbox Terrain-RGB tileset](https://www.mapbox.com/help/access-elevation-data/).
- **Raster tile styling**: With `hillshade` layers, you can customize the color, illumination direction, and intensity of the hillshading effect. Open this style in the style editor to experiment with hillshade style properties. Read more about the [hillshade layer type in the Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec#layers-hillshade).

## Related resources

**Looking for more guidance?** Read our [tutorials](https://www.mapbox.com/help/tutorials/#map-design).
