---
title: Working with large GeoJSON sources in Mapbox GL JS  # one-line description
description: Strategies for handling large GeoJSON sources with GL JS.
topics:
- web apps
- data
contentType: troubleshooting
---

<!--copyeditor disable best-->

Mapbox GL [GeoJSON](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson) sources are turned into Mapbox vector tiles on-the-fly by the client (web browser or mobile device). The purpose of this guide is to show best practices for how to efficiently load and render large GeoJSON sources.

## Adjusting the buffer
The [buffer option](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-buffer) creates an area around tiles that contains extra data that will carry over to the tiles surrounding it. Buffers create heavier tiles but ultimately help with the rendering of features across tile boundaries.  If your data contains only points of small circles that will be rendered completely inside one tile, then the buffer option likely isn't necessary. If this is the case for your data, consider setting the `buffer` option on your GeoJSON source to `0`.

If you see rendering bugs around tile boundaries, increase the buffer setting to a value between 0 and, the default for a GL JS GeoJSON source, 128. Ultimately smaller buffers are faster because they make the vector tiles smaller.

## Clustering
At low zoom levels, consider clustering dense point data sources. This makes tiles smaller, faster to load, layers faster to render, and data easier to understand. For more information on how to cluster your data, explore the [relevant documentation](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-cluster) and [Mapbox GL JS example](https://www.mapbox.com/mapbox-gl-js/example/cluster/).

<img alt='screenshot of clustering a lot of points' src='/help/img/gl-js/large-geojson-clustering.gif'>

## Zoom levels
Set the `maxzoom` option on the GeoJSON source to a value less than the default of 18. This setting will increase map performance while panning and zooming past the specified `maxzoom` level. For most point sources, a value of `12` is a good balance between precision and speed.

Set the `minzoom` layer property on the layer referencing the GeoJSON source to a value greater than 0. The minzoom layer setting prevents the map from trying to load and render tiles at low zoom levels. Seeing every feature of your large dataset isn't useful at low zoom levels because there are not enough pixels on the screen. Adjusting this will result in a faster map load and an increase in render performance.

## Cleaning up your data

Within your GeoJSON source, prune out any data properties that are not necessary for a visualization and use a maximum of 6-decimal precision for coordinate values. The data from the [Make a heatmap with Mapbox GL JS tutorial](/help/tutorials/make-a-heatmap-with-mapbox-gl-js/) was initially `19.3 MB`. As shown in the snippet below, there are several properties in the data that are not being used and the precision of the coordinates are unnecessarily extended to ten decimal places.

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "objectid": 1,
        "id": 1,
        "uniqueid": "1695.00",
        "address": "230",
        "suffix": " ",
        "street": "Stratford Ave",
        "onstr": "Friendship Ave",
        "fromstr": "Stratford Ave",
        "tostr": "Fairmount St /S",
        "side": "Side",
        "site": "1",
        "spp": "Acer platanoides",
        "dbh": 5,
        "cond": "Good",
        "trunks": 1,
        "mt": "Training Prune",
        "observe": "None",
        "hardscape": "N",
        "inspect": "N",
        "klir": "Vehicle",
        "utilities": "Y",
        "grow": "Tree Lawn",
        "spacesize": 2,
        "loctype": "Street",
        "pghdbsdeTree_Keeperarea": 8,
        "staff": "Kara Masak",
        "inv_date": "2005-02-14T00:00:00.000Z",
        "inv_time": " ",
        "inspect_dt": "2005-02-14T00:00:00.000Z",
        "inspect_tm": "10:18:32",
        "active": 1
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.9334671524,
          40.4611126031
        ]
      }
    }
    // additional features
  ]
}
```

After using tools like [geojson-pick](https://github.com/node-geojson/geojson-pick) to remove unused properties and [geojson-precision](https://github.com/perrygeo/geojson-precision) to limit the number of decimal places for coordinates, the file is reduced to `3.3MB`. Not only is the file much smaller, but the map rendering is noticeably quicker and smoother. Below is the same feature shown above after this process. Because the heatmap is only showing the location of the tree and its diameter at breast height (`dbh`), no other properties are necessary.

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "dbh": 5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.93345,
          40.46111
        ]
      }
    }
  ]
}

```

As a final step, minify your GeoJSON with a tool of your choice to remove whitespace and decrease the file size.

```json
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"dbh":5},"geometry":{"type":"Point","coordinates":[-79.93345,40.46111]}}]}
```

## Store GeoJSON at URL

If possible, consider loading your GeoJSON from a data URL instead of holding it in a JavaScript object and passing to a Mapbox GL GeoJSON Source. This reduces client memory overhead. There are many different places where you can store your data. For GitHub files, you can use [GitHub Pages](https://pages.github.com/) to store and link to your data. Adding this data to your project with Mapbox GL JS should look something like the code below:

```js
map.addSource('some id', {
  type: 'geojson',
  data: 'https://mydomain.mydata.geojson'
});
```

## Symbol layers
For unclustered symbol layers with GeoJSON as the source, be sure to set the `layout` property `icon-allow-overlap` to  `true` (_below, left_). This improves the speed of rendering while panning and zooming for really dense point data sets. This results in much faster layer render and interaction time than if setting `icon-allow-overlap` to `false` (_below, right_). <br>

<div class='grid'>
  <img class='col' alt='gif showing allow icon overlap set to true' src='/help/img/gl-js/true-allow-icon-overlap.gif' style='width:50%; padding-left: 10px; height: 50%'>
  <img class='col' alt='gif showing allow icon overlap set to false' src='/help/img/gl-js/false-allow-icon-overlap.gif' style='width:50%; padding-left: 10px; height: 50%'>
</div>

## Tolerance
The [`tolerance` option](https://www.mapbox.com/mapbox-gl-js/style-spec#sources-geojson-tolerance) of a GeoJSON source can be increased to simplify linestrings and polygons. This option implements the [Douglas–Peucker algorithm](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) and can be used to improve performance. The first image below shows `tolerance` set to its default of `0.375` and the one on the right shows it set to `3.5`.

<div class='grid'>
  <img class='col' alt='img showing default tolerance' src='/help/img/gl-js/default-tolerance.png' style='width:50%; padding-left: 10px; height: 50%'>
  <img class='col' alt='img showing high tolerance' src='/help/img/gl-js/high-tolerance.png' style='width:50%; padding-left: 10px; height: 50%'>
</div>

## Even bigger data

If your source data starts to get really large (over 500,000 data points), there are a couple other techniques you can use to improve speed.

### Source splitting
You can split your GeoJSON source into two or three parts, effectively doubling or tripling your ability to load and render more data. Tools like [geojsplit](https://www.npmjs.com/package/geojsplit) make the process of breaking up GeoJSON sources manageable. Once the data has been divided, each source can be added to the map using [`addSource()`](https://www.mapbox.com/mapbox-gl-js/api/#map#addsource) and [`addLayer()`](https://www.mapbox.com/mapbox-gl-js/api/#map#addlayer). If you are interested, this [practical example](http://bl.ocks.org/ryanbaumann/04c442906638e27db9da243f29195592) demonstrates how to add a split source to a map. Note that source splitting will not do much to increase performance on mobile browsers.

### Tiling on the server
The easiest way to do this is to upload the data to Mapbox via the Uploads API. If your data exceeds [the upload limit](/help/troubleshooting/uploads/#accepted-file-types-and-transfer-limits) or you are interested in further optimizing your data, consider checking out our [Manage large data files for Mapbox Studio with Tippecanoe guide](/help/troubleshooting/large-data-tippecanoe/) for tips on ways to reduce the file size.
