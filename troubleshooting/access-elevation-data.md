---
title: Access elevation data
description: Learn how to access elevation data in Mapbox tilesets.
topics:
- data
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
  - "import UserAccessToken from '../../components/user-access-token';"
contentType: troubleshooting
---

There are two different Mapbox tilesets that contain elevation data:

- **Mapbox Terrain-RGB**, a raster tileset.
- **Mapbox Terrain**, a vector tileset.

This guide explains what each is used for and how to access the data.

## Mapbox Terrain-RGB

**Mapbox Terrain-RGB** contains global elevation data encoded in raster PNG tiles as color values that can be decoded to raw heights in meters. You can use Terrain-RGB for a wide variety of applications both visual and analytical, from styling terrain slope and hillshades to generating 3D terrain meshes for video games.

Some specifics about Terrain-RGB:

- **Data up to zoom 15**. The data is encoded to the equivalent of zoom 15 at 256 tile resolution (and zoom 14 for 512 tiles). Any higher zoom levels will not increase the resolution of the data loaded by your application.
- **0.1 meter height increments**. Data is mapped to 0.1 meter height increments, which gives it the vertical precision necessary for cartographic and 3D applications.

### Request data

You can use the following endpoint to get Terrain-RGB tiles.

```
https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token={{ <UserAccessToken /> }}
```

Two things to note about this request:

- Be sure you are requesting `pngraw` tiles.
- By default, 256x256 tiles are returned. You can use `@2x` to request 512x512 tiles. Requesting 512x512 tiles is sometimes preferable as it means fewer total requests over a given area.

### Decode data

Terrain-RGB uses each color channel as a position in a base-256 numbering system, allowing for 16,777,216 unique values. Once you receive the tiles, you will need to get the red (R), green (G), and blue (B) values for individual pixels. You can do this using a [canvas layer](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) in your browser ([example](https://www.mapbox.com/bites/00307/?elev=10#8/38.055/-121.976)) or using a tool like [get-pixel](https://github.com/scijs/get-pixels).

The following equation will decode pixel values to height values. The height will be returned in meters.

```
height = -10000 + ((R * 256 * 256 + G * 256 + B) * 0.1)
```

### Identify tiles to request

While working with Terrain-RGB, you may need to develop your own workflow to identify which tiles you will need. We recommend checking out the tools below to identify and request the tiles you require:

- [mercantile](https://github.com/mapbox/mercantile): a module of utilities for working with XYZ-style spherical mercator tiles and includes a set of command line programs built on these utilities.
- [supermercado](https://github.com/mapbox/supermercado): extends the functionality of Mercantile with additional commands.
- [tilebelt](https://github.com/mapbox/tilebelt): a set of JavaScript utilities for requesting and working with tiles.
- [tile-cover](https://github.com/mapbox/tile-cover): a JavaScript library that generates the minimum number of tiles required to cover a GeoJSON Geometry.
- [xt](https://github.com/mapbox/xt): allows you to automatically convert a stream of tile coordinates to another format.

### Tiles in water areas

Requests made to the Terrain-RGB endpoint where a tile is fully encompassed by oceanic water areas will return the following:

```
{
  message: "Tile does not exist"
}
```

This message is expected, given that there is no terrain to represent in water areas. A `"Tile does not exist"` message should be interpreted as elevation 0 in the context of Terrain-RGB.

To access and style ocean depth data, you can add bathymetry source data to your map as demonstrated in this [example](https://docs.mapbox.com/mapbox-gl-js/example/style-ocean-depth-data/).

## Mapbox Terrain vector tileset

The **[Mapbox Terrain](https://www.mapbox.com/vector-tiles/mapbox-terrain/#layer-reference)** vector tileset includes features like topography, hillshades, and landcover. The features in the `contour` [source layer](/help/glossary/source-layer) contain a property called `ele`, which is an elevation value in meters.

Some specifics about Mapbox Terrain:

- Data is mapped to **10 meter height increments**.
- **Index field** can be used to highlight index contour lines or control the density of contours on the map.

### Request data

To work directly with the elevation data in the Mapbox Terrain tileset, you can retrieve features from vector tiles at a given point using the [Mapbox Tilequery API](https://docs.mapbox.com/api/maps/#tilequery).

```
https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/{lon},{lat}.json?&access_token={{ <UserAccessToken /> }}
```

{{<Note title='Query elevation along a line'>}}
The Mapbox Tilequery API allows you to [query features at a single point](https://docs.mapbox.com/api/maps/#tilequery). To find elevation along a line, you will have to turn your line into a series of points. You can do this using [turf.js](http://turfjs.org/docs/#explode).

```js
var points = turf.explode(line); // where line is a GeoJSON LineString
```
{{</Note>}}



### Get elevation

The above request will return a GeoJSON `FeatureCollection` of all the features that exist at the given point, some of which have elevation data (`ele`). When working with the returned data, there are a couple of considerations:

1. Because the elevation data you want is included in the `contour` layer, you will need to parse the returned GeoJSON to isolate the features from the `contour` layer.
2. In the Mapbox Terrain tileset, contours are comprised of stacked polygons, which means most of your requests will return multiple features from the `contour` layer. You will likely need to parse the returned GeoJSON to find the highest elevation value.
