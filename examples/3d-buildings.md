---
title: Add 3D buildings
description: Use a fill extrusion layer to add 3D buildings to a map in Mapbox Studio.
topic: Map design
image: thumbnail-add-3d-buildings
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
    styleId="cjk8m59xg8jzh2rlko4vlrq4h"
    mapPosition={{
      zoomLevel: "15.35",
      centerLatitude: "40.754951",
      centerLongitude: "-73.986714",
      bearing: "9.60",
      pitch: "60"
    }}
    relevantJson={{
      codeCaption: "Building height expression:",
      layerName: "building",
      propertyType: "paint",
      propertyName: "fill-extrusion-height"
    }}
    specs={[
      <p>This is a modified version of the <strong>Basic template</strong> style.</p>,
      <p>The data used in this example comes from the <code>mapbox-streets-v7</code> tileset.</p>,
      <p>The <code>building</code> layer has changed to a <code>fill extrusion</code> layer type and the style properties have been modified.</p>,
      <p>The <strong>Light</strong> option in the toolbar has been modified.</p>
    ]}
  />
</GLWrapper>
}}

## About this style

- **Building data**: The data used in this example comes from the `mapbox-streets-v7` tileset. Buildings in this tileset are available at zoom levels 13 and higher. Building features include both a `height` and an `extrusion` data property. The `extrude` field indicates whether the object should be included in 3D-extrusion renderings while the `height` field contains the height of a building or building part in meters (rounded to the nearest integer). This particular layer has been filtered to only include features that has an `extrude` property of `true`. [Read more about available data.](https://www.mapbox.com/vector-tiles/)
- **Fill extrusion layer type**: Creating 3D effects in Mapbox styles requires using a `fill-extrusion` layer. Read more about fill extrusion layers in the [Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill-extrusion).
- **Styling with extrusions**: Styling a feature based on a data property of that specific feature requires using expressions. Read more about expressions in the [Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions).

## Related resources

**Looking for more guidance?** Read our [Add 3D buildings to a Mapbox Studio style](https://www.mapbox.com/help/add-3d-buildings-studio/) tutorial.
