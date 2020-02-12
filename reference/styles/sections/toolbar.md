---
title: Toolbar
description: The toolbar is always along the top of the screen in Mapbox Studio style editor.
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Note from '@mapbox/dr-ui/note';"
- "import Video from '@mapbox/dr-ui/video';"
- "import EditorCollisionBoxes from '../../../../video/reference-styles-toolbar-collision-boxes.mp4'"
- "import EditorCompare from '../../../../video/reference-styles-toolbar-compare.mp4';"
- "import EditorOverdrawInspector from '../../../../video/reference-styles-toolbar-overdraw-inspector.mp4';"
- "import EditorRaster from '../../../../video/reference-styles-toolbar-raster.mp4';"
- "import EditorSatelliteImagery from '../../../../video/reference-styles-toolbar-satellite-imagery.mp4';"
- "import EditorTileBoundaries from '../../../../video/reference-styles-toolbar-tile-boundaries.mp4';"
contentType: reference
---

## Toolbar

The toolbar is always along the top of the screen in Mapbox Studio style editor.

### Share and Publish

For more information on sharing and publishing your style, see [Publish your style](/studio-manual/overview/publish-your-style/).

### Print panel

Click **{{<Icon name='printer' inline={true} />}} Print** to toggle the print panel on and off. Position your map and specify **Print export settings** in the print panel. Settings include image dimensions (in inches or centimeters), resolution (in PPI), and file format (PNG or JPG). The maximum image export is 8,000&nbsp;px by 8,000&nbsp;px.

Mapbox Studio offers 100 high resolution image exports per account. If you need more than 100, you can purchase an annual license that allows for a higher number of image exports and prints. Contact [Mapbox sales](https://www.mapbox.com/contact/sales) for more information.

If you do not want to purchase an annual license that provides more than 100 high resolution image exports, you can use the [Mapbox Static Images API playground](https://docs.mapbox.com/help/interactive-tools/static-api-playground). With the [Mapbox Static Images API](https://docs.mapbox.com/api/maps/#static-images), image exports can be up to 1,280&nbsp;px by 1,280&nbsp;px in size. While enabling retina may improve the quality of the image, you cannot export at a higher resolution using the Static Images API.

**Be sure to read the [Mapbox print policy](https://docs.mapbox.com/help/how-mapbox-works/static-maps/#static-images-for-print) before printing any Mapbox maps.**

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-publish-print-export-settings"
      alt="screenshot of the print panel with print export settings as described above"
    />
  </Browser>
}}

### Settings

The Settings menu includes a lot of options including:

- Various [**View modes**](#view-modes) for debugging your style.
- [**Supported Mapbox SDK versions**](#supported-mapbox-sdk-versions) for checking compatibility with Mapbox GL JS and our mobile Maps SDKs.
- [**Default map position**](#default-map-position) for setting and locking map position.
- [**Compare styles**](#compare-styles) for comparing this style to other styles in your account.
- A [**Layer overview**](#layer-overview) covering all layers and source layers used in this style.
- The ability to toggle [**Source compositing**](#source-compositing) on and off.

#### View modes

Toggle **Satellite imagery** to compare your style to satellite imagery. This is useful for checking the accuracy of map features.

{{
  <Browser>
    <Video
      src={EditorSatelliteImagery}
      title="toggle satellite imagery"
    />
  </Browser>
  <br />
}}

Toggle **Raster tiles** to view raster tiles for your style. Note that style updates may be delayed in the raster tiles.

{{
  <Browser>
    <Video
      src={EditorRaster}
      title="Preview the raster version of this style."
    />
  </Browser>
  <br />
}}


Toggle **Tile boundaries** to see tile boundaries. Occasionally features will be affected by crossing tile boundaries. Toggling visibility of tile boundaries is useful for debugging clipped or missing symbols.

{{
  <Browser>
    <Video
      src={EditorTileBoundaries}
      title="tile boundaries"
    />
  </Browser>
  <br />
}}

Toggle **Collision boxes** to see collision boxes for symbols. This is also useful for debugging clipped or missing symbols.

{{
  <Browser>
    <Video
      src={EditorCollisionBoxes}
      title="collision boxes"
    />
  </Browser>
  <br />
}}

Toggle **Overdraw inspector**.

{{
  <Browser>
    <Video
      src={EditorOverdrawInspector}
      title="overdraw inspector"
    />
  </Browser>
}}

#### Supported Mapbox SDK versions

Make sure that all features you are using are supported with specific versions of Mapbox SDKs and view warnings related to compatibility.

#### Default map position

Set the zoom, bearing (rotation), pitch, and latitude and longitude coordinates for the current map view. You can also toggle **Lock default position** so that the map returns to the current position whenever the style is opened.

#### Compare styles

Compare your working style with another style from your account. Select the style to compare, then click Compare to open a dialog box. Use the swipe arrows to compare maps. Hit Escape or click away from the Compare tool to dismiss the window.

{{
  <Browser>
    <Video
      src={EditorCompare}
      title="compare styles swipe"
    />
  </Browser>
}}

#### Layer overview

The _Layer overview_ section shows a list of tilesets used in style layers that rely on the tileset. Tilesets are [sources](https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources). Sources include vector or raster data files uploaded to your account. Your account also includes access to [Mapbox tilesets](https://docs.mapbox.com/vector-tiles/).

There is a limit of 15 unique sources permitted in styles made with the style editor. You can check the number of sources used in **Settings** _Layer overview_ popover.

Source compositing does not reduce the number of sources counted toward this limit. For example, if you are using a template style that references both the Mapbox Streets and Terrain tilesets (in other words, two tileset sources) and you add one custom tileset, even if the tilesets are bundled into one composite source, the total number of tileset sources used would be 3. In this example, you could add an additional 12 sources before hitting the 15 source limit.

{{
  <AppropriateImage
    imageId="reference-styles-toolbar-layer-reference"
    alt="screenshot of the style overview section of the settings popover"
  />
  <br />
}}

For more information on source limits, see our [Source limits in Mapbox Studio styles](https://docs.mapbox.com/help/troubleshooting/reduce-tileset-sources/) troubleshooting guide.

#### Source compositing

Any sources in your Mapbox Studio style are composited, or combined, by default. When source compositing is enabled, any Mapbox vector tilesets used and any custom vector tilesets added to your style in the future will be bundled into one composite source. Compositing improves label placement calculations across tilesets and makes maps load faster.

Source composting can be turned on or off in the Settings section of the toolbar. When source compositing is turned off, you cannot make label placement calculations between layers from different sources.

According to the [Mapbox Vector Tile Specification](https://docs.mapbox.com/vector-tiles/specification/), no two vector layers in a vector tileset may have the same ID. If you try to composite sources with the same ID, a modal will be displayed in the style editor to walk you through resolving the name conflicts.

{{<Note title="Source limit">}}
There is a limit of 15 unique sources permitted in styles made with the style editor. Source compositing does not reduce the number of sources counted toward this limit. For example, if you are using a template style that references both the Mapbox Streets and Terrain tilesets (in other words, two tileset sources) and you add two custom tilesets, even if the tilesets are bundled into one composite source, the total number of tileset sources would be 4. In this example, you could add an additional 11 sources before hitting the 15 source limit. For more information on source limits see our [Source limits in Mapbox Studio styles](https://docs.mapbox.com/help/troubleshooting/reduce-tileset-sources/) troubleshooting guide.</p>
{{</Note>}}

### History

See a complete history of changes made in the current session (since opening the style editor). Read more on this functionality in our blog post, <a href="https://www.mapbox.com/blog/using-undo-redo-in-mapbox-studio-with-visual-history/">Visual undo & redo in Mapbox Studio</a>.

<h4 id='images-toolbar'> {{<Icon name='picture' inline={true} />}} Images</h4>

Add and remove images from your style's [sprite](https://docs.mapbox.com/help/glossary/sprite/) in this popover. To display images on your map, select in the layer panel on the left.

{{
  <AppropriateImage
    imageId="reference-styles-toolbar-manage-style-images"
    alt="screenshot of the Manage style images popover"
  />
}}

### Fonts

Add and remove all fonts associated with your Mapbox account (across all styles). Browse _Mapbox fonts_ or upload custom TTF or OTF fonts.

### Light

When using a fill extrusion layer, you can specify the anchor, color, and intensity of lighting. Each can also be adjusted by zoom level.

### Help

Open Help for links to our help page and contact page. Turn on Tips to become oriented in the style editor. See a full list map interactions and keyboard shortcuts.
