---
title: Geospatial data
description: Learn how uploading data works in Mapbox Studio.
order: 4
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import Note from '@mapbox/dr-ui/note';"
  - "import YouAreHere from '../../components/illustrations/you-are-here'"
  - "import Browser from '@mapbox/dr-ui/browser';"
  - "import Video from '@mapbox/dr-ui/video';"
  - "import ChevronousText from '@mapbox/mr-ui/chevronous-text';"
  - "import TilesetUpload from '../../video/tileset-upload.mp4';"
contentType: guide
---

<p className="txt-l">With Mapbox Studio, you can upload and manage custom data to be added to a map.</p>

{{
  <YouAreHere
    activeItems={["Upload", "Dataset", "Tileset"]}
  />
}}

## Types of uploads

[**Datasets**](https://www.mapbox.com/help/define-dataset) and [**tilesets**](https://www.mapbox.com/help/define-tileset) are two different formats you can create when uploading custom data to your Mapbox account. If you want to upload data and edit it before adding to a map, upload as a **dataset**. If you want to upload data to add directly to a map, upload as a **tileset**.

{{<Note>}}
If you are uploading raster data, you must upload as a tileset.
{{</Note>}}

### Uploading data you can edit (datasets)

When you upload your data as a **dataset**, feature geometries (points, lines, and polygons) and properties (attributes) can be edited, added, or removed in the Mapbox Studio [dataset editor](https://www.mapbox.com/studio/datasets/). Once you have finished editing your dataset, you will need to save it and export it as a tileset to add it to a style.

{{
  <Browser>
    <img src="/studio-manual/img/studio/dataset-modify-feature.gif" alt="" />
  </Browser>
}}

### Uploading data to add to a map (tilesets)

**Tilesets** are lightweight collections of vector or raster data that are optimized for rendering and *are not editable* but can be styled in the Mapbox Studio style editor. When you upload vector data as a tileset, it is simplified and cut up into vector tiles that can be used directly in your style. Once data is converted to a tileset, it is no longer editable.

{{
  <Browser>
    <Video
      src={TilesetUpload}
      title="Working with an uploaded tileset in the style editor"
    />
  </Browser>
}}

## Preparing your data for upload

Mapbox Studio allows you to upload your own custom data to use in your map styles. You can upload your files on the [Tilesets page](/studio-manual/reference/tilesets/#upload-file).

For a smooth upload process, it helps to make sure that:

- Geospatial data has been projected to [Web Mercator](https://en.wikipedia.org/wiki/Web_Mercator) (EPSG:3857).
- [GeoJSON](https://www.mapbox.com/help/define-geojson/) files have been validated for proper syntax.
- Unnecessary properties have been removed.

### Uploading using the Uploads API

Or, you can use the [Mapbox Uploads API](https://www.mapbox.com/api-documentation/maps/#uploads) to upload an accepted file that is transformed into a tileset. With the Uploads API, Mapbox provides you with a temporary S3 bucket to stage uploads that can be started and monitored.

### Accepted file types and transfer limits

The accepted file types <span class='none inline-ml'>and transfer limits</span> for dataset and tileset uploads include:

|File type|Datasets|Tilesets|Transfer limits
|---|:---:|:---:|:---:|
| [CSV](https://www.mapbox.com/help/define-csv) | {{<Icon name='check' inline={true} />}} | {{<Icon name='check' inline={true} />}} | 5 MB for datasets, 1 GB for tilesets |
| [GeoJSON](https://www.mapbox.com/help/define-geojson) | {{<Icon name='check' inline={true} />}} | {{<Icon name='check' inline={true} />}}</span> | 5 MB for datasets, 1 GB for tilesets |
| [MBTiles](https://www.mapbox.com/help/define-mbtiles) | | {{<Icon name='check' inline={true} />}} | 25 GB
| [KML](https://www.mapbox.com/help/define-kml) | | {{<Icon name='check' inline={true} />}} | 260 MB with 15 layers or fewer |
| [GPX](https://www.mapbox.com/help/define-gpx) | | {{<Icon name='check' inline={true} />}} | 260 MB |
| [Shapefile](https://www.mapbox.com/help/define-shapefile) | | {{<Icon name='check' inline={true} />}} | 260 MB (combined uncompressed size of `.shp` and `.dbf` files) You must upload shapefiles as a compressed `.zip` file. |
| [GeoTIFF](https://www.mapbox.com/help/define-tiff) | | {{<Icon name='check' inline={true} />}} | 10 GB |

If your file size exceeds these limits or if you run into errors, see our [troubleshooting guide](https://www.mapbox.com/help/uploads/).

{{<Note>}}
Multiple files can be uploaded to the same dataset without limit &mdash; they need to be loaded 5 MB at a time. The size of a dataset is unlimited, but the Mapbox Studio dataset editor can only display datasets of 20 MB or smaller. These datasets can still be downloaded from Mapbox Studio and accessed through the [Datasets API](https://www.mapbox.com/api-documentation/maps/#datasets).
{{</Note>}}

### Zoom levels and simplification

When an upload is completed in Mapbox Studio, it is rendered into a [tileset](https://www.mapbox.com/help/define-tileset/). After the tileset is created, your data is sometimes simplified at lower zoom levels to reduce the complexity of the data and make sure that each tile is below a certain size. Mapbox Studio does this to make your map load faster in areas where details wouldn't be normally noticed.

Uploaded tilesets are also given a zoom extent. This zoom extent is the total zoom range in which features are visible, which is listed on the [tileset information page](/studio-manual/reference/tilesets/#tileset-information-page). If you need your tileset to be visible at a different zoom extent, you can [adjust this manually](https://www.mapbox.com/help/adjust-tileset-zoom-extent/).

{{<Note>}}
Zoom extents for vector tiles affect the zoom levels at which tiles are _generated_. This is different from the zoom levels at which the data is _visible_: Vector tilesets can be styled up to zoom level 22, and zoom levels higher than the zoom extent will be styled using the highest zoom tiles available.
{{</Note>}}

## More about tilesets

See the Tilesets section for more information on how to upload and manage tilesets in Mapbox Studio.

{{
  <a href='/studio-manual/reference/tilesets/' className="unprose txt-bold link">
    <ChevronousText text="Read about tilesets" />
  </a>
}}

## More about datasets

See the Datasets section for more information on how to upload, manage, and edit datasets in Mapbox Studio.

{{
  <a href='/studio-manual/reference/datasets' className="unprose txt-bold link">
    <ChevronousText text="Read about datasets" />
  </a>
}}

## Troubleshooting common upload errors

Having trouble with uploads? Try our troubleshooting guides.

{{
  <a href='/studio-manual/help/#troubleshooting' className="unprose txt-bold link">
    <ChevronousText text="View troubleshooting guides" />
  </a>
}}
