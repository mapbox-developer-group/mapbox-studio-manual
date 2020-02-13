---
title: Troubleshoot raster image with black background
description: Learn how to fix raster images that display black backgrounds.
topics:
- data
- uploads
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
  - "import UserAccessToken from '../../components/user-access-token';"
contentType: troubleshooting
---

Sometimes raster image uploads appear with a black background where you would expect there to be transparency. These black pixels often exist around the edges of the image as shown below.

![image of raster with black background](/help/img/screenshots/troubleshoot-black-background.png)<br>
<cite>
Drought Shrinks Australia's Lake Eucumbene. NASA Visible Earth. May 2007. www.earthobservatory.nasa.gov/
</cite>

## Why black backgrounds appear

The black background that appears is the part of the raster image that does not contain any data. Generally a raster image is a rectangular grid of pixels. When you are working with data that is not rectangular, there are pixels within the grid that don't contain any data. These pixels are expressed as NoData values and represent the absence of data. GeoTIFFs that are uploaded to Mapbox Studio are displayed as JPEG to save space and make maps load quickly. Since JPEG cannot display transparency, NoData values appear black.

It's not possible to change the appearance of NoData values within Mapbox Studio, but there are two strategies you can use to resolve the issue outside of Mapbox Studio. First, you can use [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js) to retrieve a PNG instead of a JPEG. If that doesn't work, you can edit the original image using [Rasterio](https://rasterio.readthedocs.io/en/latest/).

{{ <Note> }}

If you do not see a black background on Chrome, but _do_ see one on other browsers (Firefox, IE, Opera, etc.), this is because Chrome supports the <a href='https://developers.google.com/speed/webp/'>WebP</a> image format. Our services will use this more efficient format if browser support is detected at runtime.

{{ </Note> }}

## Change the way you retrieve the image

When you use your style in a [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js) application, you can dynamically add the tiles to the style as a raster source and specify that it be encoded as PNG instead of JPEG. Since the PNG format supports transparency, if your GeoTIFF was exported with the correct NoData values they should appear transparent. Once you have [initialized your map](https://www.mapbox.com/mapbox-gl-js/examples/), add the following code to add the raster source to your map:

```js
map.on('load', function() {
  map.addLayer({
    id: 'raster-layer',
    type: 'raster',
    source: {
      type: 'raster',
      tiles: ['https://api.mapbox.com/v4/{tileset_id}/{z}/{x}/{y}.png?access_token={{ <UserAccessToken /> }}'],
    },
    minzoom: 0,
    maxzoom: 22
  });
});
```

After adding the above code, view your map in the browser and check if those changes resolved the transparency issue. If you are still seeing the black background, make sure that your GeoTIFF was initially exported with the correct NoData values by following the process outlined below.

## Edit the original image

You can edit the original GeoTIFF using a tool called [Rasterio](https://rasterio.readthedocs.io/en/latest/). Rasterio is used to read and write raster datasets. First, run the following command, and compress the image using a lossless data compression method called LZW:

```
rio calc "(asarray (take a 1) (take a 2) (take a 3))" --co compress=lzw --co tiled=true --co blockxsize=256 --co blockysize=256 --name a=filename.tif filename255.tif
```

Next, run this command to set NoData values to zero:

```
rio edit-info --nodata 0 filename255.tif
```

{{<Note>}}
For more information on Rasterio, read the [Rasterio documentation on GitHub](https://rasterio.readthedocs.io/en/latest/)
{{</Note>}}

Once you do this, upload your new `filename255.tif` file. See the image below for an example of the expected result.

![image of raster with transparency](/help/img/screenshots/troubleshoot-black-background2.png)

If you continue to see a black background after following the above steps, please [contact support](https://www.mapbox.com/contact/support/) and attach your original GeoTIFF for further troubleshooting.
