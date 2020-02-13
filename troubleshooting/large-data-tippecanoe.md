---
title: Manage large data files for Mapbox Studio with Tippecanoe
description: Learn how to manage big data files and make a scale-independent view of your data.
topics:
- uploads
- data
contentType: troubleshooting
---

If your data is large in size and exceeds the [maximum upload limit](/help/troubleshooting/uploads/#accepted-file-types-and-transfer-limits), you may not be able to upload it to Mapbox Studio. This guide will show you how to use [Tippecanoe](https://github.com/mapbox/tippecanoe), a command-line utility, to convert your data into smaller files suitable for uploading to Mapbox Studio.

## About Tippecanoe

Tippecanoe creates vector [tilesets](/help/glossary/tileset/) from large [GeoJSON](/help/glossary/geojson/) feature collections. The output is an [MBTiles](/help/glossary/mbtiles/) file that can be uploaded to Mapbox.

## Getting started

Before you begin, your data must be in the form of a GeoJSON file. There are many tools you can use to do this conversion &mdash; we recommend using [ogr2ogr](http://www.gdal.org/ogr2ogr.html).

You will also need to install [Tippecanoe](https://github.com/mapbox/tippecanoe#installation). Please note that Tippecanoe is [not supported on Windows](https://github.com/mapbox/tippecanoe/issues/81).

## Reducing the size of a large data file

The GeoJSON file in the example below (`new-york_new-york_buildings.geojson`) is 761.5 MB in size. Since this exceeds the [upload limit](/help/troubleshooting/uploads/#accepted-file-types-and-transfer-limits) for a GeoJSON file, Tippecanoe will need to be used to reduce the size of this file.

### Converting GeoJSON to vector tiles

Once Tippecanoe is installed, you can convert your GeoJSON file to MBTiles. In your command line, navigate to the directory that contains the GeoJSON file, and then run the following command:

```
tippecanoe -o nyc-buildings.mbtiles new-york_new-york_buildings.geojson
```

Where `new-york_new-york_buildings.geojson` is the name of your GeoJSON file, and `nyc-buildings.mbtiles` is the name you should give to the resulting MBTiles file.

Tippecanoe will then read and sort the features and convert them to the MBTiles data format. Tippecanoe has [many other options](https://github.com/mapbox/tippecanoe#options), but you will stick to the command above for this guide.

The resulting MBTiles file will be saved in your current directory. You now have a new [vector tileset](/help/glossary/tileset/) that has a size of 4.7 Mb - dramatically less than the original GeoJSON file!

## Next steps

Now that you've converted your GeoJSON file to a vector tileset, you can upload it to Mapbox Studio to use in a custom style. Read the [Mapbox Studio Manual uploads section](https://www.mapbox.com/studio-manual/overview/geospatial-data/#preparing-your-data-for-upload) to learn more about uploading your custom data.

Once your data has been uploaded, take a look at the [Mapbox Studio Manual style section](https://www.mapbox.com/studio-manual/reference/styles/) for more information on styling [line layers](https://www.mapbox.com/studio-manual/reference/styles/#line-layer), [fill layers](https://www.mapbox.com/studio-manual/reference/styles/#fill-layer), [fill-extrusion layers](https://www.mapbox.com/studio-manual/reference/styles/#fill-extrusion-layer), [circle layers](https://www.mapbox.com/studio-manual/reference/styles/#circle-layer), and [symbol layers](https://www.mapbox.com/studio-manual/reference/styles/#symbol-layer) in the Mapbox Studio style editor.
