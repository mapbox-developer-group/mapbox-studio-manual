---
title: Adjust the zoom extent of your tileset
description: Learn how to manually adjust the zoom extent of your tilesets.
topics:
- uploads
- data
- map design
- web apps
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
contentType: troubleshooting
---

When you upload data to your Mapbox account as a [tileset](/help/glossary/tileset), you may notice that your data has been **simplified** or that it **is not rendered at all zoom levels**. The Mapbox Streets source data is also limited to specific zoom levels. This guide provides an explanation for why this happens. It also describes some techniques for manually adjusting the zoom extent of your tilesets and for adding your own sources with custom zoom levels.

## Why this happens

Data simplification and zoom level limiting make your map load faster and limit the file size of the resulting tileset.

### Vector data simplification

Simplification at lower zoom levels reduces complexity on the map in places where the details would not even be noticed. This simplification makes the map load more efficiently.

The amount of data that can exist in a single vector tile has an upper size limit. By simplifying complex vector features during the upload process, we make sure each tile in your vector tileset falls below this upper limit and will display correctly on your maps.

### Minimum and maximum zoom levels

Sometimes, it is not possible to display data legibly at a given zoom level. For example, a dense series of topographic lines would turn into a jumble of features when viewing the map at a low zoom level. Conversely, lower-resolution data would appear too coarse at high zoom levels. To prevent both of these potential issues, the Mapbox Uploads API analyzes your data and automatically determines the maximum and minimum zoom levels at which tiles should be rendered.

For raster tilesets, the uploaded image resolution sets the minzoom and maxzoom levels. Higher resolution images will result in the tileset rendering at more zoom levels.

_Note: regardless of maximum zoom level, data can be [overzoomed](/help/glossary/overzoom/) and visualized to zoom 22._

## Adjust the zoom extent of your tileset

There are two techniques for adjusting the zoom extent of your tilesets: [using Tippecanoe to transform the data](#transform-data-with-tippecanoe), or [using the Tilesets API to update a tileset's recipe](#update-zoom-extent-in-a-tilesets-recipe). Tileset recipes and the Tilesets API endpoint used to update them are in beta and are subject to potential changes.  

### Transform data with Tippecanoe
Much of the data behind Mapbox Streets comes from OpenStreetMap. You can download this data using [Overpass Turbo](/help/tutorials/overpass-turbo/#use-overpass-turbo) and adjust its zoom level options with [Tippecanoe](https://github.com/mapbox/tippecanoe), a command-line utility for converting complex data into vector tiles. To download, prepare, and upload data from OpenStreetMap to your Mapbox account:

1. Download the data you want to work with using [Overpass Turbo](/help/tutorials/overpass-turbo/#use-overpass-turbo).
2. Install Tippecanoe using the command line. First, install [Homebrew](https://brew.sh/), then run `brew install tippecanoe`.
3. Create your tileset using Tippecanoe's zoom level options. For example, to set the minimum zoom to 2 and maximum zoom to 7, the command would look something like this:
```
tippecanoe -o geography_regions.mbtiles -Z 2 -z 7 Documents/geography_regions.geojson
```
4. Upload the [MBTiles](/help/glossary/mbtiles/) file you created in step 3 to your Mapbox account as a tileset.

For more details on installing and using Tippecanoe to transform your data, read the [Manage large data files for Mapbox Studio with Tippecanoe](/help/troubleshooting/large-data-tippecanoe) guide.

### Update zoom extent in a tileset's recipe

{{<Note title='Tilesets API public beta' theme="beta">}}
The Tilesets API features discussed in this section are in public beta and are subject to potential changes.
{{</Note>}}

You can also use the Mapbox Tilesets API to update a tileset's zoom extent in its [tileset recipe](/help/glossary/tileset-recipe/). You can do this using the [Tilesets CLI](https://github.com/mapbox/tilesets-cli/blob/master/README.md#update-recipe) or by using the [Tilesets API](https://docs.mapbox.com/api/maps/#update-a-tilesets-recipe) directly. For more information on zoom level configuration in tileset recipes, see the [Tileset recipe reference](/help/troubleshooting/tileset-recipe-reference/#zoom-level-configuration) and the [Basic recipe using zoom levels example](https://docs.mapbox.com/help/troubleshooting/tileset-recipe-examples/#basic-recipe-using-zoom-levels).
