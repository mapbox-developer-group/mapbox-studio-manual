---
title: Troubleshoot Tilesets API errors
description: This feature is in beta. Learn how to debug common errors with the Mapbox Tilesets API.
topics:
- uploads
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
  
contentType: troubleshooting
---

{{<Note title='Public beta' theme="beta" >}}
The Mapbox Tilesets API functionalities documented in this guide are in public beta. All features and workflows are subject to potential changes.
{{</Note>}}

This guide outlines possible errors that you might see when creating, modifying, or deleting [tileset sources](/help/glossary/tileset-source/), [tilesets](/help/glossary/tileset/), and [tileset recipes](/help/glossary/tileset-recipe/) using the [Tilesets API](https://docs.mapbox.com/api/maps/#tilesets).

### There are gaps of missing data in my tiles

If you notice that your tileset is missing points, lines, or polygons, it’s likely that the Tilesets API dropped some features because the tile size was approaching the maximum allowed size of 500 KB. If you view the `job_id` of this tileset, you will see warnings about how many tiles dropped features and a list of example tiles so you can diagnose the problem.

To avoid hitting the 500 KB limit, you should reduce the number and size of features. You can do this by:

- Increasing the recipe simplification level.
- Only allowing certain attributes to exist in the final tileset.
- Unioning adjoining features, such as `LineStrings`, which reduces the number of overall features in the tiles.

### My minzoom is different than expected
The Tilesets API tries to generate tiles for every requested zoom level. If the zoom levels in a tileset do not match the zoom levels in the corresponding recipe, this is due to features being filtered out based on the rules you have provided, which led to empty tiles at these zooms.

For example, if you specify a zoom level of `6` but your filtering syntax only starts accepting features at zoom `8`, once processing is complete the Tilesets API will dynamically set the tileset's `minzoom` to `8` since there are no tiles to be requested at zoom `6` or `7`.

### There are "notches" in my LineStrings at high zooms

Notches in `LineStrings` happen when high zoom tiles do not have buffers that are large enough. To avoid possible buffer-edge artifacts, set your [`buffer_size`](/help/troubleshooting/tileset-recipe-reference#tile-configurations) to something larger than the default of `0.5`. The recommended value is `6`.

### The features in my vector tiles have different IDs than the features in my source data

Vector tiles only support integer-based identifiers. If you provide an ID in the tileset source in any format other than integers, the Tilesets API will generate an integer hash of this value to use as the feature ID.

If you need to keep the original source IDs, you can do either of the following:
- Use integer IDs in the source data.
- Save the original ID of the feature as an attribute in the vector tiles using the [`add_to_attributes`](/help/troubleshooting/tileset-recipe-reference/#feature-ids) option in your recipe.

### A feature I expected to be in my new tileset isn't there
If a feature that you expected to see is not in the new tileset, it might have been dropped for one of the following reasons:

- The tileset source data was not valid GeoJSON. You can diagnose the problem by using the Tilesets CLI's [`validate-source`](https://github.com/mapbox/tilesets-cli/#validate-source) command to validate your source data.
- The feature was filtered out by your recipe. For more information on how and why a recipe might filter out a feature, see the [Tilesets API recipe reference](/help/troubleshooting/tileset-recipe-reference/#feature-filters).
- The feature has been simplified away at certain zoom levels. For more information on feature simplification, see the [Tilesets API recipe reference](/help/troubleshooting/tileset-recipe-reference/#feature-simplification).

### I'm not able to use GeometryCollection features in my tileset source
Tileset sources do not support GeoJSON [`GeometryCollection`](https://tools.ietf.org/html/rfc7946#section-3.1.8) features. If you have `GeometryCollection` features in your source data, you should split each of its sub-features into a unique, individual feature.

### There are no features in my tileset when I click "zoom to data" in Mapbox Studio
Depending on how your data is distributed or the zoom range you choose, knowing where your data is can be a challenge. Mapbox Studio tries to help you visualize your data at the right location, but due to how it makes this calculation, you may not see any features if there are not any at the mathematical center of the tileset source used to create the tileset. If this occurs, you will need to manually click and drag the map to your feature locations, rather than being able to click "zoom to data".

### A publish job failed
If a [tileset publish job](https://docs.mapbox.com/api/maps/#publish-a-tileset) fails, you can find information about any errors by querying the [Retrieve information about a single tileset job](https://docs.mapbox.com/api/maps/#retrieve-information-about-a-single-tileset-job) endpoint.

If no specific error information is available, the job may have failed because it used a tileset source that was deleted while the job was still processing. Make sure not to [delete a tileset source](https://docs.mapbox.com/api/maps/#delete-a-tileset-source) if any in-progress jobs reference it.

### If a publish job fails, I want to retry it automatically
If a [tileset publish job](https://docs.mapbox.com/api/maps/#publish-a-tileset) fails, you may be interested in retrying it automatically. To do this, set up your system so that it queries the [Retrieve information about a single tileset job](https://docs.mapbox.com/api/maps/#retrieve-information-about-a-single-tileset-job) endpoint on a set interval. If the response object indicates `stage: failed`, your system should go through the publish process again for that tileset job.

## Tilesets CLI error messages

The following is a list of common errors that you may see when using the [Tilesets CLI](https://github.com/mapbox/tilesets-cli/), which allows you to interact with and prepare data for the [Mapbox Tilesets API](https://docs.mapbox.com/api/maps/#tilesets).

### No features in source data.
You may see this error after you run the Tilesets CLI command to [publish a tileset](https://github.com/mapbox/tilesets-cli/#publish).

The problem could be that your tileset source is an empty file, or that it does not contain any line-delimited GeoJSON features. Check the tileset source to confirm that it contains valid features.

### No GeoJSON features processed. Make sure your GeoJSON is line-delimited.
You may see this error after you run the Tilesets CLI command to [publish a tileset](https://github.com/mapbox/tilesets-cli/#publish).

This error is most common when a tileset source is a GeoJSON file, but is not line-delimited GeoJSON. The Tilesets API requires all tileset sources to be line-delimited to process correctly. You can learn more about the line-delimited GeoJSON format and some conversion tools in the [Tileset sources guide](/help/troubleshooting/tileset-sources#line-delimited-geojson).

### No GeoJSON features to process.
You may see this error after you run the Tilesets CLI command to [create a tileset](https://github.com/mapbox/tilesets-cli/#create).

The problem may be that your data was not uploaded. Check that the data was indeed uploaded.

You may also see this error if the filter in your recipe is failing for some reason. If you have a filter condition like `[ "<=", [ "get", "minzoom" ], 5 ]`, and one or more of your features has a `null` value for `minzoom`, you could run into this error. You can use the [`coalesce`](https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-coalesce) operation in an expression to provide a default value to replace missing data. For instance, if you want a missing `minzoom` attribute to be treated as `0`, you could write this expression as `[ "<=", [ "coalesce", [ "get", "minzoom" ], 0 ], 5 ]`. For more information on recipe filters, see the [Recipe reference](/help/troubleshooting/tileset-recipe-reference/#feature-filters)
