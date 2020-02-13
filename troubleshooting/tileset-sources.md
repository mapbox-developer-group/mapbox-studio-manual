---
title: Tileset sources and the Tilesets API
description: This feature is in beta. Learn about how to use line-delimited GeoJSON to create tileset sources and how to handle IDs in tileset sources.
topics:
- uploads
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
contentType: troubleshooting
---

{{<Note title='Public beta' theme="beta" >}}
Tileset sources and the Mapbox Tilesets API functionalities documented in this guide are in public beta. All features and workflows are subject to potential changes.
{{</Note>}}

## Tileset sources

A [tileset source](/help/glossary/tileset-source/) is a Mapbox service that allows you to save raw [line-delimited GeoJSON](#line-delimited-geojson) on Mapbox.com and reference these sources in a recipe using an ID. The same tileset source can be used across multiple tilesets. If your data is not changing, then you do not need to upload it every time you want to publish a job. You can specify the source data for a layer directly in a recipe. This example recipe shows the `source` field:

```json
"trees": {
  "source": "mapbox://tileset-source/{username}/trees-data",
  "minzoom": 4,
  "maxzoom": 8
}
```

A tileset source can be composed of up to 10 files, which all must be line-delimited GeoJSON. Tileset sources are created and managed using the [Tilesets API](https://docs.mapbox.com/api/maps/#create-a-tileset-source).

## Line-delimited GeoJSON
The Tilesets API requires that tileset sources be formatted as [line-delimited GeoJSON](https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON) (uncompressed line-delimited sequences of GeoJSON features). Unlike features being collected under a `FeatureCollection` array, as is done in GeoJSON, features are separated by newline characters in the file. Putting each feature on its own line makes it faster and easier to process individual features.

For example:

```json
{"type":"Feature","id":1,"geometry":{"type":"Point","coordinates":[115.7,12.2]},"properties":{"name":"cool feature"}}
{"type":"Feature","id":2,"geometry":{"type":"Point","coordinates":[125.7,12.2]},"properties":{"name":"neat feature"}}
{"type":"Feature","id":3,"geometry":{"type":"Point","coordinates":[135.7,12.2]},"properties":{"name":"bad place"}}
{"type":"Feature","id":4,"geometry":{"type":"Point","coordinates":[105.7,12.2]},"properties":{"name":"good place"}}
```

### Validate line-delimited GeoJSON
You can use the Tilesets CLI to validate a tileset source file by using the command:
```nix
$ tilesets validate-source path/to/your/data.json
```

To learn more about this command and other Tilesets CLI functions, see the [Tilesets CLI documentation](https://github.com/mapbox/tilesets-cli/#tilesets-cli).

### Convert GeoJSON to line-delimited GeoJSON
To convert a GeoJSON file to line-delimited GeoJSON, you can use the [Tippecanoe `tippecanoe-json-tool` command](https://github.com/mapbox/tippecanoe#tippecanoe-json-tool`):

```nix
$ tippecanoe-json-tool in.geojson > out.geojson.ld
```

### Convert other data formats to line-delimited GeoJSON

If your source data is in a vector format other than GeoJSON, such as a Shapefile or KML, you need to convert it to line-delimited GeoJSON before using it to create a tileset source. The [Fiona CLI tool `fio`](https://fiona.readthedocs.io/en/latest/cli.html#cat) outputs line-delimited GeoJSON by default and is a good option for converting files.

Here is an example converting a Shapefile into a line-delimited sequence of GeoJSON features:

```nix
$ fio cat ~/data/countries.shp > countries.geojson.ld
```

The [`ogr2ogr` utility from GDAL](https://gdal.org/programs/ogr2ogr.html) (version 2.4) can also convert many data formats to line-delimited GeoJSON:

```nix
$ ogr2ogr -f GeoJSONSeq countries.geojson.ld ~/data/countries.shp
```

## Feature IDs in the Tilesets API

The Tilesets API allows you to define which field in the tileset source is the identifier for your source features. By default,  the system will use the top-level `id` field in each GeoJSON feature. You can override this with the rules defined in the [Recipe reference section on IDs](/help/troubleshooting/tileset-recipe-reference/#feature-ids).

### Feature ID format
The Mapbox Vector Tile v2 Specification requires that a vector tile feature ID be an `Integer`. Because of this, the Tilesets API will convert any non-integer IDs into integer hash representations that are consistent across your entire tileset:

- **Integer IDs:** If an integer ID field is present in the tileset source, the resulting vector tile feature ID will have the same value.
- **String IDs:** If an ID field is present and is a string value, the resulting vector tile feature ID will be an integer hash representation unique to that string, between `0` and `2^53`.
- **Floating point value or empty string IDs:** If an ID field is present and is a floating point value or an empty string, or if there is no ID field, the resulting vector tile feature ID will be a randomly generated integer between `0` and `2^53`. While ID collision for unidentified features is unlikely, unique IDs aren't guaranteed since feature parsing occurs in a distributed environment. To guarantee unique identifiers, bring your own IDs.
- **Duplicate IDs:** Duplicate feature IDs can cause unexpected behavior in tilesets and should be avoided.

If you need your source data IDs to match your tileset IDs, you can either use integer IDs in the source data, or you can save the original ID of the feature as an attribute in the vector tiles using the [`add_to_attributes`](/help/troubleshooting/tileset-recipe-reference/#feature-ids) option in your recipe.
