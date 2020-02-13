---
title: Upload data to Mapbox
description: Learn how to prepare data for upload, interpret error messages, and troubleshoot failed uploads.
topics:
- uploads
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
contentType: troubleshooting
---

{{<Note title='Beta feature: Upload vector tilesets with the Tilesets API' theme="beta">}}

The [Mapbox Tilesets API](https://docs.mapbox.com/api/maps/#tilesets) has several beta endpoints that allow you to create custom vector tilesets. You can use these endpoints as an alternative to the Uploads API for tiling vector data using custom configuration rules. While these endpoints are in beta, they are subject to potential changes.

{{</Note>}}

If you want to upload your data to Mapbox, you've come to the right place! From GeoTIFFs to Shapefiles, whether you want to edit your data or style it on a map, this guide outlines the different types of data you can upload, techniques for uploading, and common pitfalls and how to troubleshoot them.

## Datasets vs. tilesets

[**Datasets**](/help/glossary/dataset) and [**tilesets**](/help/glossary/tileset) are two different types of files that you can create when uploading data to your Mapbox account.

**Datasets** provide access to feature geometries (points, lines, and polygons) and properties (attributes), both of which **can be edited** in the Mapbox Studio [dataset editor](https://www.mapbox.com/studio/datasets/) or through the [Mapbox Datasets API](https://docs.mapbox.com/api/maps/#datasets).

**Tilesets** are lightweight collections of vector data that are optimized for rendering and **are not editable** but can be styled in the Mapbox Studio style editor.

## Uploads

Techniques for uploading datasets and tilesets are listed below. The size of your data file will affect how much can be transferred at one time. See the section on [transfer limits](#accepted-file-types-and-transfer-limits) to know which method is right for you.

### Datasets

To add your data to a _dataset_, you can create a new, blank dataset through Mapbox Studio or through the Mapbox Datasets API and then add data to it. Note that the Mapbox Datasets API does not date GeoJSON files as uploads, but rather as the body of a POST request. See the [Mapbox Datasets API documentation](https://docs.mapbox.com/api/maps/#datasets) for more information.

### Tilesets

You can upload your data as a _tileset_ through:

- The [Mapbox Studio style editor](https://www.mapbox.com/studio-manual/reference/styles/)
- Your [tilesets page](https://www.mapbox.com/studio/tilesets/) in Mapbox Studio
- The [Mapbox Uploads API](https://docs.mapbox.com/api/maps/#uploads)

## Accepted file types and transfer limits

The accepted file types and transfer limits for dataset and tileset uploads include:

|File type|Datasets|Tilesets|Transfer limits
|---|:---:|:---:|:---:|
| [CSV](/help/glossary/csv) | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 5 Mb for datasets, 1 GB for tilesets |
| [GeoJSON](/help/glossary/geojson) | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 5 Mb for datasets, 1 GB for tilesets |
| [MBTiles](/help/glossary/mbtiles) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 25 GB
| [KML](/help/glossary/kml) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 260 Mb with 15 layers or fewer |
| [GPX](/help/glossary/gpx) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 260 Mb |
| [Shapefile](/help/glossary/shapefile) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 260 Mb (combined uncompressed size of `.shp` and `.dbf` files). You must upload shapefiles as a compressed (`.zip`) file.  |
| [GeoTIFF](/help/glossary/tiff) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 10 GB |

If your file size exceeds these limits, see the [Troubleshooting](#troubleshooting) section below.

{{<Note title='Dataset and dataset editor limits'>}}
An extra note on dataset uploads: Multiple files can be uploaded to the same dataset without limit — they need to be loaded 5 MB at a time in the [Mapbox Studio dataset editor](https://docs.mapbox.com/studio-manual/reference/datasets/). The size of a dataset is unlimited, but the Mapbox Studio dataset editor can only display datasets of 20 MB or smaller. Datasets that exceed 20 MB can still be downloaded from Mapbox Studio and accessed through the [Mapbox Datasets API](https://docs.mapbox.com/api/maps/#datasets).
{{</Note>}}

{{<Note title='Raster tilesets in Mapbox Studio'>}}
When uploading raster MBTiles to Mapbox Studio, be sure to use 512x512 tiles.
{{</Note>}}

## TIFF uploads

There are a couple requirements for TIFFs:

- Only 8-bit GeoTIFFs are supported. Run `gdalinfo` to find your GeoTIFF's resolution.
- Mapbox only accepts TIFFs with georeferencing information (GeoTIFFs). Make sure your TIFF is georeferenced before trying to upload.

If you are attempting to upload large TIFFs (multi GBs), here are some ways you can optimize your TIFF **before** uploading:

- Reproject to Web Mercator `EPSG:3857`.
- Set blocksize to `256x256`.
- If compression is needed, use `LZW`.
- Remove Alpha band, if applicable.

## Errors

Upload failures directly in Mapbox Studio typically occur for two reasons:

1. There's an explicit issue with your data.
1. The data didn't process within one hour (two hours for MBTiles files).

If there is an explicit issue with your data, you will receive a descriptive error message when the upload fails. Each message includes an error code that is described in full below. If your upload times out, read through the [troubleshooting recommendations below](#troubleshooting).

### Tileset upload errors

Message | Description | Solution
--- | --- | ---
`Failed to find a shapefile in your zip` | You tried to upload a zipfile that did not include one of the files that make up a shapefile: `.shp`, `.shx`, `.dbf`, `.prj`. | Make sure your zipfile contains each of these files.
`vector_layers must be an array of layer objects` | Your data source may not have any layers. | Check your data source in [QGIS](https://qgis.org) or use [ogr2ogr](http://www.gdal.org/ogr2ogr.html) to make sure it is correct.
`Metadata exceeds limit of 60kb` | The TileJSON file in your MBTiles upload contains too much information. | Remove extra or unneeded content from the TileJSON file (inside the MBTiles file).
`KML does not contain any layers.` | Your KML file is empty. | Make sure you have some layers in your data that are readable. Here's an example of a [valid KML file](https://github.com/mapbox/preprocessorcerer/blob/master/test/fixtures/kml/ok-special-character-layer.kml).
`X layers found. Maximum of X layers allowed.` | Your KML file has more than 15 layers. This can happen when combining many files into one. | Make sure to split up your layers into different files before uploading to Mapbox Studio. If you *must* use KML and require all the layers, use [`kml-split`](https://github.com/mapbox/kml-split), which breaks a KML into multiple files with fewer layers. Otherwise you can merge your layers into one and upload as either GeoJSON or a Shapefile.
`Tileset exceeds processing limit.` | Your MBTiles file has more items than the limit allows. | Try [adjusting & limiting your zoom levels](/help/troubleshooting/adjust-tileset-zoom-extent/).
`Dataset not found. It may have been deleted during processing into a tileset.` | The uploaded dataset was deleted during processing into a tileset. | Try uploading the dataset again, and do not delete the dataset until the tileset processing has successfully completed.
`Tile exceeds maximum size of 500k at z{zoom level}. Reduce the detail of data at this zoom level or omit it by adjusting your minzoom.` | The size of a specific tile in the MBTiles file is too large. | Reduce the detail of data at this zoom level or omit it by adjusting your minzoom.
`Grid exceeds maximum size of 500k at z{zoom level}. Reduce the detail of data at this zoom level or omit it by adjusting your minzoom.` | The size of the grid tile in the MBTiles file is too large. | Reduce the detail of data at this zoom level or omit it by adjusting your minzoom.
`Failed to parse geojson feature` | Your GeoJSON file has invalid syntax. | Make sure your GeoJSON is compliant with the [GeoJSON specification](http://geojson.org/). You can validate your GeoJSON with [GeoJSON Lint](https://github.com/JasonSanford/geojsonlint.com).
`Error creating Mapnik Datasource: Invalid geojson` | [Mapnik](https://github.com/mapnik/node-mapnik) is unable to process the GeoJSON file, likely due to invalid syntax. | Make sure your GeoJSON is compliant with the [GeoJSON specification](http://geojson.org/). You can validate your GeoJSON with the [`geojsonhint` package](https://github.com/mapbox/geojsonhint).
`Coordinates beyond web mercator range. Please check projection and lat/lon values.` | The coordinates in your file are beyond the extend of Web Mercator. | Check to see that your coordinates are in the correct order ([longitude, latitude]). Try visualizing your GeoJSON in [geojson.net](http://geojson.net/) to see if geometries appear where you expect. If they do, try [reprojecting to Web Mercator](#reproject-to-web-mercator) prior to uploading.
`Unknown filetype` | You have one of the following: <br/>- **Bad TIFF files** that are missing necessary information.<br/>- **Invalid MBTiles** where the MBTiles is not recognized as an SQLite database.<br/>- **Invalid MBTiles table data** where the MBTiles has data in the `tile_data` field of the `tiles` that does not represent a valid tile format (png, jpeg, or gzip compressed mapbox vector tile).<br>- **tmz2 files have been double zipped** meaning the `.zip` process has been applied twice on the same file. | - Try running `gdalinfo` to get more information.<br>- Make sure your MBtiles file conforms the [MBtiles specification](https://github.com/mapbox/mbtiles-spec).<br>- Check that the file has only been zipped once.
`Tile size exceeds limit. At least one vector tile is larger than 5MB.`|While generating tiles from your upload, at least one tile was larger than 5MB, which is too large.|Try simplifying your data where it is most dense. This typically happens with CSV point datasets where there are many millions of points in a single tile. Try using [Tippecanoe](https://github.com/mapbox/tippecanoe/#dropping-a-fraction-of-features-to-keep-under-tile-size-limits) to simplify and cluster points before uploading.
`Invalid tile based on the Mapbox Vector Tile spec: ClosePath command count is not 1` or `Invalid tile based on the Mapbox Vector Tile spec: Max count too large` | One of the tiles in your MBTiles file is invalid according to the Mapbox Vector Tile Specification|We need to make sure all vector tiles conform to the specification, so this makes sure any encoders are doing their job correctly. If you see this, please reach out to help@mapbox.com with the error message and we'll help you move forward.

### Dataset upload errors

Most dataset upload errors are related to syntax. Be sure to check your data for syntax errors before uploading. If you are working with GeoJSON data, consider using a tool like [`geojsonhint`](https://github.com/mapbox/geojsonhint) to lint your data before uploading. If your error is specifically related to a CSV upload, you can view our [CSV file errors troubleshooting guide](/help/troubleshooting/csv-upload-errors/) or investigate further by checking out [the library](https://github.com/mapbox/csv2geojson) we use to convert CSV files to GeoJSON.

Message | Description | Solution
--- | --- | ---
`Input failed old-style crs member is not recommended` | Your dataset contains a [crs attribute](https://macwright.org/2015/03/23/geojson-second-bite#projections). | Remove the crs attribute from your data before uploading.
`Input failed. Datasets don't support GeometryCollections or null geometries.` | Your dataset contains one or more [GeometryCollections](http://geojson.org/geojson-spec.html#geometrycollection) and/or a geometry that is set to null. | GeometryCollections and null geometries are not supported and must be removed from your dataset.

## Troubleshooting

If you receive a `Processing timed out.` message after a lengthy "processing" status, it is likely because your file has taken more than one hour (two hours for MBTiles files) to process and has timed out. To keep our upload queue fresh, we limit the time it takes for particularly large uploads. The following techniques can be used to update your data to improve processing time.

_Note: the troubleshooting advice here mostly relates to **tilesets**, although some may be applicable to **datasets** as well. If you are having trouble uploading datasets and your issue is not listed here, please [contact support](https://www.mapbox.com/contact)._

### Prevent feature duplication

Preventing feature duplication is important if you plan to use the [Tilequery API](https://docs.mapbox.com/api/maps/#tilequery) with a custom tileset. Feature duplication in a tileset can lead to unexpected duplicate results when using the Tilequery API with the tileset, even when the `dedupe` option is enabled.

To prevent feature duplication when creating a new tileset, use the [Tilesets API](https://docs.mapbox.com/api/maps/#tilesets) or [Tippecanoe](https://docs.mapbox.com/help/troubleshooting/large-data-tippecanoe/) to properly create globally unique IDs. Avoid using the Uploads API or the Mapbox Studio UI, which will not use any user-provided IDs or generate globally unique IDs.

### Reproject to Web Mercator

During upload processing, we reproject all geometries to [Web Mercator](https://en.wikipedia.org/wiki/Web_Mercator) (EPSG:3857) before encoding into vector tiles. During the vector tile encoding process, if your data isn't Web Mercator, each vertex must be reprojected during encoding, which can take a long time.

We suggest reprojecting your data before uploading to skip this process and speed up your upload. Here's how you can reproject your data with open source tools:

* GDAL's `ogr2ogr` command line utility. The following example is how to convert a Shapefile to Web Mercator.

        ogr2ogr output.shp -t_srs "EPSG:3857" input.shp

* QGIS allows for reprojection - `Right-click your layer -> Save As -> Select "Web Mercator EPSG:3857" as the output projection`.

### Multipart to singlepart

Multipart geometries can be complex – a single [feature](/help/glossary/features/) can be comprised of hundreds of thousands of polygons. These complex multipart geometries increase processing time and lead to timeouts.

To improve processing speeds, you can break each polygon into its own unique feature (singlepart) using QGIS. This will reduce the complexity per feature and allow the data to process faster. Note that each individual singlepart feature will share the attributes of the original feature.

![multipart to singlepart](https://c1.staticflickr.com/9/8857/28348187970_af83f9a5e4_b.jpg)

*Note that `population: 100` is duplicated. If you plan on styling based on attributes such as this, be wary of splitting into singleparts!*

There are a couple of helpful tools for doing this:

* In QGIS you can use either the `Vector -> Geometry Tools -> Multipart to singleparts` or the [Multipart Split plugin](http://plugins.qgis.org/plugins/splitmultipart/).
* If you are using GeoJSON and Node.js, you can use the [geojson-flatten](https://github.com/node-geojson/geojson-flatten) module.

### Simplification

Simplifying your data means removing complexity in the vertices of your geometry. Each vertex must be translated to vector tile coordinates. The fewer vertices to translate, the faster processing becomes. Often you can simplify your data without any visual change. It's important to watch out for *oversimplification*, though! Oversimplifying could remove important granularity in your data as well as potentially create invalid geometries if lines begin overlapping.

![simplification image](https://c1.staticflickr.com/9/8216/28486171002_f282ce64c4_b.jpg)

Simplification tools typically take a **tolerance** parameter to specify how much to simplify. Some tools to use for simplifying data:

* [Tippecanoe](https://github.com/mapbox/tippecanoe)
* QGIS vector simplification - `Vector -> Geometry Tools -> Simplify geometries`
* [Mapshaper.org](http://mapshaper.org/)
* Turf.js [simplify](http://turfjs.org/docs#simplify)

### Limit large features

Large features that span the entire dataset can slow down processing.

![illustration of a possible dataset](/help/img/misc/uploads-illustration.jpg)

<!-- copyeditor ignore represents -->
For example, consider this dataset of Hawaii. It contains a handful of smaller polygons that represent the islands. It also contains a large polygon that represents the surrounding water. Since the [_bounding box_](/help/glossary/bounding-box/) of the water polygon will intersect with nearly all the tile boundaries (gray lines), the water polygon will need to be processed for nearly every tile within this tileset.

**There is no exact solution for this, since it largely depends on the dataset and how you plan to style and use the data.**

Some possible solutions include:

* Remove the large polygon if it's not necessary for your use case.

* Split the large polygon into smaller polygons: After creating a digitized layer of smaller polygons, use that digitized layer to intersect with the large polygon and split it into pieces. Then add the newly split feature into your original dataset.

  QGIS geometry intersection - `Vector -> Geoprocessing Tools -> Intersection`

  *Caution*: This could create unwanted polygon borders, depending on how you plan to style the dataset.

### Slice large contour datasets

Large contour datasets can be particularly complex. Often they will have long, single feature linestrings wrapping across the entire dataset. Like the large polygons above, these can take a long time to process.

We recommend using [GRASS's `v.split` function](https://grass.osgeo.org/grass64/manuals/v.split.html) via QGIS to break lines into shorter, equal segments. Smaller geometries will improve processing speed. If the contour data is highly detailed (as in, requires zoom 22) we recommend breaking lines every 5 kilometers.

### Generate tilestats for MBTiles

We generate summary documents, known as tilestats, for uploads so Mapbox Studio can see what types of data and properties are in your spatial data. This takes quite a long time for large MBTiles files and can lead to timeouts. If you are using Tippecanoe to generate your MBTiles file you can bypass this step by using version 1.21.0 or later of Tippecanoe, which pre-generates a tilestats object. This can cut upload times in half.

If you aren't using Tippecanoe, you can still use the `tile-join` operation provided by Tippecanoe to generate the tilestats document. Make sure to at least use version 1.22.0.

```
tile-join -o with-tilestats.mbtiles original.mbtiles
```
