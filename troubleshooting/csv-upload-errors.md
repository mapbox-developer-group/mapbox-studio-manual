---
title: CSV file errors
description: Learn how to fix errors when uploading CSV files.
topics:
- data
- uploads
contentType: troubleshooting
---

You can upload a CSV file to Mapbox Studio from the [tilesets](https://www.mapbox.com/studio/tilesets/) page, the [Mapbox Studio dataset editor](https://www.mapbox.com/studio/datasets/) page, or by using the Mapbox [Uploads API](https://docs.mapbox.com/api/maps/#uploads).

## Tilesets vs. datasets

If you upload your CSV via the Mapbox Studio [tilesets](https://www.mapbox.com/studio/tilesets/) page or via the [Uploads API](https://docs.mapbox.com/api/maps/#uploads), the geometries and data attributes of the resulting features will not be editable. Use the [Mapbox Studio dataset editor](https://www.mapbox.com/studio/datasets/) if you'd like to edit your data before you add it to your map. For more information on the difference between datasets and tilesets, see the [Mapbox Studio Manual](https://www.mapbox.com/studio-manual/overview/geospatial-data/).

## File format

When uploading [CSV](/help/glossary/csv) files, keep the following in mind:

- CSV files can be no larger than **5 MB** for datasets, and **1 GB** for tilesets.
- CSV files must be in [UTF-8](https://en.wikipedia.org/wiki/UTF-8) encoding.
- CSV files must contain coordinates (latitude and longitude) and can only represent point features, not lines or polygons.
- CSV files must be comma (`,`) separated.
- Data imported via CSV will be encoded as a string type in the Mapbox Studio dataset editor. If you want to code any of your imported data as numbers, you can edit the fields individually in the dataset editor or upload your data in [GeoJSON format](/help/glossary/geojson).
- If a row of data is invalid, that row will not be included in the resulting tileset.

The first line of your CSV file must contain column headers, and column headers must include *latitude* and *longitude* fields at a minimum. The following are acceptable column headers for columns that contain latitude and longitude values. Note that `x` and `y` are valid column headers when you are uploading data as a tileset, but they are _not_ valid column headers when you are uploading data as a dataset.

- Latitude:
  - `latitude`
  - `lat`
  -  `y`
- Longitude:
  - `longitude`
  - `lon`
  - `long`
  - `lng`
  - `x`

If your coordinates are GeoJSON or WKT encoded, you can name that field `geojson` or `wkt` respectively. See the [Mapnik documentation on CSVs](https://github.com/mapnik/mapnik/wiki/CSV-Plugin) for more information. If a column has an empty header, a column label will be generated automatically.

### Example

Here's an example of how to format a CSV file to upload in Mapbox Studio:

```
title,latitude,longitude
University at Albany,42.686744,-73.822852
Siena College,42.718588,-73.755328
Union College,42.814403,-73.930967
The College of St. Rose,42.664351,-73.786562
```
