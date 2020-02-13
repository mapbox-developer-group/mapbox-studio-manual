---
title: Optimize map label placement
description: Optimize label placement on web and mobile maps.
topics:
- map design
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
  - "import UserAccessToken from '../../components/user-access-token';"
  - "import GlWrapper from '@mapbox/dr-ui/gl-wrapper';"
  - "import { CollisionBoxes } from '../../components/diagrams/collision-boxes';"
  - "import { VariableLabelDiagram } from '../../components/diagrams/variable-label-diagram';"
contentType: troubleshooting
---

Map labels are applied to Mapbox GL maps as features in [symbol layers](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers-symbol). Symbol layers are the most complex layer type in the Mapbox Style Specification. The symbol layer type offers detailed typographic styling options for your labels and map data.

This guide will walk through a subset of [layout properties](/help/glossary/layout-paint-property/) that are relevant to _label placement_. You can see the complete list of layout and paint properties for symbol layers, including those responsible for label language, style, and more, in the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers-symbol).

## Label collision

**Collision detection** is the process of preventing labels on a map from overlapping each other. Styles use four properties to prevent label collision:

- By default [`icon-allow-overlap`](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-allow-overlap) and [`text-allow-overlap`](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-allow-overlap) are set to `false`. If set to `true`, the icon or text will be visible even if it collides with other symbols drawn before.
- By default [`icon-ignore-placement`](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-ignore-placement) and [`text-ignore-placement`](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-ignore-placement) are set to `false`. If set to `true`, other symbols can be visible even if they collide with the text or icon.

{{<GlWrapper><CollisionBoxes>}}
Use the toggles below to understand the impact of various properties on the visibility of **points of interest**. All properties are `false` by default.
{{</CollisionBoxes></GlWrapper>}}

<!-- Is this still true? -->
For reliable collision detection across layers that come from different data sources, use source compositing. Source compositing happens by default for new styles created in Mapbox Studio. If you are adding sources on the client, they will not be composited.

While detecting and preventing label collision helps improve map legibility, it can result in many hidden labels. Use collision detection and variable label placement to keep labels legible while increasing the density of labels displayed on the map.

## Label density

**Variable label placement** is a map design concept in which more than one placement option is attempted for each label. This maximizes the chances that the map will show each label. Variable label placement is powered by three layout properties in the Mapbox Style Specification: `text-variable-anchor`, `text-radial-offset`, and `text-justify`.

The digaram below illustrates each possible position relative to the data point:

{{ <VariableLabelDiagram /> }}

### `text-variable-anchor`

[**`text-variable-anchor`**](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-variable-anchor) accepts an array of text-anchor positions as the input value. The map renderer tries to place the label at the positions in this list in the provided order of the array at collision detection time.

For example, in a layer with `text-variable-anchor` set to `["top", "bottom", "left"]`, the map renderer would first try to place each label anchored at the top. Then, if there wasn't room for the label at that position, it would try to place the label anchored at the bottom. And finally, if the label could not fit on the map anchored at the top or bottom, it would try anchoring on the left side. If none of these anchor positions can be used, the map will not display the label.

If a user changes the map zoom after a label has been placed, the map renderer will try to place the label in its original position _first_ before moving on to the rest of the positions specified in the `text-variable-anchor` array. This exception makes map rendering more efficient, but can sometimes be surprising.

The order in which each label in a layer will go through this process is described in detail below in [Label hierarchy](#label-hierarchy).

### `text-radial-offset`

[**`text-radial-offset`**](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-radial-offset) accepts a scalar value that represents the offset distance of text from its anchor and is applied to the `text-variable-anchor`. Positive values specify right and down, while negative values specify left and up.

### `text-justify`

[**`text-justify`**](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-justify) specifies the justification of the label. It can be set to one of `auto`, `left`, `center`, or `right`. Specifying `auto` will automatically set the justification towards the anchor position.

### Platform-specific examples

The exact syntax used to implement variable label placement varies by platform. View examples for web and mobile using variable label placement to improve label density:

- [Mapbox GL JS example](https://docs.mapbox.com/mapbox-gl-js/example/variable-label-placement/)
- [Maps SDK for Android example](https://docs.mapbox.com/android/maps/examples/variable-label-placement/)


## Label hierarchy

Some labels on your map may be more relevant to a wider audience or more important to a particular audience. When two labels collide, the draw order of features determines which label to display and which to hide. There are several factors that contribute to draw order.

### Order of layers

<!-- copyeditor disable retext-passive -->
Map styles contain a collection of style [layers](/help/glossary/layer/). Layers are specified in your style JSON and are drawn in order. This means that the first layer defined in the style JSON will be drawn first and will appear below all layers that follow. The last layer defined in the style JSON will be drawn last, on top of all other layers.

You can increase the chances that a layer's labels will be visible by placing that layer further down in your style JSON.
<!-- copyeditor enable retext-passive -->


### Order of features inside layers

For each layer in your style, you must specify a [source](/help/glossary/source/). For vector sources, you must also specify a [source layer](/help/glossary/source-layer/) for each style layer. The draw order of features inside a single vector tileset _source layer_ can be specified in two ways:

- **At the time of tileset creation**: If you are using the Mapbox Tilesets API, you can specify the order of features inside a single source layer using the `order` option. See the [Tilesets API recipe reference](https://docs.mapbox.com/help/troubleshooting/tileset-recipe-reference/).
- **At runtime with `symbol-sort-key`**: If you don't have control over the data at the time of tileset creation, you can influence the draw order of features at runtime using [`symbol-sort-key`](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-symbol-sort-key).

For GeoJSON sources, the draw order of features is determined by the order of features in the feature collection. Features are draw in descending order.
