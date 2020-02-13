---
title: Tilesets API recipe reference
description: This feature is in beta. Learn about the correct format and syntax for Tilesets API recipes, or tile transformation documents.
topics:
- uploads
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
contentType: troubleshooting
---

{{<Note title='Public beta' theme="beta">}}
The Tilesets API features and workflows discussed in this guide are in public beta. All features and workflows are subject to potential future changes.
{{</Note>}}

**Current version:** `1`

Tileset recipes are tile transformation documents that tell the [Tilesets API](https://docs.mapbox.com/api/maps/#tilesets) how to turn tileset source data into vector tiles. Recipes must be constructed according to the rules in this recipe reference.  

## Recipe top-level fields

A recipe is a JSON object that must contain the following top-level fields:

| Required fields     | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **version**         | The version of the Tilesets API recipe reference that the recipe uses. The current version number is `1`. Any `version` value other than the current version or a previous version will result in an error. | `Integer` |
| **layers**          | The [`LayerObject`](#layerobject) is an object in which the keys are the names of the layer and their values are objects that represent the configuration and options for the layer. | `Object` |

```json
{
  "version": 1,
  "layers": { ... }
}
```

## LayerObject

A layer object is the primary way of describing how a vector tile layer should be created. It specifies where to retrieve source data, the precision of the data through zoom levels, and how to transform features and render them into tiles. The following fields are the top-level options for a single layer:

| Required fields     | Description            | Data type       |
| ------------------- | ---------------------- | --------------- |
| **source**         | The source data to use for this layer. Tileset sources are created with the [Create a tileset source](https://docs.mapbox.com/api/maps/#create-a-tileset-surce) endpoint of the Tilesets API. | `String` |
| **minzoom**         | Describes the lowest zoom level for the tileset. | `Integer` |
| **maxzoom**         | Describes the highest zoom level for the tileset. [More info.](#zoom-level-configuration)| `Integer` |

You can further refine the resulting tileset with the following optional fields:

| Optional fields     | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **features**        | Specifies the output on a _per feature_ basis. [More info.](#feature-configuration) | `Object` |
| **tiles**           | Specifies the output on a _per tile_ basis. [More info.](#tile-configurations) | `Object `|

The following describes every available field for a `LayerObject` and the JSON type that field must be.

```json
{
  "minzoom": Integer,
  "maxzoom": Integer,
  "features": {
    "id": {
      "attribute_id": String,
      "add_to_attributes": String,
      "output_id": Boolean
    },
    "attributes": {
      "zoom_element": Array,
      "set": Object,
      "allowed_output": Array
    },
    "filter": Object,
    "simplification": Number or Array
  },
  "tiles": {
    "extent": Integer,
    "buffer_size": Integer,
    "limit": Array,
    "union": [
      {
        "group_by": Array,
        "aggregate": Array,
        "maintain_direction": Boolean,
        "where": Array
      }
    ]
  }
}
```

## Basic example

The simplest example [tileset recipe](/help/glossary/tileset-recipe/) includes a layer name, a tileset source ID, a minimum zoom value, and a maximum zoom.

```json
{
  "version": 1,
  "layers": {
    "trees": {
      "source": "mapbox://tileset-source/{username}/trees-data",
      "minzoom": 4,
      "maxzoom": 8
    }
  }
}
```

## Multi-layer recipes

Recipes can also be arrays of recipe objects. This format can be used to create multi-layer tilesets. Recipes can have a maximum of 20 layers defined.

```json
{
  "version": 1,
  "layers": {
    "trees": { ... },
    "parks": { ... },
    "paths": { ... }
  }
}
```

## Layer name configuration

The layer name key is required for each `LayerObject` (e.g. "trees", "parks", and "paths" in the above example). This is the unique identifier for the layer of data in your final tileset. For any map each layer name must be unique. The layer name must be a string with only underscores (`_`) and alphanumeric characters.

## Source configuration

A  `source` refers to a [tileset source](/help/glossary/tileset-source/), which is a collection of geographic data stored as [line-delimited GeoJSON](/help/troubleshooting/tileset-sources/#line-delimited-geojson) on Mapbox.com. Tileset sources can be created via the [Create a tileset source endpoint](https://docs.mapbox.com/api/maps/#create-a-tileset-source) of the Tilesets API.

## Zoom level configuration

The `minzoom` and `maxzoom` configurations control the zoom levels at which your data will be tiled. They are required for a recipe. These values must be integers. The `minzoom` must be less than or equal to `maxzoom`, and both must be between the values of `0` and `16`.

Zoom levels play a large role in your output tileset. The higher the zoom level, the higher fidelity your data is as users zoom in. This also comes at a cost. Increasing zoom level fidelity creates exponentially more tiles!

It’s important to consider the cases your map is trying to solve when choosing zoom levels. If your users are going to be viewing the map at a global extent it’s not necessary to choose a high zoom. If your users are going to be viewing the map at a city or street level, high zooms will be helpful for the most accurate data.

If you know the precision to which you want your data to be represented, this table shows the approximate precision corresponding to various `minzoom` and `maxzoom` choices:

| **Zoom level** | **Precision in feet** | **Precision in meters** |
| -------------- | --------------------- | ----------------------- |
| 0              | 32000 ft              | 10000 m                 |
| 1              | 16000 ft              | 5000 m                  |
| 2              | 8000 ft               | 2500 m                  |
| 3              | 4000 ft               | 1250 m                  |
| 4              | 2000 ft               | 600 m                   |
| 5              | 1000 ft               | 300 m                   |
| 6              | 500 ft                | 150 m                   |
| 7              | 250 ft                | 80 m                    |
| 8              | 125 ft                | 40 m                    |
| 9              | 64 ft                 | 20 m                    |
| 10             | 32 ft                 | 10 m                    |
| 11             | 16 ft                 | 5 m                     |
| 12             | 8 ft                  | 2 m                     |
| 13             | 4 ft                  | 1 m                     |
| 14             | 2 ft                  | 0.5 m                   |
| 15             | 1 ft                  | 0.25 m                  |
| 16             | 0.5 ft                | 0.125 m                 |

## Feature configuration

The `features` configuration object is used to describe how features are individually processed into vector tiles. This field contains the following elements, which are evaluated in the order of the list provided below:

| Optional fields     | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **id**              | A JSON object that describes both how to identify a feature in a recipe and how that feature will be identified in the resulting tile. See the [feature IDs](#feature-ids) section for more details. | `Object` |
| **attributes**      | A JSON object that controls how attributes are modified and which attributes are allowed in the resulting tileset. | `Object` |
| **filter**          | A filter expression determining which features should be retained. If no filter is defined, the default filter is true and all features will be retained. | `Array` |
| **simplification**  | An integer expression or value that is greater than zero that controls the level of simplification that occurs for features. This integer value is relative to the extent provided for the tiles, with a larger value resulting in more simplification. | `Integer` or `Array` |

### Feature IDs

The `id` configuration gives you control over what field is used as the feature ID during tiling. It also allows you to specify where to put this ID in the resulting tileset as an attribute.

The following fields are allowed in the `id` object:

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **attribute_id**    | By default, the standard ID field in the tileset source GeoJSON will be used as IDs. But it is possible to use a specific attribute key for an ID instead. If this configuration option is provided, the attribute with a key that matches the string provided here will be used as the ID. | `String` |

In this example, the recipe indicates that the `iso_2` property in each feature should be the feature ID in the resulting tileset:

```json
{
  "features": {
    "id": {
      "attribute_id": "iso_2"
    }
  }
}
```

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **add_to_attributes** | 	Adds your original ID field to the attributes of features using the key name provided. This is helpful in retrieving original string IDs that have been converted to integers in the vector tile feature. | `String` |

In this example, the recipe saves the top-level ID field in the attribute `road_id` of the final vector tile. This is particularly helpful for saving top-level string IDs that will otherwise be converted to integers in the final vector tile.

```json
{
  "features": {
    "id": {
      "add_to_attributes": "road_id"
    }
  }
}
```

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **output_id**       | By default this value is `true`. Places the ID into the ID field of the vector tile. If you do not want numeric IDs in this field, change to `false`.| `Boolean` |

If `output_id` is true, the ID is saved to the `id` field within a feature of a vector tile. The current [Mapbox Vector Tile Specification](https://docs.mapbox.com/vector-tiles/specification/) does not allow for string-based IDs in features, so if this value is `true` any string IDs will be converted to an integer using a hash.


In this example, the recipe adds feature IDs to feature attributes using the attribute `my_id`, but does not place the ID in the final vector tile ID field.

```json
{
  "features": {
    "id": {
      "add_to_attributes": "my_id",
      "output_id": false
    }
  }
}
```

### Feature filters

The filter configuration is a single filter expression that results in a `true` or `false` evaluation for each feature as configured by the `minzoom` and `maxzoom`. This is the primary way to control which features are allowed into the final tileset on a per-feature basis. If no filter is provided, by default this results in a value of `true` for all features.

#### Filter expressions

In various configurations throughout the recipe, you have the ability to select relevant features by their [attributes](#feature-attributes). This is possible with filter expressions, which use the Mapbox GL JS expression syntax defined in the [Mapbox GL JS Style Spec](https://docs.mapbox.com/mapbox-gl-js/style-spec/#expression-reference).

Each filter is a JSON array that is evaluated for a boolean or value result using the following operations:

- Type assertion:
    - `array`, `boolean`, `number`, `object`, `string`, `typeof`
- Type conversion:
    - `to-boolean`, `to-number`, `to-string`
- Quoting:
    - `literal`
- Feature characteristics:
    - `geometry-type`, `id`, `zoom`
- Data retrieval:
    - `properties`, `at`, `get`, `has`, `length`
- Comparison:
    - `==`, `!=`, `<`, `>`, `<=`, `>=`, `step`
- Boolean operations
    - `!`, `all`, `any`
- Conditionals:
    - `case`, `coalesce`, `match`
- Local variables
    - `let`, `var`
- String manipulation
    - `concat`, `downcase`, `upcase`
- Arithmetic
    - `-`, `+`, `/`, `*`, `^`, `%`, `abs`, `ceil`, `floor`, `e`, `ln`, `ln2`, `log10`, `log2`, `max`, `min`, `round`, `sqrt`
- Trigonometry
    - `acos`, `asin`, `atan`, `cos`, `sin`, `tan`, `pi`

### Feature attributes

The `attributes` configuration allows for manipulation of attribute data, generation of new attributes, and removal of attributes. The available options are described below, and implemented in the order they are listed:

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **zoom_element**    | A JSON array that provides a list of attributes that are specified per zoom level in the source data. | `Array<String>` |

For each attributes with a specified `zoom_element`, the final output attribute at zoom level `N` will be the `Nth` element in the array in the source data. If no `zoom_element` is defined, no attributes are altered. If the zoom level is greater than or equal to the number of elements in the array, the last element is used.

Consider the following attributes for a single GeoJSON feature:

```json
{
  "type": "Feature",
  "geometry": { ... },
  "properties": { "name": [ null, null, "Main", "Main St.", "Main Street" ] }
}
```

In this example, the `zoom_element` array includes `name`. Using the attributes from the GeoJSON above, this feature would have no `name` attribute at zoom levels `0` and `1`, would have "Main" at zoom level `2`, "Main St." at zoom level `3`, and "Main Street" at zoom levels `4` and above.

```json
{
  "features": {
    "attributes": {
      "zoom_element": [ "name" ]
    }
  }
}
```

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **set**             | A JSON object mapping the names of attributes to be generated to filter expressions that return the new attribute values. Particularly helpful for generating ranking schemes to be used in styling expressions. | `Object` |

Consider the following attributes for a single GeoJSON feature:

```json
{
  "type": "Feature",
  "geometry": { ... },
  "properties": { "place": "state", "name": "California" }
}
```

In this example, the `set` attribute defines a new attribute to be included in the final tileset, `labelrank`, that is derived from the existing data's `place` attribute. Using the "match" expression, it assigns a value to features based on the value of "place". If "place" is equal to "country", then the `labelrank` attribute for the resulting feature will have a value of `0`, and so on. It also provides a default value of `5` for any features that have a "place" value that does not match any of the values explicitly provided.

```json
{
  "features": {
    "attributes": {
      "set": {
        "labelrank": [
          "match", [ "get", "place" ],
          "country", 0,
          "state", 1,
          "region", 2, "province", 2,
          "district", 3, "county", 3,
          "municipality", 4, "city", 4,
          5
        ]
      }
    }
  }
}
```

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **allowed_output**  | A JSON array of attributes that controls which attributes will be carried over into the resulting tileset. | `Array<String>` |

If an `allowed_output` array is provided only the attributes specified in the array will be saved to the tileset. This does not prevent the attributes that are not excluded by `allowed_output` from being used in filter expressions and other steps throughout the publish job.

In this example, features in the resulting tileset will only have two attributes, `name_en` & `name_es`:

```json
{
  "features": {
    "attributes": {
      "allowed_output": [ "name_en", "name_es" ]
    }
  }
}
```

### Feature simplification

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **simplification**  | Indicates the desired level of simplification. Larger values result in more simplification, in which some vertices are removed. The default value is `4`. The maximum value is `4096`. | `Integer` or `Array`|

The `simplification` expression or value describes the maximum distance that a point can be from the straight line that connects its two neighbors and still be considered to be on the line, and can therefore be removed safely. Any point with a distance that is larger than the `simplification` value is considered to be away from the line, and must be preserved.
<!--copyeditor disable reject-->
As you increase the `simplification` value, the number of vertices in each feature decreases. The [Tilesets API recipe validator](https://docs.mapbox.com/api/maps/#validate-a-recipe) will reject any `simplification` value that is more than `4096`. If you do not add a value for `simplification`, the Tilesets API will use `4`, the default value.

The resulting shape depends on the original shape of your feature. For instance, if your original feature is circular and you increase `simplification`, the result will look more like a polygon. If your original feature is a curved line and you increase `simplification`, the result will look more like a straight line.

The Tilesets API uses the [Ramer–Douglas–Peucker algorithm](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) to simplify features.
<!--copyeditor disable very-->
The `simplification` may be a constant number, or it may be an expression that evaluates to a number. A typical use for an [expression](https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions) for the `simplification` would be to use a minimal simplification at the layer's maximum zoom level, so it can be overzoomed with high precision, but to use a larger simplification at lower zoom levels that will never be magnified very far.

## Tile configurations

The `tiles` object contains the following elements, which are evaluated as each tile is being assembled from its component features:

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **buffer_size**     | Controls the size of the buffer that will be created in your vector tiles. | `Number` |

`buffer_size` represents a percentage of the size of a tile. The default buffer size is `0.5`. Note that the value of this attribute cannot be larger than `100`.

Buffers are particularly helpful for label point layers to avoid cutting labels of at tile boundaries.


| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **layer_size**      | Specifies the size limit in kibibytes of each layer. | `Integer` |

The default value is 500 KiB. The value cannot be larger than `500` or smaller than `1`. Configuring `layer_size` can be helpful for improving rendering speed.

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **remove_filled**   | Control which "filled" features are removed by specifying a `filter-expression`.   | `Array<Expression>` |

During tile creation it is possible for polygons to completely cover a tile and the area surrounding its buffer. These are called as "filled features". If all features within a tile are filled features, it may be useful for some tilesets to not create any tiles at all and expect that clients will look to higher zoom levels. To do this, you can use the `remove_filled` recipe.

The syntax utilizes a `filter-expression` to allow control over what features exactly should be removed.

```json
"tiles": {
  "remove_filled": expression
}
```

No tile will be created if:

- All features within the tile are considered filled features
- All features are matched by the filter-expression provided in `remove_filled`

The following example removes all tiles that contain only filled features:
```json
"tiles": {
  "remove_filled": true
}
```
The following example removes all tiles that contain only filled features after zoom level 5:

```json
"tiles": {
  "remove_filled": [">", [ "zoom" ], 5]
}
```

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **limit**           | A limitation rule that reduces the number of features for the specified type to a specific number, choosing the lowest or highest-numbered features according to some attribute. | `Array<Expression>` |

The `limit` field must be an array of limitation rules, each of which is evaluated in sequence to potentially limit the total number of features to be included in the final tile.

Rules that limit the total number of features in a tile have one of following forms:

- `[ "lowest_where", filter-expression , number , attribute ]`
- `[ "highest_where", filter-expression , number , attribute ]`

Rules that limit the number of features within a specified distance have one of the following forms:

- `[ "lowest_where_in_distance", filter-expression , number , attribute ]`
- `[ "highest_where_in_distance", filter-expression , number , attribute ]`

The number is a divisor of the total tile area. So, for instance, if the number is 256, the features will be spaced such that 256 of them are spaced evenly across the tile. The features with the lowest or highest value of attribute within each cluster are prioritized.

The difference is that `lowest_where` and `highest_where` choose any number of features that match the `filter-expression`, even if these features are right on top of each other, while `lowest_where_in_distance` and `highest_where_in_distance` choose any number of features that match the `filter-expression` while still being acceptably spatially-separated.

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **order**           | Specify the order of a sequence of features in the final output tile. The features with the lowest values are placed in the tile first. | `String` |

You can order the sequence of features in the final output tile by a specified attribute. The attribute values must be comparable (all strings or all numbers).

This example orders the features by the `sequence` attribute:

```json
"tiles": { "order": "sequence" }
```

<!-- copyeditor disable retext-passive -->
Renderers, including Mapbox GL, draw or place features in the order they appear in the tile. LineString and Polygon features that are drawn early in the sequence may be covered by overlapping features that are drawn later in the sequence. Conversely, labels that are placed early in the sequence will prevent labels of features later in the sequence from being placed nearby.
<!-- copyeditor enable retext-passive -->

You can follow these general guidelines: 
- The most important **LineStrings** and **Polygons** should have the _highest_ values for their `order` attribute, so they are not covered by overlapping features.
- The most important **labels** should have the _lowest_ values for their `order` attribute, so they are placed first.

Read more about how label visibility is affected by the order of features in the [Optimize map label placement](/help/troubleshooting/optimize-map-label-placement/#order-of-features-inside-layers) guide.

If no `order` attribute is specified, the features will appear in an unpredictable order.

### Feature union

| Optional field      | Description       | Data type |
| ------------------- | ----------------- | --------- |
| **union**           | Join features based on whether or not a defined spedified attribute matches. | `Object` |

You can union features together if a specified set of their attributes match. The simplest case unions all features that have exactly the same attributes:

```json
"tiles": { "union": [ { } ] }
```
The `union` specification object can contain an expression to union only features that match the specified expression as well as having matching attributes:

```json
"where": expression
```

Expression options:

- **`group_by: [attribute, attribute, attribute]`** - Use `group_by` to union features that have specified attributes that match, instead of requiring all attributes to match.
- **`aggregate: { attribute: type, attribute: type }`** - Use `aggregate` to accumulate the specified attributes from the unioned features. Attributes that are not specified in either `group_by` or `aggregate` will be removed. Acceptable types of aggregation include `sum` (to add numbers), `product` (to multiply numbers), `min` (to choose the lowest number), `max` (to choose the highest number), `mean` (to take the average of numbers), `comma` (to concatenate with a comma), or `concat` (to concatenate the feature data without a delimiter).
- **`maintain_direction: boolean`** - Use `maintain_direction: false` to make more compact unions of `LineString`s for which directionality doesn't matter. This is done by reversing some of the `LineString`s if that helps to connect them.

For example, you could specify the following to union only features where `highway=motorway`, and retain the average of their `speed_limit` attributes:

```json
"tiles": {
  "union":
  [
    {
      "where": [ "==", [ "get", "highway" ], "motorway" ],
      "maintain_direction": true,
      "aggregate": { "speed_limit": "mean" }
    }
  ]
}
```

This example uses `maintain_direction: true` (the default) because `motorway` roads are generally mapped as pairs of roadways whose direction indicates their one-way direction.

{{<Note title='Using union with zoom based properties'>}}
You can use union on `zoom-element` properties. If you are using union with a `zoom-element` property, the union will occur after the feature has been assigned the value based on the zoom level.
{{</Note>}}

## More resources
- For a list of example recipes that correspond to common tileset use-cases, see the [Tileset recipe examples](/help/troubleshooting/tileset-recipe-examples) page.
- The [Get started with the Tilesets API and CLI tutorial](/help/tutorials/get-started-tilesets-api-and-cli) walks you through the process of creating a new tileset, including creating and using a tileset recipe, with the [Tilesets CLI](https://github.com/mapbox/tilesets-cli/).
- The Tilesets API has several endpoints that can be used to validate, update, and read a tileset's recipe. Learn more in the [Tilesets API](https://docs.mapbox.com/api/maps/#tilesets) documentation.
