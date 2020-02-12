---
title: Convert units
description: Use a formula to convert elevation values from meters to feet.
topic: Data visualization
image: thumbnail-unit-conversion
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
    styleId="cjka1d0ds6kun2so220yv4egu"
    mapPosition={{
      zoomLevel: "15.05",
      centerLatitude: "37.952244",
      centerLongitude: "-122.262027",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Unit conversion expression:",
      layerName: "contour-label",
      propertyType: "layout",
      propertyName: "text-field"
    }}
    specs={[
      <p>This is a modified version of the <strong>Basic template</strong> style.</p>,
      <p>Two new layers were added: <code>contour</code> and <code>contour-label</code>.</p>,
      <p>The data for these two new layers comes from the <code>mapbox-terrain-v2</code> tileset.</p>,
      <p>The <code>contour-label</code> layer is a <code>symbol</code> layer that uses a formula to convert elevation from meters to feet.</p>,
    ]}
  />
</GLWrapper>
}}

## About this style

- **Contour data**: The contour data used in this example comes from the `mapbox-terrain-v2` tileset. The `contour` [source layer](https://www.mapbox.com/help/define-source-layer) contains the geometry for each contour line and two properties: `index` and `ele`. The `ele` property is the elevation in meters. Read more about the [Mapbox Terrain tileset in the vector tile reference documentation](https://www.mapbox.com/vector-tiles/mapbox-terrain/).
- **Two-layer approach**: This example uses two different layers from the same data source: a line layer called `contour` and a symbol layer called `contour-label`.
  - The line layer, `contour`, was added by adding a new layer and specifying the `contour` source layer from the Mapbox Terrain tileset as the source and creating a `line` layer. The `contour` layer uses the default styling for line layers.
  - The symbol layer, `contour-label`, was added by duplicating the `contour` line layer and changing the type of layer from `line` to `symbol`.
- **Using formulas**: The _Text field_ for the `contour-label` layer uses a formula to calculate and display elevation in both meters and feet from the `ele` data property. Open the `contour-label` layer to see how the formula works.

## Related resources

**Looking for more guidance?** Read our [tutorials](https://www.mapbox.com/help/tutorials/#map-design).
