---
title: 往 Mapbox 上传数据
description: 了解如何准备要上传的数据，解释错误消息以及对失败的上传进行故障排除。
topics:
- uploads
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
contentType: troubleshooting
---

{{<Note title='Beta feature: Upload vector tilesets with the Tilesets API' theme="beta">}}

[Mapbox Tilesets API](https://docs.mapbox.com/api/maps/#tilesets) 具有多个 beta 端点，可用于创建自定义矢量 tileset。您可以使用这些端点来替代 Uploads API，以使用自定义配置规则来平铺矢量数据。这些端点处于 beta 状态时，它们可能会发生变化。

{{</Note>}}

如果您想将数据上传到 Mapbox，那么您来对地方了！从 GeoTIFF 到 Shapefile，无论是要编辑数据还是在地图上设置样式，本指南都概述了可以上传的数据的不同类型，上传的技术以及常见的陷阱以及如何对它们进行故障排除。

## Datasets vs. tilesets

[**Datasets**](/help/glossary/dataset) 和 [**tilesets**](/help/glossary/tileset) 是将数据上传到 Mapbox 帐户时可以创建的两种不同类型的文件。

**Datasets** 提供对要素几何（点，线和面）和属性的访问，都可以在 Mapbox Studio [dataset editor](https://www.mapbox.com/studio/datasets/) 中进行编辑或通过 [Mapbox Datasets API](https://docs.mapbox.com/api/maps/#datasets)。

**Tilesets** 是针对渲染而优化的矢量数据的轻量级集合，并且是不可编辑的，但可以在 Mapbox Studio 样式编辑器中设置样式。

## 上传

下面是一些上传数据集和矢量瓦片集的技术。数据文件的大小将影响一次可以传输的数量。请参阅[transfer limits](#accepted-file-types-and-transfer-limits) ，以了解哪种方法最适合您。

### Datasets

要将数据添加到 _dataset_ ，您可以通过 Mapbox Studio 或 Mapbox Datasets API 创建一个新的空白数据集，然后向其中添加数据。请注意，Mapbox Datasets API 不会将 GeoJSON 文件标为上传，而是标为 POST 请求的正文。有关更多信息，请参见 [Mapbox Datasets API documentation](https://docs.mapbox.com/api/maps/#datasets)。

### Tilesets

您可以通过下面的方式将数据上传为 _tileset_ ：

- [Mapbox Studio style editor](https://www.mapbox.com/studio-manual/reference/styles/)
- Mapbox Studio 中的 [tilesets page](https://www.mapbox.com/studio/tilesets/)
- [Mapbox Uploads API](https://docs.mapbox.com/api/maps/#uploads)

## 可接受的文件类型和传输限制

可接受文件类型和传输限制包括：

|File type|Datasets|Tilesets|Transfer limits
|---|:---:|:---:|:---:|
| [CSV](/help/glossary/csv) | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 5 Mb for datasets, 1 GB for tilesets |
| [GeoJSON](/help/glossary/geojson) | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 5 Mb for datasets, 1 GB for tilesets |
| [MBTiles](/help/glossary/mbtiles) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 25 GB
| [KML](/help/glossary/kml) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 260 Mb with 15 layers or fewer |
| [GPX](/help/glossary/gpx) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 260 Mb |
| [Shapefile](/help/glossary/shapefile) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 260 Mb (combined uncompressed size of `.shp` and `.dbf` files). You must upload shapefiles as a compressed (`.zip`) file.  |
| [GeoTIFF](/help/glossary/tiff) | | <span style="line-height: 0;" class="color-green inline round"><svg class='icon h30 w30 inline-block align-middle'><use xlink:href='#icon-check'/></svg></span> | 10 GB |

如果您的文件超过了限制, 查看下面的 [Troubleshooting](#troubleshooting) 部分。

{{<Note title='Dataset and dataset editor limits'>}}
关于数据集上传的额外说明：多个文件可以无限制地上传到同一数据集-需要在 [Mapbox Studio dataset editor](https://docs.mapbox.com/studio-manual/reference/datasets/) 中一次加载 5 MB。数据集的大小不受限制，但是 Mapbox Studio 数据集编辑器只能显示 20 MB 或更小的数据集。不过您仍然可以从Mapbox Studio 下载超过 20 MB 的数据集，并通过 [Mapbox Datasets API](https://docs.mapbox.com/api/maps/#datasets)进行访问。
{{</Note>}}

{{<Note title='Raster tilesets in Mapbox Studio'>}}
将栅格 MBTiles 上传到 Mapbox Studio 时，请确保使用 512x512 切片。
{{</Note>}}

## 上传 TIFF

对 TIFFs 有一些要求:

- 只支持 8-bit 的 GeoTIFFs。运行 `gdalinfo` 来确认您的 GeoTIFF 分辨率。
- Mapbox 只接受包含地理信息的 TIFFs (GeoTIFFs)。

如果您尝试上传大型 TIFF（多个 GB），可以通过以下几种方法上传：

- 重新投影到 Web Mercator`EPSG：3857`。
- 将块大小设置为`256x256`。
- 如果需要压缩，请使用 `LZW`。
- 删除 Alpha 频段（如果适用）。

## 错误

直接在 Mapbox Studio 中直接上传失败的原因通常有两个：

1. 您的数据存在明显的问题。
2. 数据在一小时内未处理（MBTiles 文件为两小时）。

如果您的数据存在明显问题，则上传失败时，您将收到描述性错误消息。每条消息都包含一个错误代码，下面将对其进行全面介绍。如果您的上传超时，请仔细阅读[troubleshooting recommendations below](#troubleshooting)。

### Tileset 上传错误信息

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

### Dataset 上传错误信息

大多数数据集上传错误与语法有关。上传之前，请务必检查数据中是否存在语法错误。如果您使用的是 GeoJSON 数据，请考虑在上传之前使用类似[`geojsonhint`](https://github.com/mapbox/geojsonhint) 的工具来整理数据。如果您的错误与 CSV 上传特别相关，则可以查看我们的[CSV file errors troubleshooting guide](/help/troubleshooting/csv-upload-errors/) 或通过这个 [the library](https://github.com/mapbox/csv2geojson) ，我们用于将 CSV 文件转换为GeoJSON。

Message | Description | Solution
--- | --- | ---
`Input failed old-style crs member is not recommended` | Your dataset contains a [crs attribute](https://macwright.org/2015/03/23/geojson-second-bite#projections). | Remove the crs attribute from your data before uploading.
`Input failed. Datasets don't support GeometryCollections or null geometries.` | Your dataset contains one or more [GeometryCollections](http://geojson.org/geojson-spec.html#geometrycollection) and/or a geometry that is set to null. | GeometryCollections and null geometries are not supported and must be removed from your dataset.

## 故障排除

如果在长时间的“处理中”状态后收到 `Processing timed out.` 消息，则可能是因为您的文件已花费了一个多小时（MBTiles 文件为两个小时）来处理并超时。为了使上传队列保持最新状态，我们限制了特别大的上传所花费的时间。以下技术可用于更新数据以缩短处理时间。

_Note: 尽管此处的一些故障排除建议也可能适用于 **datasets**，但此处的故障排除建议主要与 **tilesets** 有关。如果您在上传数据集时遇到问题，但此处未列出您的问题，请 [contact support](https://www.mapbox.com/contact)。_

### 防止功能重复

如果您计划将 [Tilequery API](https://docs.mapbox.com/api/maps/#tilequery) 与自定义瓦片一起使用，则防止功能重复非常重要。在 Tilelet 中使用 Tilequery API 时，即使在`dedupe`选项中，tileset 中的功能重复也会导致意外的重复结果。

要在创建新的图瓦片集时防止功能重复，请使用 [Tilesets API](https://docs.mapbox.com/api/maps/#tilesets) 或 [Tippecanoe](https://docs.mapbox.com/help/troubleshooting/large-data-tippecanoe/) 来正确创建全局唯一ID。避免使用 Uploads API 或 Mapbox Studio UI，因为它们不会使用任何用户提供的 ID 或生成全局唯一的 ID。

### 重投影到 Web Mercator

在上传处理期间，我们将所有几何图形重新投影到 [Web Mercator](https://en.wikipedia.org/wiki/Web_Mercator) (EPSG:3857) ，然后再编码为矢量瓦片。在矢量切片编码过程中，如果您的数据不是 Web Mercator，则在编码过程中必须重新投影每个顶点，这可能需要很长时间。

我们建议您在上传之前重新投影数据，以跳过此过程并加快上传速度。使用开源工具重新投影数据的方法如下：

* GDAL's `ogr2ogr` command line utility. 下面的示例是如何将 Shapefile 转换为 Web Mercator。

        ogr2ogr output.shp -t_srs "EPSG:3857" input.shp

* QGIS allows for reprojection - `Right-click your layer -> Save As -> Select "Web Mercator EPSG:3857" as the output projection`.

### 多视到单视

多视几何形状可能很复杂：一个[feature](/help/glossary/features/) 可以由成千上万个多边形组成。这些复杂的多部分几何形状会增加处理时间并导致超时。

为了提高处理速度，您可以使用 QGIS 将每个多边形分解成自己独特的特征（单个部分）。这将降低每个功能的复杂性，并使数据处理更快。请注意，每个单独的零件特征都将共享原始特征的属性。

![multipart to singlepart](https://c1.staticflickr.com/9/8857/28348187970_af83f9a5e4_b.jpg)

*Note that `population: 100` is duplicated. If you plan on styling based on attributes such as this, be wary of splitting into singleparts!*

有一些比较好用的工具供参考：

* 在 QGIS 中使用`Vector -> Geometry Tools -> Multipart to singleparts` 或者 [Multipart Split plugin](http://plugins.qgis.org/plugins/splitmultipart/).
* 如果您使用的是 GeoJSON 和 Node.js，则可以使用 [geojson-flatten](https://github.com/node-geojson/geojson-flatten) 模块。

### 简化

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
