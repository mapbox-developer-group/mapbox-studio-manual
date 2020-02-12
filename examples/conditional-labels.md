---
title: Apply conditional labels
description: Check if a data property exists and if it does not display a different label.
topic: Map design
image: thumbnail-conditional-labels
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
    styleId="cjk8xtao498nt2rpe6093loi3"
    mapPosition={{
      zoomLevel: "12",
      centerLatitude: "39.455",
      centerLongitude: "-76.160344",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Conditional label expression:",
      layerName: "airport-label",
      propertyType: "layout",
      propertyName: "text-field"
    }}
    specs={[
      <p>This is a modified version of the <strong>Basic template</strong> style.</p>,
      <p>The data used in this example comes from the <code>mapbox-streets-v7</code> tileset.</p>,
      <p>The <code>airport-label</code> layer, a <code>symbol</code> layer, has been modified.</p>,
      <p>Airport labels are styled using property expressions to <strong>style features with a data condition</strong>. Labels will include both the full name and the short code <em>if the short code is available</em>.</p>
    ]}
  />
</GLWrapper>
}}

## About this style

- **Label data**: The data for airport labels comes from the `mapbox-streets-v7` tileset. The `ref` field contains short identifier codes for many airports, but not all airports. Read more about [Mapbox Streets in the vector tile documentation](https://www.mapbox.com/vector-tiles/).
- **Styling with expressions**: In this example, the airport labels are styled using property expressions to style features using a data condition. Open the `airport-label` layer to see how to check whether a data property exists (in this case the `ref` property). If the property does exist, the label displays the full name (`name`) along with the `ref`. If the `ref` property does not exist, the label displays the `name` value. Read more about styling with data conditions [in the Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec#expressions-decision).

## Related resources

**Looking for more guidance?** Read our [tutorials](https://www.mapbox.com/help/tutorials/#map-design).
