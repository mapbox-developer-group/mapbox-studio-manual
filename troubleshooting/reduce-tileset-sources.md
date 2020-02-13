---
title: Source limits in Mapbox Studio styles
description: Read about strategies for reducing the number of tileset sources in Mapbox Studio styles.
topics:
- data
- map design
contentType: troubleshooting
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import Video from '@mapbox/dr-ui/video';"
  - "import StyleReference from '../../video/reduce-tileset-sources-style-reference.mp4';"
  - "import SourceCompositing from '../../video/reduce-tileset-sources-source-compositing.mp4';"
---

[Styles](/help/glossary/style/) made with the Mapbox Studio style editor or uploaded to your Mapbox account have a limit of 15 [sources](/help/glossary/source/). If you try to add more than 15 sources to your style, you will receive the error message `Failed to update style`.

## Check number of sources used

You can check the number of sources used in your style in the Mapbox Studio style editor. Open the style in the style editor, click on the **{{<Icon inline={true} name="sprocket" />}} Settings** option in the top toolbar, and scroll to the **Layer overview** section.

{{
  <Video
    src={StyleReference}
    title="screenshot of the source list section of the Mapbox Studio style reference popover"
  />
}}

## Reduce the number of sources

There are several strategies you can use to reduce the number of sources you're using in your style.

### Combine sources outside Mapbox Studio

The most effective way to reduce the number of sources you're using in a style is to combine data from multiple data files or tilesets into a single tileset. You can do this in several ways:

- **GIS application**: Use a tool outside of Mapbox, such as QGIS or ArcGIS, to merge your geospatial data before you upload it to Mapbox.
- **Tippecanoe**: Use our open source command line tool, [Tippecanoe](https://github.com/mapbox/tippecanoe#tippecanoe), to add multiple data files to a single tileset source, export to MBTiles, and upload them all at once to Mapbox.
- **Mapbox Studio Classic**: Use our legacy desktop tool [Mapbox Studio Classic](https://github.com/mapbox/mapbox-studio-classic) to add multiple data files to a single tileset source, export to MBTiles, and upload them all at once to Mapbox. Learn more about creating sources with multiple data layers in the [Mapbox Studio Classic Manual](https://github.com/mapbox/mapbox-studio-classic/tree/mb-pages/docs/studio-classic-manual/03-classic-manual-sources.md#create-a-new-source).


### Style combined sources

Once you've combined sources, there are a few different ways to style the data in the Mapbox Studio style editor:

- **Data-driven styling**: You can use the style editor to assign styles based on your data's properties. Learn more about creating data-driven styles in the [Mapbox Studio Manual styles section](https://docs.mapbox.com/studio-manual/reference/styles/#value-options) and our [Make a choropleth map tutorial series](/help/tutorials/choropleth-studio-gl-pt-1/).
- **Filtering**: As long as your data has properties that uniquely identify each of the original datasets, you can also use Mapbox Studio's filter functionality to create distinct style layers from a single tileset source. Learn more about filtering in the [Mapbox Studio Manual styles section](https://docs.mapbox.com/studio-manual/reference/styles/#filter).


### Make sure source compositing is on

Sources used in a Mapbox Studio style are composited, or combined, by default. Source compositing **does not reduce the number of sources counted toward this limit**, but if source compositing is on, tileset sources that are not being used in any style layers will automatically be removed from the composite source. 

To check whether source compositing is on, open your style in the style editor, click on the **{{<Icon inline={true} name="sprocket" />}} Settings** option in the top toolbar, and scroll to the **Source compositing** section.

{{
  <Video
    src={SourceCompositing}
    title="screenshot of the source compositing section of the Mapbox Studio Settings popover"
  />
}}

### Remove an unused source

A source that is no longer needed can be removed from the style by deleting all layers using said source. To delete a layer dependent on a particular source, select the layer in the `Layers` panel and click the `Delete` button at the top of the panel. Note that not all layers can be deleted.
