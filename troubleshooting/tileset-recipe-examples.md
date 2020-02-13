---
title: Tilesets API recipe examples
description: This feature is in beta. Use these example tiling recipes to learn how to transform custom data into tilesets using the Mapbox Tilesets API.
topics:
- uploads
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import Button from '@mapbox/mr-ui/button';"
contentType: troubleshooting
beta: true
---

{{<Note title='Public beta' theme="beta">}}

The Tilesets API features and workflows discussed in this guide are in public beta. All features and workflows are subject to potential future changes.

{{</Note>}}

When converting custom data into Mapbox vector tiles, there are many possible ways that the data might be transformed. To tell the Tilesets API how exactly to tile your data, you will need to provide a [recipe](/help/glossary/tileset-recipe) file.

This guide includes example use-cases and their corresponding recipes, plus notes about the purpose of each option. Read the [recipe reference](/help/troubleshooting/tileset-recipe-reference/) before relying on the examples recipes below so you can write recipes specifically for your data.

### Basic recipe using zoom levels

This is the least complex recipe you can write.

There are two required top-level fields: the `version` of the recipe reference and the `layers` object.

The `layers` object can contain multiple individual layers, which are themselves objects. Each individual layer object must have a layer name and must contain a [tileset source](https://docs.mapbox.com/help/glossary/tileset-source/) (`source`), the minimum zoom level at which you want your data to be tiled (`minzoom`), and the maximum zoom level at which you want your data to be tiled (`maxzoom`).

This example contains one layer in the `layers` object, named `my_new_layer`, and has a `minzoom` of `0` and a `maxzoom` of 8:

```json
{
  "version": 1,
  "layers": {
    "my_new_layer": {
      "source": "mapbox://tileset-source/{username}/{id}",
      "minzoom": 0,
      "maxzoom": 8
    }
  }
}
```

| Field               | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **source** | The source data to use for this layer. Tileset sources are created with the [Create a tileset source](https://docs.mapbox.com/api/maps/#create-a-tileset-source) endpoint of the Tilesets API. | `String` |
| **minzoom**         | Specify the minimum zoom at which your tileset will be available. | `Integer` |
| **maxzoom**         | Specify the maximum zoom at which your tileset will be available. (These tiles can be overzoomed to higher.) | `Integer` |

To learn more about zoom levels and how to configure them properly for your data, have a look at the Recipe reference's section on [Zoom level configuration](/help/troubleshooting/tileset-recipe-reference/#zoom-level-configuration).

### Points of Interest

Points of Interest (POIs) must be visible and not overcrowded to allow users to quickly distinguish each point. They are likely going to be labels on a map or points or circles with labels. Here’s a recipe suitable for POI data at low to medium zooms.

```json
{
  "version": 1,
  "layers": {
    "my_points_layer": {
      "source": "mapbox://tileset-source/{username}/pois",
      "minzoom": 0,
      "maxzoom": 10,
      "tiles": {
        "limit": [
          [ "lowest_where_in_distance", true, 256, "name" ]
        ]
      }
    }
  }
}
```

| Field               | Description       | Data type |
| ------------------- | ----------------- | --------- |
| ** source** | The source data to use for this layer. Tileset sources are created with the [Create a tileset source](https://docs.mapbox.com/api/maps/#create-a-tileset-surce) endpoint of the Tilesets API. | `String` |
| **minzoom**         | Specify the minimum zoom at which your tileset will be available. | `Integer` |
| **maxzoom**         | Specify the maximum zoom at which the tileset will be available. A value of 10 provides up to 10 meters of precision, which is enough for relative locations of features like POIs. | `Integer` |
| **tiles.limit.lowest_where_in_distance** | This property is used to keep the number of points in each tile to a minimum, which avoids having too many points for the POIs readable. 256 features per tile max.  | `Array<Expression>` |

**Example data**

This example recipe is compatible with the NYC Points of Interest dataset available on [Data.gov](https://catalog.data.gov/dataset/points-of-interest-4aea0).
{{
<Button href="/help/data/nyc_pois.geojson.ld" passthroughProps={{ download: "nyc_pois.geojson.ld" }} >
    <Icon name='arrow-down' inline={true} /> Download example POI data
</Button>
}}

### Natural Earth Data populated places

This example uses a global point dataset of populated places from [Natural Earth Data](https://www.naturalearthdata.com/) to build a label layer. POIs must be visible and not overcrowded to allow users to quickly distinguish each point. They are likely going to be labels on a map, or points or circles with labels. Here’s a recipe suitable for this dataset at low to medium zoom levels.

```json
{
  "version": 1,
  "layers": {
    "city_labels": {
      "source": "mapbox://tileset-source/{username}/populated-places",
      "minzoom" : 0,
      "maxzoom" : 7,
      "features" : {
          "attributes" : {
              "allowed_output" : [
                  "name_en", "SCALERANK"
              ]
          }
      },
      "tiles" : {
          "limit" : [
              [
                  "lowest_where_in_distance",
                  true,
                  50,
                  "SCALERANK"
              ]
          ]
      }
    }
  }
}
```

| Field               | Description       | Data type |
| ------------------- | ----------------- | --------- |
| ** source** | The source data to use for this layer. Tileset sources are created with the [Create a tileset source](https://docs.mapbox.com/api/maps/#create-a-tileset-surce) endpoint of the Tilesets API. | `String` |
| **minzoom**         | Specify the minimum zoom at which your tileset will be available. A value of 0 here ensures that cities will be visible at a global level. | `Integer` |
| **maxzoom**         | Specify the maximum zoom at which your tileset will be available. A value of 7 here allows users to zoom in and will show more cities, but we have no need for these labels at higher zoom levels in this particular case. | `Integer` |
| **features.attributes.allowed_output** | Specify which data attributes to carry through to the final tileset. Here we only keep the two attributes `name_en` and `SCALERANK` to keep tile sizes low (we don't need other fields for a label tileset). Note that the filter has to preserve `SCALERANK` as well as `name_en`, even though only `name_en` is needed for display. `SCALERANK` is necessary so that the limit filter can reference it. | `Array<String>` |
| **tiles.limit**     | Use the `limit` [filter](/help/troubleshooting/tileset-recipe-reference/#feature-configuration) to keep the number of cities per tile low. It will only keep points if another point is not already in its place with a higher `SCALERANK` value. | `Array<Expression>` |

**Example data**

Download the city data used in this recipe from [Natural Earth Data](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_populated_places.zip).


To transform the data from Natural Earth into a format that is compatible with a Tilesets API recipe, use the following [Tippecanoe](https://github.com/mapbox/tippecanoe) command:

```nix
$ tippecanoe-json-tool ../tippecanoe/ne_10m_populated_places.json > cities.json
```

### High density points for data visualization (data reduction)

```json
{
  "version": 1,
  "layers": {
    "dots": {
      "source": "mapbox://tileset-source/{username}/high-density-points-data",
      "minzoom": 0,
      "maxzoom": 15,
      "tiles": {
        "limit": [
          [ "lowest_where_in_distance", true, 50000, null ]
        ]
      }
    }
  }
}
```

| Field               | Description       | Data type |
| ------------------- | ----------------- | --------- |
| ** source** | The source data to use for this layer. Tileset sources are created with the [Create a tileset source](https://docs.mapbox.com/api/maps/#create-a-tileset-surce) endpoint of the Tilesets API. | `String` |
| **minzoom**         | Specify the minimum zoom at which your tileset will be available. A value of 0 here ensures that dots will be visible at a global level. | `Integer` |
| **maxzoom**         | Specify the maximum zoom at which your tileset will be available. A value of 15 here allows users to zoom in and will show more points as they do so. | `Integer` |
| **tiles.limit**     | A filter array that will keep up to 50,000 features in the tile while ensuring that the geographic density of the features is distributed evenly across the tiles. | `Array<Expression>` |


{{<Note title='Feature limits in vector tiles'>}}

The theoretical maximum value for a vector tile of normal extent (non configurable) is 16,777,216 point features. But a vector tile with this many features would hit the Tilesets API's 500 KB size limit, and the job request will not complete successfully. To avoid hitting this limit, you either need to reduce the number of point features included in your tileset source or define more aggressive filters in your recipe.

{{</Note>}}

### Union road features based on common attributes

This example uses a [TIGER](https://tigerweb.geo.census.gov/) road export and performs a join on roads that have the same name. In the final tileset, this will turn multiple features into a single, continuous feature. Performing a union operation on features based on attributes is helpful for keeping tileset size down and preventing unnecessary dropped features.

```json
{
  "version": 1,
  "layers": {
    "roads": {
      "source": "mapbox://tileset-source/{username}/tiger-data",
      "minzoom": 5,
      "maxzoom": 11,
      "features": {
        "filter": [
          "all",
          [ ">=", [ "get", "MTFCC" ], "S1000" ],
          [ "<=", [ "get", "MTFCC" ], "S2000" ]
        ]
      },
      "tiles": {
        "union": [
          {
            "group_by": [ "FULLNAME" ],
            "maintain_direction": false
          }
        ]
      }
    }
  }
}
```

| Field               | Description       | Data type |
| ------------------- | ----------------- | --------- |
| ** source** | The source data to use for this layer. Tileset sources are created with the [Create a tileset source](https://docs.mapbox.com/api/maps/#create-a-tileset-surce) endpoint of the Tilesets API. | `String` |
| **minzoom**         | Specify the minimum zoom at which your tileset will be available. A value of 5 here ensures that the roads will be visible only when a user zooms in. | `Integer` |
| **maxzoom**         | Specify the maximum zoom at which your tileset will be available. A value of 11 here ensures that the roads will not be visible if a user zooms in significantly. | `Integer` |
| **features.filter** | Keep all features with an `MTFCC` attribute that has a value between S1000 and S2000 (TIGER's classifications for roads). This filter-expression performs a lexical comparison on this string attribute.| `Array<Expression>` |
| **tiles.union** | Use the `group_by` method to union any features that have an identical `FULLNAME` attribute. Set `maintain_direction` to `false` so that block faces can be connected together no matter which direction their house numbering runs. | `Array<Object>` |


### Natural Earth: countries and polygon simplification

This recipe would be good for global extent interaction with country polygons. You would not need highly detailed country borders in this case, so you would use the `simplification` option in the `features` configuration to keep the number of nodes small in the final tiles.

```json
{
  "version": 1,
  "layers": {
    "countries": {
      "source": "mapbox://tileset-source/{username}/country-polygons",
      "minzoom": 0,
      "maxzoom": 5,
      "features": {
        "simplification": 20
      }
    }
  }
}
```

| Field               | Description       | Data type |
| ------------------- | ----------------- | --------- |
| ** source** | The source data to use for this layer. Tileset sources are created with the [Create a tileset source](https://docs.mapbox.com/api/maps/#create-a-tileset-surce) endpoint of the Tilesets API. | `String` |
| **minzoom**         | Specify the minimum zoom at which your tileset will be available. A value of 0 here ensures that the countries will be visible at a global level. | `Integer` |
| **maxzoom**         | Specify the maximum zoom at which your tileset will be available. A value of 5 here ensures that the countries will be visible as the user zooms in a little bit, but will not be visible if they zoom in significantly. | `Integer` |
| **features.simplification** | Specify an integer value or expression that is greater than zero to control the level of simplification that occurs for features. The value provided is relative to the extent provided for the tiles, with a larger value resulting in more simplification. A value of 20 here indicates a moderate amount of simplification that will become more apparent as a user zooms in on country boundaries. | `Integer expression` |

### Natural Earth: roads

This is a complex example that uses Natural Earth Data’s roads. The recipe generates a ranked `quality` attribute for each feature based on the road `type` defined in the source data. Then it filters attributes by these newly created `quality` attributes to keep only specific quality features per zoom level.

For example, the "Bypass" road type is the fourth ranked item (zero-indexed at 3). With the verbose filter definition below, you will only see "Bypass" style streets show up at zoom level 3 or greater.

```json
{
  "version": 1,
  "layers": {
    "roads": {
      "source": "mapbox://tileset-source/{username}/road-data",
      "minzoom": 0,
      "maxzoom": 5,
      "features": {
        "attributes": {
          "set": {
            "quality": [
              "match",
              [ "get", "type" ],
              "Ferry Route", 0,
              "Major Highway", 1,
              "Secondary Highway", 2,
              "Bypass", 3,
              "Beltway", 4,
              "Road", 5,
              "Track", 5,
              6
            ]
          }
        },
        "filter": [ "<=", [ "get", "quality" ], [ "zoom" ] ],
        "simplification": [ "match", [ "zoom" ], 5, 1, 10 ]
      }
    }
  }
}
```

| Field               | Description       | Data type |
| ------------------- | ----------------- | --------- |
| ** source** | The source data to use for this layer. Tileset sources are created with the [Create a tileset source](https://docs.mapbox.com/api/maps/#create-a-tileset-surce) endpoint of the Tilesets API. | `String` |
| **minzoom**         | Specify the minimum zoom at which your tileset will be available. A value of 0 here ensures that the roads will be visible at a global level. | `Integer` |
| **maxzoom**         | Specify the maximum zoom at which your tileset will be available. A value of 5 here ensures that the roads will be visible as the user zooms in a little bit, but will not be generated in higher precision if they zoom in significantly. | `Integer` |
| **features.attributes.set** | A JSON object that maps the names of attributes to be generated to filter expressions and returns the new attribute values for the final tileset. Here it is being used to generate a new `quality` attribute based on the `type` field included in the original data. | `Object` |
| **features.filter** | A verbose filter definition. Its use here excludes any feature from tiles where their `quality` attribute is greater than the current zoom level. For example, features with a `quality` attribute of "Bypass" will not be visible at zoom levels lower than or equal to 3. | `Array<Expression>` |
| **features.simplification** | Specify an integer value or expression that is greater than zero to control the level of simplification that occurs for features. The expression provided here gives a high precision (1) at the maximum zoom level (5) but lower precision (10) at other zoom levels. | `Integer expression` |


### Building footprints

This recipe can be used to create a tileset that contains building footprints. It uses the [Rhode Island buildings](https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/RhodeIsland.zip) dataset from Microsoft data.

We can conclude that an appropriate value for `maxzoom` is 15 because this represents a [one foot resolution](/help/troubleshooting/tileset-recipe-reference/#zoom-level-configuration) on the ground.

We have chosen a value of 13 for `minzoom` based on the following considerations and assumptions:

- It is reasonable to have about 50,000 features in a tile
- A building lot is approximately 5,000 square feet
- So a tile at the minimum zoom should be about 50000 * 5000 = 250,000,000 square feet
- Sqrt(250,000,000) ~= 15811
- 360.0 / (2 ** 13) / .00000274 ~= 16038, which is pretty close to that (.00000274 is the length in feet of a degree at the equator)

```json
{
  "version": 1,
  "layers": {
    "building_footprints": {
      "source": "mapbox://tileset-source/{username}/buildings",    
      "minzoom": 13,
      "maxzoom": 15
    }
  }
}
```

| Field               | Description       | Data type |
| ------------------- | ----------------- | --------- |
| ** source** | The source data to use for this layer. Tileset sources are created with the [Create a tileset source](https://docs.mapbox.com/api/maps/#create-a-tileset-surce) endpoint of the Tilesets API. | `String` |
| **minzoom**         | Specify the minimum zoom at which your tileset will be available. A value of 13 here ensures that the buildings will be visible when a user has zoomed in significantly. | `Integer` |
| **maxzoom**         | Specify the maximum zoom at which your tileset will be available. A value of 15 here ensures that the buildings will be visible when a user has zoomed in significantly. | `Integer` |

**Example data**

[Rhode Island buildings](https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/RhodeIsland.zip)

Convert the downloaded data to line-delimited GeoJSON with the [`tippecanoe-json-tool`](https://github.com/mapbox/tippecanoe#tippecanoe-json-tool) command.

```nix
$ unzip -p RhodeIsland.zip | tippecanoe-json-tool > RhodeIsland.json
```

### Intricate road network

This lengthy example creates a road network tileset from a road's [tileset source](/help/glossary/tileset-source/). It applies 4 filter criteria based on the `zoom`, `highway`, and `place` attributes of the source's features. It then creates new `streetrank` and `labelrank` attributes for each filter using the `set` operator and specifies that the `priority` attribute should be used to define the `zoom_element` of the features in the final tileset.

Finally, it limits the output tiles such that:
- No tile will have more than 20 `highway` features and will determine which features to keep based on their `streetrank` (regardless of whether or not features overlap).
- No tile will have more than 200 `name` features and will determine which features to keep based on their `labelrank` value (and will also drop features that overlap based on their `lablerank`).

```json
{
  "version": 1,
  "layers": {
    "road_network": {
      "source": "mapbox://tileset-source/username/roads",
      "minzoom": 0,
      "maxzoom": 14,
      "features": {
        "filter": [
          "any",
          [
            "all",
            [ ">=", [ "zoom" ], 0 ],
            [ "match", [ "get", "highway" ],
              "motorway", true, "trunk", true, "primary", true, false ]
          ],
          [
            "all",
            [ ">=", [ "zoom" ], 6 ],
            [ "match", [ "get", "highway" ],
              "secondary", true, "tertiary", true, false ]
          ],
          [
            "all",
            [ ">=", [ "zoom" ], 11 ],
            [ "match", [ "get", "highway" ],
              "residential", true, "unclassified", true, false ]
          ],
          [
            "all",
            [ ">=", [ "zoom" ], 13 ],
            [ "match", [ "get", "highway" ], "service", true, false ]
          ],
          [ "has", "place" ]
        ],
        "attributes": {
          "set": {
            "streetrank": [ "match", [ "get", "highway" ],
              "motorway", 0, "trunk", 0, "primary", 0,
              "secondary", 1, "tertiary", 1,
              "residential", 2, "unclassified", 2,
              "service", 3,
              4
            ],
            "labelrank": [ "match", [ "get", "place" ],
              "country", 0,
              "state", 1,
              "region", 2, "province", 2,
              "district", 3, "county", 3,
              "municipality", 4, "city", 4,
              5
            ]
          },
          "zoom_element": [ "priority" ]
        }
      },
      "tiles": {
        "limit": [
          [ "lowest_where", [ "has", "highway" ], 20, "streetrank" ],
          [ "lowest_where_in_distance", [ "has", "name" ], 200, "labelrank" ]
        ]
      }
    }
  }
}
```
