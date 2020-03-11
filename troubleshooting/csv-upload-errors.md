---
title: CSV文件错误类型 CSV file errors
description: 学习如何在上传CSV文件时修复出现的错误 Learn how to fix errors when uploading CSV files.
topics:
- data
- uploads
contentType: troubleshooting
---

您可以从[地图切片集](https://www.mapbox.com/studio/tilesets/) 页面， [Mapbox Studio 数据集编辑器](https://www.mapbox.com/studio/datasets/) 页面， 或使用Mapbox [Uploads API]将CSV文件上传到Mapbox Studio(https://docs.mapbox.com/api/maps/#uploads)。

## 地图切片集 对比 数据集

如果您是通过Mapbox Studio磁贴集页面或Uploads API上传CSV格式的，则生成的要素的几何形状和数据属性将不可编辑。如果要在添加数据之前对其进行编辑，请使用Mapbox Studio数据集编辑器。 有关您的地图的更多信息，请参见Mapbox Studio手册。

如果您是通过Mapbox Studio[地图切片集](https://www.mapbox.com/studio/tilesets/) 页面或通过[Uploads API](https://docs.mapbox.com/api/maps/#uploads)上传CSV格式文件, 则生成的要素的几何形状和数据属性将不可编辑。如果要对添加的数据之前对其进行编辑，请使用[Mapbox Studio数据集编辑器](https://www.mapbox.com/studio/datasets/)。 有关您的地图的更多信息，请参见[Mapbox Studio手册](https://www.mapbox.com/studio-manual/overview/geospatial-data/)。

## 文件格式

上传[CSV](/help/glossary/csv)文件时, 请注意以下几点：

- 数据集CSV文件的大小不能超过**5 MB**, 地图切片集不能超过**1 GB** 。
- CSV文件必须采用 [UTF-8](https://en.wikipedia.org/wiki/UTF-8)编码。
- CSV文件必须包含坐标（纬度和经度）并且只能表示点要素，而不能表示线或面。
- CSV文件必须以逗号(`，`)分隔。
- 通过CSV导入的数据将在Mapbox Studio数据集编辑器中编码为字符串类型。 如果要将任何导入的数据编码为数字，则可以在数据集编辑器中单独编辑字段或以 [GeoJSON 格式](/help/glossary/geojson)上传数据。
- 如果一行数据无效，则该行将不包含在结果图块集中。

CSV文件的第一行必须包含列标题，并且列标题必须至少包含纬度和经度字段。以下是包含纬度和经度值的列的可接受列标题。请注意，当x和y为有效列标题时， 您将数据作为图块集上传，但是当您将数据作为数据集上传时，它们不是有效的列标题。

CSV文件的第一行必须包含列标题，并且列标题必须至少包含 *纬度* and *经度* 字段。以下是包含纬度和经度值的列的可接受列标题。请注意，当`x` 和 `y` 为有效列标题时，您将数据作为地图切片集上传，但是当您将数据作为数据集上传时，它们_不是_有效的列标题。 

- 纬度：
  - `latitude`
  - `lat`
  -  `y`
- 经度：
  - `longitude`
  - `lon`
  - `long`
  - `lng`
  - `x`

如果您的列是GeoJSON或WKT编码的，则可以分别命名该字段`geojson` 或 `wkt`。 有关详细信息，请参见 [Mapnik上的CSV文件](https://github.com/mapnik/mapnik/wiki/CSV-Plugin)。 如果列的标题为空，则会自动生成列标签。

### 举例

这是有关如何格式化CSV文件以在Mapbox Studio中上传的示例：

```
title,latitude,longitude
University at Albany,42.686744,-73.822852
Siena College,42.718588,-73.755328
Union College,42.814403,-73.930967
The College of St. Rose,42.664351,-73.786562
```
