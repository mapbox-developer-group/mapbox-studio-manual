---
title: Migrate from Mapbox Streets v7 to v8
description: Tips for upgrading to the latest Mapbox base map tileset.
topics:
  - data
  - map design
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
  - "import AppropriateImage from '../../components/appropriate-image';"
  - "import GlWrapper from '@mapbox/dr-ui/gl-wrapper';"
  - "import SymbolrankScalerank from '../../components/diagrams/symbolrank-scalerank';"
  - "import FilterrankLocalrank from '../../components/diagrams/filterrank-localrank';"
contentType: troubleshooting
---

If you are using a map style built with the Mapbox Streets v7 tileset, we highly recommend migrating to Mapbox Streets v8. Mapbox Streets v8 contains many improvements over previous versions including additional data fields and refactored layers designed to be used with [expressions](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/) (as described in the Mapbox Style Specification).

Because there are [significant structural changes](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#changelog) between v7 and v8, swapping the source URL with `mapbox-streets-v8` without adjusting source layer names, filters, and style properties that rely on data fields will result in style errors. This guide will help you decide on an appropriate approach to migrating your map style and provide tips for making the switch.

{{<Note title="Complete reference documentation">}}
You can find additional information on Mapbox Streets v8, including detailed descriptions of available source layers and fields, in the [vector tile reference](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/).
{{</Note>}}

## Options for migrating

There are two suggested options for migrating your style to use v8 data:

- **Option 1**: If you built your style on top of an older version of a template style (like Streets, Light, Outdoors, etc.) and made a few custom edits, it's recommended to recreate a style using the newer version of the template. Our latest styles use Mapbox Streets v8, and are designed to be tweaked in Studio.
- **Option 2**: If you built your style from scratch using the Mapbox Streets tileset, or if you made a significant number of edits to an older template style, it may be easier to manually update layer-by-layer to preserve your style.

Choose an option that most closely matches your situation, and follow the steps below:

### Option 1: Recreate your style from a core style template

1. In Studio, create a new style from the style template that most closely matches your style.
2. Add any additional layers or styling changes. All the style templates (Basic, Streets, Outdoors, Monochrome, Satellite Streets, and Navigation) are compatible with [style components in Studio,](https://docs.mapbox.com/studio-manual/overview/components/) allowing for quick edits to the base map.
3. When you're ready, publish your style and use the new style URL in your implementation.

{{<Note title="Use the same style URL">}}
It is possible to use the same style URL by replacing your style in Mapbox Studio. See [Use the same style URL](#use-the-same-style-url) below.
{{</Note>}}

### Option 2: Manually update each layer in your style

Completely remove any layers in the style that have Mapbox Streets v7 as their source. Once all the existing Mapbox Streets v7 source layers are removed, you can start rebuilding layers one-by-one with Mapbox Streets v8.

1. Duplicate the style.
2. Open the original style in the style editor in one tab. Open the duplicated style in the style editor in a second tab.  
3. Prefix the name of the original style with `[v7]` and the name of the new style with `[v8]`. Throughout this guide, we'll refer to each tab as the `[v7]` style and `[v8]` style. You can edit the style name after the migration process is complete.
4. In the `[v8]` style, remove the layers with `mapbox-streets-v7` as the source.
5. Refer back to the `[v7]` style to keep track of layers you will need to add using the `mapbox-streets-v8` source.
6. The rest of this guide will walk you through filtering data from the `mapbox-streets-v8` source and styling in each style layer appropriately.

{{
  <AppropriateImage
    imageId="troubleshooting--streets-v8-migration-guide--style-names"
    alt="An example of two styles renamed for the migration process."
  />
}}

## Before getting started

Here are some of the most important tips to note before diving into migration:

### Do not mix Mapbox Streets v7 and v8

Mixing different versions of the same source is not recommended, because layer names are reused across versions. In Mapbox Studio, if you try to use Mapbox Streets v8 when layers in your style already use Mapbox Streets v7, you will see a warning message:

{{
  <AppropriateImage
    imageId="troubleshooting--streets-v8-migration-guide--source-warning"
    alt="A warning message for incompatible vector layer names in Studio."
  />
}}

### Migrate from property functions to property expressions

Template styles built with Mapbox Streets v7 use [property functions](https://docs.mapbox.com/mapbox-gl-js/style-spec/other/#function) (left) for zoom and data styling. We highly recommend using the [expressions](https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions) syntax (right) for more flexibility and longevity. Expressions syntax and the deprecated property function syntax cannot be mixed in a single style property or filter definition.

{{
  <AppropriateImage
    imageId="troubleshooting--streets-v8-migration-guide--filter-syntax"
    alt="A comparison of a filter with older syntax vs. newer syntax."
  />
}}

Studio displays filters slightly differently for values that use property functions instead of expressions. The older interface displays different sections for each type of filter (left). For newer, expression-based filters, options for geometry type and field values have been combined into a single panel (right).

{{
  <AppropriateImage
    imageId="troubleshooting--streets-v8-migration-guide--filter-ui"
    alt="A comparison of the Studio UI with older filters vs. newer filters."
  />
}}

The value for any layout property, paint property, or filter may be specified as an expression. To automatically update all your property functions to use expressions, you can create a migrated copy of your style under `Settings` in Studio. This migration will create a copy of the style with a new style URL.

{{
  <AppropriateImage
    imageId="troubleshooting--streets-v8-migration-guide--create-migrated-copy"
    alt="A button for creating a migrated copy in Studio."
  />
}}

### Avoid broken `name-*` fields

Unlike previous versions of Mapbox Streets, when using Mapbox Streets v8 you **must add fallback languages manually** to avoid broken labels.

In Mapbox Streets v7 (left), if a translation is not available for one of a feature's `name_*` fields (for example, `name_en` and `name_fr`), the value of the `name` field is used as a fallback.  In Mapbox Streets v8 (right), if a translation is not available, the value will be `null`. This allows you to customize your fallback preferences using expressions.

{{
  <AppropriateImage
    imageId="troubleshooting--streets-v8-migration-guide--name-field"
    alt="A comparison of the name field without a fallback vs. the name field with a fallback."
  />
}}

The underlying expression looks like this:

```json
"text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
```

## Migration process

The following sections highlight data layers that require special attention while migrating.

### Renamed source layers

The data in the following source layers were renamed, but the underlying data is largely the same between v7 and v8. When migrating, you can replace the `source` and `source-layer` without adding new filters or changing style properties.

| Streets v7 source layer | Streets v8 source layer |
|-------------------------|-------------------------|
| `barrier_line`          | `structure`             |
| `rail_station_label`    | `transit_stop_label`    |


### Condensed source layers

The data in the following source layers have been condensed into a single source layer. Data-driven styling with expressions makes it possible to style features according to data properties from a single source layer.

[`place_label`](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#place_label) contains points for labeling places including countries, states, cities, towns, and neighborhoods. This layer existed in Mapbox Streets v7, but it contained only “human settlements” like cities and neighborhoods. In Mapbox Streets v8, it also contains country and state labels.

| v7 source layer | v8 source layer | Suggested filter    |
|-----------------|------------- ---|---------------------|
| `country_label` | `place_label`   | `class` = `country` |
| `state_label`   | `place_label`   | `class` = `state`   |

[`natural_label`](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#natural_label) contains points and lines for styling natural features such as bodies of water, mountain peaks, valleys, deserts, and more. This layer is new in Mapbox Streets v8, but the data it contains existed in different layers in v7.

| v7 source layer       | v8 source layer | Suggested filter                     |
|-----------------------|-----------------|--------------------------------------|
| `marine_label`        | `natural_label` | `class` = `ocean`, `sea`, `bay`      |
| `mountain_peak_label` | `natural_label` | `class` = `landform`                 |
| `water_label`         | `natural_label` | `class` = `water`                    |
| `waterway_label`      | `natural_label` | `class` = `river`, `canal`, `stream` |

[`road`](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#road) contains lines, points, and polygons needed for drawing features such as roads, railways, paths and their labels. This layer existed in Mapbox Streets v7, but it was only appropriate for creating line layers. In Mapbox Streets v8, it can also be used for symbol layers.

| v7 source layer | v8 source layer | Suggested filter                           |
|-----------------|-----------------|--------------------------------------------|
| `road_label`    | `road`          | None, but be sure to use `type` = `symbol` |


### `admin` boundaries

Mapbox Streets v8 uses slightly different [`admin`](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#admin) boundary division definitions. Previously, v7 used values of `2`, `3`, and `4`, while Streets v8 uses values of `0`, `1`, and `2`. Note the different descriptions below.

| v7 `admin` value |             | v8 `admin` value |             |
|------------------|-------------|------------------|-------------|
| `2`              | Countries   | `0`              | Countries   |
| `3`              | Some subnational regions or groupings: regions of Papua New Guinea, The Philippines, Venezuela; governorates of Lebanon; federal districts of Russia; some  disputed and semi-autonomous regions  | `1` | First-level administrative divisions |
| `4`              | Most first-level subnational boundaries (states, provinces, etc.) | `2` | Second-level administrative divisions |


There is also a new [`worldview` field](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#worldview-text) that provides an option to cater boundary lines to different locales. You can use either US, CN, IN, or JP to show the United States', China’s, India’s, or Japan's opinions of global and disputed borders.


### `sizerank`, `filterrank`, and `symbolrank`

In v7, the `scalerank` and `localrank` fields were used to rank features. These fields are not included in v8. Instead, v8 introduces three new fields for ranking features: [`sizerank`](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#sizerank-number), [`filterrank`](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#filterrank-number), and [`symbolrank`](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#--place_label---symbolrank-number). **The ranking fields in v8 are fundamentally different than the ranking fields in v7, but can be used to generate similar effects.**

| Commonly used for                  | v7 field | Relevant v7 layers | v8 field | Relevant v8 layers |
|------------------------------------|----------|--------------------|----------|--------------------|
| Customizing label density          | `localrank` <div className="txt-s">(number > 0)</div> | `place_label`<br />`poi_label` | `filterrank`<div className="txt-s">(number 0-5)</div> | `place_label`<br />`poi_label`<br />`natural_label` |
| Styling labels based on relative prominence | `scalerank` <div className="txt-s">(number 1-6 or `null`)</div> | `place_label`<br /> `poi_label`<br />`airport_label` | `symbolrank`<div className="txt-s">(number 0-16)</div> | `place_label` |
| Styling labels based on relative physical size of the feature | &mdash; | &mdash; | `sizerank`<div className="txt-s">(number 1-19)</div> | `poi_label`<br />`airport_label`<br />`natural_label` |

<!-- copyeditor disable simple -->
Because there is not a one-to-one relationship between fields used to rank features in v7 and v8, there is no simple transformation from one to the other. The maps below allow you to explore the relationship between these fields.
<!-- copyeditor enable simple -->

#### Customize label density

The v8 field `filterrank` is a value from 0-5 used that helps customize label density. When rebuilding your layers in the `[v8]` version of your style, set `filterrank <= 1` to only show the most prominent labels, `filterrank <=3 ` to produce moderate density, or `filterrank <= 5` to see as many labels as possible.

There is no one-to-one relationship between v7's `localrank` and v8's `filterrank`, but their effect is similar. Use the maps below to explore the relationship between `localrank` and `filterrank`. Notice that `localrank` and `filterrank` vary across zoom levels.

{{<GlWrapper><FilterrankLocalrank /></GlWrapper>}}

#### Filter by feature prominence

The v8 field `symbolrank` is a number between 0-16 that helps simplify styling of the label size and symbol prominence of place features. When rebuilding your layers in the `[v8]` version of your style, use `symbolrank <= 1` to apply a bold style to only the most prominent features or use `symbolrank` with expressions to hide and show features of a specific prominence at various zoom levels.

There is no one-to-one relationship between v7's `scalerank` and v8's `symbolrank`, but their effect is similar. Use the maps below to explore the relationship between `scalerank` and `symbolrank`. Notice that the value of a feature's `scalerank` or `symbolrank` field persists across zoom levels.

{{<GlWrapper><SymbolrankScalerank /></GlWrapper>}}

#### Filter by physical size

The v8 field `sizerank` is used for label layers where points or lines have been derived from polygons. The largest areas are ranked `sizerank=0`, and the smallest points are ranked `sizerank=16`. This is a new concept in v8 (v7 did not include a field with this kind of information) so you can use it as you see fit when creating new layers in the `[v8]` version of your style.

### `class` field in `poi_label`

In the `poi_label` layer, a new `class` field contains thematic categories that are useful for filtering and symbol styling. There are also many new `maki` options for use with our [Maki iconset](https://labs.mapbox.com/maki-icons/).

{{
  <AppropriateImage
    imageId="troubleshooting--streets-v8-migration-guide--maki"
    alt="A list of many of the available maki values for points of interest."
  />
}}

## Use the same style URL

Rebuilding your style with a new template or migrating your style to use expressions will generate a new [style URL](/help/glossary/style-url/). If you want to keep your existing style URL, use the `Replace` option in Studio.

{{
  <AppropriateImage
    imageId="troubleshooting--streets-v8-migration-guide--replace-style"
    alt="A button for replacing a style with an uploaded file in Studio."
  />
}}

The file you upload must be a JSON document adhering to the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/). Additionally, the style must contain a [sprite URL](https://docs.mapbox.com/mapbox-gl-js/style-spec/sprite/) referencing all icons and images used in the style, and a [glyph URL](https://docs.mapbox.com/mapbox-gl-js/style-spec/glyphs/) referencing all fonts used in the style. You cannot replace a style with one that does not reference the correct sprite or glyph URL.

Replacing a style cannot be undone, so before replacing, make sure the style is working correctly. You may also want to duplicate the style before replacing it to have a backup.
