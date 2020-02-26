---
title: 排除黑色背景的栅格图像问题
description: 学习如何让修复黑色背景的栅格图像。
topics:
- data
- uploads
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
  - "import UserAccessToken from '../../components/user-access-token';"
contentType: troubleshooting
---

有时候，上传的光栅图像显示为黑色背景，我们希望该背景透明。如下图所示，这些黑色像素通常存在于图像边缘附近。

![image of raster with black background](/help/img/screenshots/troubleshoot-black-background.png)<br>
<cite>
Drought Shrinks Australia's Lake Eucumbene. NASA Visible Earth. May 2007. www.earthobservatory.nasa.gov/
</cite>

## 为什么会出现黑色背景

出现的黑色背景是栅格图像中不包含任何数据的部分。通常，光栅图像是像素的矩形网格。当您使用非矩形数据时，网格内的像素不包含任何数据。这些像素表示为 NoData 值，表示没有数据。上传到 Mapbox Studio 的 GeoTIFF 显示为 JPEG，以节省空间并快速加载地图。由于 JPEG 无法显示透明度，因此 NoData 值显示为黑色。

虽然不太可能在 Mapbox studio 中改变 NoData 值的颜色，但是您可以在 Mapbox Studio 之外解决这个问题。首先，您可以使用 [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js) 检索 PNG。如果不管用，可以使用 [Rasterio](https://rasterio.readthedocs.io/en/latest/) 来编辑原始图像。

{{ <Note> }}

If you do not see a black background on Chrome, but _do_ see one on other browsers (Firefox, IE, Opera, etc.), this is because Chrome supports the <a href='https://developers.google.com/speed/webp/'>WebP</a> image format. Our services will use this more efficient format if browser support is detected at runtime.

{{ </Note> }}

## 更改检索图像的方式

在一个 [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js) 的应用程序中, 您可以以栅格数据源的方式动态往样式中加载瓦片并且让它被解码为 PNG 而不是 JPEG。因为 PNG 格式支持透明，如果您的 GeoTIFF 被导出为 NoData 值，就会显示为透明状态。当您完成 [初始化地图](https://www.mapbox.com/mapbox-gl-js/examples/) 之后，在您地图的栅格数据源中加入下面的代码：

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

添加上述代码后，请在浏览器中查看地图，并检查这些更改是否解决了透明度问题。如果仍然看到黑色背景，请按照以下概述的过程，确保最初使用正确的 NoData 值导出了 GeoTIFF。

## 编辑原始图像

您可以使用一个叫做 [Rasterio](https://rasterio.readthedocs.io/en/latest/) 的工具来编辑原始的 GeoTIFF。Rasterio 用于读取和写入栅格数据集。首先，运行以下命令，并使用 LZW 无损数据压缩方法压缩图像：

```
rio calc "(asarray (take a 1) (take a 2) (take a 3))" --co compress=lzw --co tiled=true --co blockxsize=256 --co blockysize=256 --name a=filename.tif filename255.tif
```

然后运行下面的代码将 NoData 值设置为 0：

```
rio edit-info --nodata 0 filename255.tif
```

{{<Note>}}
For more information on Rasterio, read the [Rasterio documentation on GitHub](https://rasterio.readthedocs.io/en/latest/)
{{</Note>}}

完成以后，上传新的 `filename255.tif` 文件，看看是不是得到了想要的结果。

![image of raster with transparency](/help/img/screenshots/troubleshoot-black-background2.png)
