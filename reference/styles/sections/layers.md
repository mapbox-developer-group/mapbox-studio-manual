---
title: Layers
description: A layer is a styled representation of data or the canvas of your map.
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Note from '@mapbox/dr-ui/note';"
- "import Video from '@mapbox/dr-ui/video';"
- "import EditJson from '../../../../video/reference-styles-layers-edit-json.mp4';"
- "import Filter from '../../../../video/reference-styles-layers-filter.mp4';"
- "import FilterSourceLayer from '../../../../video/reference-styles-layers-filter-source-layer.mp4';"
- "import Hillshade from '../../../../video/reference-styles-layers-hillshade.mp4';"
- "import LayersTab from '../../../../video/reference-styles-layers-tab.mp4';"
- "import SelectData from '../../../../video/reference-styles-layers-select-data.mp4';"
- "import SetValue from '../../../../video/reference-styles-layers-set-value.mp4';"
- "import StyleBuildingsZoom from '../../../../video/style-buildings-zoom.mp4';"
- "import StyleDetails from '../../../../video/reference-styles-layers-style-details.mp4';"
- "import StyleProperties from '../../../../video/reference-styles-layers-style-properties.mp4';"
contentType: reference
---

## Layers

A **layer** is a styled representation of data of a single type (for example fill, line, or symbol). Layers _can_ be a part of a component, but don’t _have_ to be.

Layers power your map's visualization. Without layers, you cannot see your data. You can create multiple layers from the same data and you can filter data by attributes for styling in a layer. You can also fill the canvas with a color or pattern which will apply across the whole world.

{{
  <Browser>
    <Video
      src={LayersTab}
      title=""
    />
  </Browser>
  <br />
}}

You can always access the Layers list by clicking the **Layers** tab in the upper left of the style editor. There are several options for managing layers at the top of the list, including:

- {{<Icon name='plus' inline={true} />}} **Add a custom layer** to add a new layer.
- {{<Icon name='duplicate' inline={true} />}} **Duplicate a layer** to create a copy of an existing layer.
- {{<Icon name='folder' inline={true} />}} {{<Icon name='nofolder' inline={true} />}} **Group** and **Ungroup** layers to style them individually and sort them.
- {{<Icon name='noeye' inline={true} />}} {{<Icon name='eye' inline={true} />}} **Hide** and **Show** layers.
- {{<Icon name='trash' inline={true} />}} **Delete layer** to permanently remove a layer. You can undo this using `CTRL + Z` in the current session, but this cannot be undone after you close your style.
- {{<Icon name='menu' inline={true} />}} **Reorder layers** by clicking and dragging the {{<Icon name='menu' inline={true} />}} next to each layer list item.

### Add layer

To create a new layer, click **+** at the top of the layers panel. There are two options when adding a new layer to your style: **Data sources** and **Background layer**.

#### Data sources

Add a layer that contains specific shapes (polygons, lines, or points) that cover part of the map. A layer from data comes from custom data that you have added to your Mapbox account. See the [Geospatial data](/studio-manual/overview/geospatial-data/) section for more information on adding custom data.

Each layer needs data to work with, otherwise the style rules would not be applied to anything. (The exception is a background layer &mdash; see the next section for more details). To specify data for the layer, choose a **Data source** from the list of available [tilesets](https://docs.mapbox.com/help/glossary/tileset) used in your map style (_Active sources_), as well as a list of tilesets that are in your account but not used in the current style (_Unused sources_). You can use the search box to find a tileset, or upload a new tileset with the **+ Upload** button.

{{
  <AppropriateImage
    imageId="reference-styles-layers-editor-hover-and-click-data"
    alt="select data panel after clicking add layer"
  />
  <br />
}}

{{<Note title="Source limit">}}
There is a limit of 15 unique sources permitted in styles saved in your Mapbox account. This count includes Mapbox tilesets like Streets or Terrain. If you reach the 15 source limit, you will see an error, `Failed to update style`. This limit is related to sources, not layers. To reduce the number of sources needed, consider combining data before uploading and using filters in the style editor to create different layers from the same source. For more information on source limits see our [Source limits in Mapbox Studio styles](https://docs.mapbox.com/help/troubleshooting/reduce-tileset-sources/) troubleshooting guide.
{{</Note>}}


**Vector sources**: If you select a vector source, you'll have the following options:

- **Type**: allows you to select the type of layer to create either [fill](#fill-layer), [fill extrusion](#fill-extrusion-layer),  [line](#line-layer), [circle](#circle-layer), [symbol](#symbol-layer), [heatmap](#heatmap-layer), or [raster](#raster-layer) data types.
- **Filter**: allows you to limit features that are displayed in a layer based on data properties or geometry type.
- **Zoom extent**: sets the `min` (start) zoom and `max` (last) zoom to which you data is viewed on the map (learn more about [manually adjusting zoom extents](https://docs.mapbox.com/help/troubleshooting/adjust-tileset-zoom-extent)).

On the canvas, you will see a preview of your data. You can click to select and view the data on the map. Hover over the data to see what data subset is below and click the **Select** button to populate that data into the layer you are creating.

{{
  <Video
    src={FilterSourceLayer}
    title="animated GIF walking through how to filter a source layer by adding a vector source clicking Filter > Create filter > select a data field from the list provided > select a value from the list provided"
  />
  <br />
}}

**Raster sources**: If you select a raster source, your layer will automatically be assigned the _Raster_ type. The **Zoom extent** option will also be available to set the `min` (start) zoom and `max` (last) zoom to which you data is viewed on the map.

**RBG-encoded DEM sources**: If you select an RBG-encoded DEM source, your layer will automatically be assigned the _Hillshade_ type. The **Zoom extent** option will also be available to set the `min` (start) zoom and `max` (last) zoom to which you data is viewed on the map.

#### Background layer

A background layer is a style layer without an associated tileset. Background layers cover the full extent of your map canvas. You can create as many background layers as you want. To create textures for your map style, use multiple background layers.

To create a background layer, click **+ Add layer** at the top of the layers panel, choose the **Background layer** tab and click the **Create background layer** button.

Style options for background layers include:

- [Fill color](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-color)
- [Pattern](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-pattern)
- [Opacity](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-opacity)

As **patterns** are created from tiled images, you can upload a custom SVG image to create a pattern effect in your map. To add SVG images:

1. Click **Images** in the top toolbar.
1. Click **Upload SVG image**.

The image will then be uploaded to your style and available for use on any layer.

### Filter layers

Click {{<Icon name='filter' inline={true} />}} Filter layers to show and hide layers in the layer list. You can filter by layer name by typing in the search bar or you can filter by value, layer type, or vector type.

{{
  <Browser>
    <Video
      src={Filter}
      title="Filter layers in the style editor"
    />
  </Browser>
  <br />
}}

- **Filter by value** options include Colors, Images and patterns, Fonts, Text fields, Text options, Icon options, Symbol placement, Line widths, Line options, and Fill options.
- **Filter by layer type** options include fill, line, symbol, circle, fill-extrusion, and background.
- **Filter by vector layers** options include all [source layers](https://docs.mapbox.com/help/glossary/source-layer/).


### Style a layer

Each layer can be styled individually by clicking on the name of the layer in the Layer list. There are several **layer types** to choose from, which are listed below. Each layer type has a unique set of **layer properties** that can be specified. There are a few options for specifying property values. You can pick values individually, based on a data attribute, based on the zoom level, or the value of another property.

#### Set a manual override

If a layer property is controlled by a component, a {{<Icon name="lock" inline={true} />}} lock icon will appear next to the value. You can override any layer property by clicking **Set manual override**. When you override a property, it will only affect one layer property for that specific layer &mdash; other layers controlled by the component will not be affected.

{{
  <Browser>
    <Video
      src={StyleProperties}
      title="Style a layer"
    />
  </Browser>
}}

<h4 id='fill-layer'>{{<Icon name='fill' inline={true} />}} Fill layer</h4>

A fill layer is a style layer that displays data as filled shapes. Fill layers are typically used for setting the style of the insides of polygon features, but any feature type (polygon, linestring or point) can be styled with a fill layer.

For an example of fill layer styling, see the [Make a choropleth map](https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-1/) tutorial.

{{
  <AppropriateImage
    imageId="reference-styles-layers-fill"
    alt="screenshot showing an example of a fill layer"
  />
}}

To add a pattern to a fill layer in the Mapbox Studio style editor:

1. Click **Images** in the top toolbar.
1. Click **Upload SVG image**.
1. Select the desired fill layer from the layers panel on the left side of the style editor.
1. Click the **Pattern** field.
1. Click to select the desired image.

<h4 id='fill-extrusion-layer'>{{<Icon name='extrusion' inline={true} />}} Fill-extrusion</h4>

Fill extrusion layers can be applied to sources containing polygon features to create 3D polygons. You can use a fill extrusion layer to add a 3D building layer in your style using the `building` source layer in the Mapbox Streets tileset. Use the [Light panel](#light-toolbar) with fill extrusion layers to control the color, direction, and intensity of the lighting source.

<h4 id='line-layer'>{{<Icon name='line' inline={true} />}} Line layer</h4>

You can style line layers to various widths, colors, and patterns. There are also advanced options for dash arrays and blur effects. For the most part, line layers are heavily styled and transitioned between zooms. You can also duplicate layers and filter your data for more styling control. Take a look at the map style templates **Mapbox Streets** or **Mapbox Outdoors** for examples of detailed line styling with the `roads`, `tunnels`, and `bridges` data layers.

To add a pattern to a line layer in the Mapbox Studio style editor:

1. Click **Images** in the top toolbar.
1. Click **Upload SVG image**.
1. Select the desired line layer from the layers panel on the left side of the style editor.
1. Click the **Pattern** field.
1. Click to select the desired image.

You can also select a previously-uploaded image from this panel.

<h4 id='circle-layer'>{{<Icon name='circle' inline={true} />}} Circle layer</h4>

A circle layer is a style layer that displays data as circles. You can use circle layers to represent scaled or interactive data, and you can use them with data that is mostly point features. In the styling panel for the layer, click the input box for each property to change its value. Hover over a property name in the panel to see its definition.

##### Style by filter

Circle data can show varying data values. You can make separate circle layers, filter by an attribute in your data, and style each based on the data attribute.

For example, to style earthquake data by magnitude, you can:

- Create three layers each using earthquakes as the data source.
- Filter the data based on magnitude (small, medium, large).
- Define different style properties for each one, styling higher-magnitude earthquakes as larger, darker circles.

This data can also be re-styled on-the-fly in your map with Mapbox GL JS based on user interaction or attributes in the data.

<h4 id='symbol-layer'>{{<Icon name='transform-uppercase' inline={true} />}} Symbol layer</h4>

Symbol layers are the most complex style type in Mapbox Studio. The symbol layer type offers detailed typographic styling options for your labels and map data. Symbol layer styling is separated into four main groups: **Text**, **Icon**, **Position**, and **Placement**.

##### Text

Control the typography contained on your layer in the Text section.

*Fonts*: You can only set fonts on [symbol](#symbol-layer) layer types. Custom fonts can be uploaded using the **Fonts** toolbar item on the left of the style editor. Set fonts from the **Style** tab of each `symbol` layer, under **Text**, in the `Font` input field. Each list of unique font pairings between primary and fallback font(s) will create a new fontstack.

A **fontstack** is an ordered list consisting of a _primary font_ and _optional fallback font(s)_. An example fontstack:

`"Open Sans Regular", "Arial Unicode MS Regular"`

When your primary font has missing glyphs, the text will be rendered in the fallback font instead. The default fallback font set by Mapbox Studio is `Arial Unicode MS Regular`. Unicode fonts include more glyphs than conventional fonts, allowing for better multilingual coverage.

*Language*: When building a map from a Mapbox template style, map labels will appear in English by default. You can change the language of your map's labels directly in the [Mapbox Studio](https://studio.mapbox.com) style editor. All Mapbox template maps use the Mapbox Streets vector tileset for map features. For a list of languages available, see the [Mapbox Streets vector tile reference](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#overview).

How to change languages:

1. Create a new style or edit an existing one in [Mapbox Studio](https://studio.mapbox.com/styles/).
2. Select the layer that contains the labels you'd like to edit.
3. Under the **Text** tab, click the current value in the **Text field**. A panel will appear with all language options for the layer.
4. Click the desired language; the map will update on select.

{{<Note title="Right-to-left language support">}}
Mapbox Studio loads the [`mapbox-gl-rtl-text`](https://github.com/mapbox/mapbox-gl-rtl-text) plugin by default. This plugin adds support for text in the Arabic and Hebrew languages, which are displayed right-to-left.
{{</Note>}}

##### Icon

Define [Maki](https://labs.mapbox.com/maki-icons/) icons that are available within Mapbox Studio or add your own custom icons in the Icon styling section. To add an image to a symbol layer in the Mapbox Studio style editor:

1. Click **Images** in the top toolbar.
1. Click **Upload SVG image**.
1. Select the desired symbol layer from the layers panel on the left side of the style editor.
1. From the **Style** tab select the **Icon** tab.
1. Click the **Image** field.
1. Click to select the desired image.

##### Position

Position styling allows you to choose alignment, rotation, and offset for your icons and text.

##### Placement

Placement styling controls placement of symbols, how symbols rotate on a map, and collision behavior for text and icon symbols among each other.

<h4 id='heatmap-layer'>{{<Icon name='flame' inline={true} />}} Heatmap layer</h4>

A heatmap is a data visualization in which a range of colors represent the density of points in a particular area. Adding a source layer as a heatmap layer allows you to represent the layer's features in terms of their proximity to one another. Heatmap layers in Mapbox Studio have several configurable properties that allow you to customize your heatmap:

- `color`: Defines the heatmap’s color gradient, from a minimum value to a maximum value. You can adjust the density and color of each stop individually, as well as add and delete stops. For inspiration on color choices for your heatmap, try [Color Brewer](http://colorbrewer2.org/).
- `opacity`: Controls the global opacity of the heatmap layer.
- `radius`: Sets the radius for each point in pixels. As the radius number increases, the heatmap will get smoother and have less detail.
- `weight`: Measures how much each individual point contributes to the appearance of your heatmap. Heatmap layers have a weight of one by default, which means that all points are weighted equally. Increasing the weight property to five has the same effect as placing five points in the same location. You can use the **Style across data range** and **Style with data conditions** options to set the weight of your points based on specified properties.
- `intensity`: A multiplier on top of the weight property. Intensity is primarily used as a convenient way to adjust the appearance of the heatmap based on zoom level.

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-layers-heatmap"
      alt="screenshot of a heatmap layer displaying POI density in the Mapbox Studio style editor"
    />
  </Browser>
}}

<h4 id='raster-layer'>{{<Icon name='raster' inline={true} />}} Raster layer</h4>

Raster layers are created from GeoTIFF sources. GeoTIFFs are georeferenced images, and the available style properties include options you may associate with editing images, like opacity, saturation, contrast, and brightness.

<h4 id='hillshade-layer'>{{<Icon name='mountain' inline={true} />}} Hillshade layer</h4>

Under the available sources when you create a new layer there’s a new raster-dem source: Mapbox Terrain RGB. When selected, it uses the hillshade layer type to provide many properties to style it.

{{
  <Browser>
    <Video
      src={Hillshade}
      title="The process outlined above for adding a hillshade layer in the Mapbox Studio style editor."
    />
  </Browser>
}}

<h4 id='background-layer-properties'>{{<Icon name='globe' inline={true} />}} Background layer</h4>

Properties for background layers include:

- [Color](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-color)
- [Pattern](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-pattern)
- [Opacity](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-opacity)

For more information on background layers, see the [Background layer](#background-layer) section above.

**Layer properties**: The available properties for each layer vary by layer type. You can learn about the available properties for each layer type in the style editor by clicking {{<Icon name='caret-right' inline={true} />}}**Details**.

{{
  <Browser>
    <Video
      src={StyleDetails}
      title="hover to see property details"
    />
  </Browser>
  <br />
}}

Follow the links in the sections below to read more about the properties available for each layer type in more detail in the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec).

### Value options

You can specify the values for each available property individually for each layer using the **Style** panel. You can also quickly match the values to the values in other layers using **Apply existing value**, set a value that changes based on **zoom level**, a **data range**, or **data conditions**, or create and use a custom **formula** to style a layer.

{{
  <Browser>
    <Video
      src={SetValue}
      title="set property"
    />
  </Browser>
  <br />
}}

Read more about how to use each of these options for specifying property values below.

#### Set value

Click on each property to edit the value directly.

#### Style across zoom range

You can choose style properties based on zoom level by choosing **Style across zoom range**. Values can be specified for any number of stops at any specified zoom level.

This is useful where contrast at high zoom levels requires different colors to have the same effect at lower zoom levels or to slowly fade in features that appear at higher zoom levels. Here's an example from our [Create a custom style tutorial](https://docs.mapbox.com/help/tutorials/create-a-custom-style):

{{
  <Browser>
    <Video
      src={StyleBuildingsZoom}
      title="animated GIF showing an example using zoom functions in the Mapbox Studio style editor"
    />
  </Browser>
}}

##### Rate of change

There are several different options for the rate of change:

**Linear**: By default, the rate of change is `linear`, meaning a difference of one zoom level increment will increase or decrease a value by the same amount.

**Exponential**: A linear rate of change can be logical for many properties, but since objects in perspective increase in size exponentially as they get closer, the `exponential` option allows ramps to have a different _base_, meaning that you can customize the curve of how much a zoom level increase affects a property change over time. For example, you might visualize the population of counties in a state by proportionally scaling the layer's `Color` property from yellow to red for populations between 0 and 10 million people.

**Cubic Bézier**: The `cubic-bezier` option interpolates using the cubic Bézier defined by the given control points. This can be used to create non-linear, non-exponential effects like the to CSS transition properties `ease-in` and `ease-in-out`.

**Step**: The `step` option produces discrete, stepped results by evaluating a piecewise-constant function defined by stops. This option is helpful if you want complete control over the property values used in defined intervals rather than interpolating values between stops. For example, you might visualize the population of counties in a state by assigning the color yellow to counties with less than 500,000 people, orange for 500,000-1,000,000 people, and red for counties with more than 1,000,000 people.

Here's an example of interpolating from data with a stepped rate of change from the [Make a choropleth map with Mapbox tutorial](https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-1/):

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-layers-set-all-stops"
      alt="screenshot of the popover for editing style property values using a property function in the Mapbox Studio style editor"
    />
  </Browser>
}}

#### Style across data range

Style properties can be applied based on the value of a tileset field by choosing **Style across data range**. To use **Style across data range**, you must have a numeric data field for which you can create stops. This option is not available for every style property. For example, you can interpolate from data for the color of fill layers, but not for patterns.

#### Style with data conditions

Add conditional logic to your styles with **Style with data conditions**. Apply a style property to all features in a layer with a given data field value. The value in this field can be a `string`, `number`, or `boolean`. You can also use multiple values in each conditional statement.

For example, in the Mapbox Basic style, landuse types are styled by `class`. If `class` is equal to `park` or `pitch`, the feature's fill color is green. If the `class` of a feature is equal to `hospital`, the feature's fill color is pink. Another condition is applied if the `class` is equal to `school`, and there is a fallback value for any feature whose `class` field does not match any of the conditions (or does not exist at all).

{{
  <AppropriateImage
    imageId="reference-styles-layers-create-a-data-condition"
    alt="screenshot of the landuse layer in the Mapbox Basic style using conditional logic to style parks, hospitals, and schools differently"
  />
}}

#### Use a formula

The formula editor includes a full library of expressions with inline documentation for each expression. Use the formula editor for any expression that varies from the patterns used in the **Style across zoom range**, **Style across data range**, or **Style with data conditions** options, including any expression that uses math.

Below is an example of a formula that converts units in Mapbox Terrain’s contour layer from meters to feet.

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-layers-editor-formula-example"
      alt="screenshot of a formula that converts units in Mapbox Terrain’s contour layer from meters to feet"
    />
  </Browser>
}}

#### Reset value to default

Remove any data or zoom-based styling by clicking **Reset value to default**.

#### Apply existing value

Use **Apply existing value** to edit the value to match an existing value. Scroll through other layer properties to match the current layer to other layers in the style.

### Edit property as JSON

The Mapbox Studio style editor allows you to edit a style property's JSON directly. The style property JSON editor will facilitate workflows for advanced users and early adopters who want to use features not yet supported by the graphical interface, such as [identity functions](https://docs.mapbox.com/mapbox-gl-js/style-spec/#other-function).

{{
  <Browser>
    <Video
      src={EditJson}
      title="animated GIF showing how to find the style JSON editor at the bottom of the panel for each style property"
    />
  </Browser>
  <br />
}}

{{<Note>}}
The JSON editor can be toggled for any type of value. It will be open and _cannot be closed_ if you have entered a value that can _only_ be edited in the JSON editor.
{{</Note>}}

### Select data

There is a **Select data** panel for each layer. You can find it by clicking on the layer in the Layer list and then clicking the Select data tab. There are several options available to change the underlying data source.

{{<Note title="Layer from data">}}
  These are the same options that are available when adding a new [layer from data](#layer-from-data) to your style.
{{</Note>}}

{{
  <Browser>
    <Video
      src={SelectData}
      title="Select data for see map data in x-ray mode"
    />
  </Browser>
  <br />
}}

Read more about the available fields in the **Select data** panel below.

#### Source

This shows the tileset source that is used in the layer. Click on the name of the tileset to change the source to another tileset from your Mapbox account. The source can be either a vector tileset or a raster tileset. The remaining properties available on the **Select data** panel will vary based on whether the source tileset is a vector or raster source.

#### Type

For layers with **vector sources**, the available source types are:

- <span class='inline-block'>{{<Icon name='fill' inline={true} />}} Fill</span>
- <span class='inline-block'>{{<Icon name='extrusion' inline={true} />}} Fill-extrusion</span>
- <span class='inline-block'>{{<Icon name='circle' inline={true} />}} Circle</span>
- <span class='inline-block'>{{<Icon name='line' inline={true} />}} Line</span>
- <span class='inline-block'>{{<Icon name='transform-uppercase' inline={true} />}} Symbol</span>
- <span class='inline-block'>{{<Icon name='flame' inline={true} />}} Heatmap</span>

Some tilesets have a combination of points, linestrings, and polygons. Use filtering by *geometry type* (see [Filter](/studio-manual/reference/styles/#filter) section below) to have your layer style rules apply to only features of the selected geometry types.

For layers with **raster sources**, the only source type is {{<Icon name='raster' inline={true} />}} Raster.

#### Filter

The filter option allows you to limit the features that are displayed in a layer based on a data property or geometry type.

When you filter by data field, you're styling the layer based on a smaller segment of the tileset based on its attributes. This can be useful to highlight specific features in a tileset, or you can use it to classify data into sequential groups using multiple layers.

To filter data based on field value:

1. Click **+ Create filter** to bring up a list of data fields in your tileset (including **geometry-type**).
2. Select the data field you would like to filter by.
3. After the new _Data field_ is added to your filter list, use the dropdown to specify how you would like to construct the filter. Options include **is**, **is not**, **>** (greater than), **<** (less than), **>=** (greater than or equal to), and **<=** (less than or equal to).
4. Click inside the box to define the value to apply to the filter. If you are using Mapbox data, a drop-down menu of potential values appears. If you are using custom data, you have to type in the value.
5. Click **+ Add another condition** to add an additional filters.

#### Zoom extents

Set a minimum and maximum zoom. This will only work if tilesets exist at a specific zoom levels. For more information on adjusting the zoom extent of a tileset, read our [troubleshooting guide](https://docs.mapbox.com/help/troubleshooting/adjust-tileset-zoom-extent/).
