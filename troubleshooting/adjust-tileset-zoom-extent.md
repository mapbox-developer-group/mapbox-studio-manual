---
title: 调整瓦片的缩放范围
description: 学习如何手动调节瓦片的缩放范围。
topics:
- uploads
- data
- map design
- web apps
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
contentType: troubleshooting
---

当您以 [tileset](/help/glossary/tileset) 的形式将数据上传到 Mapbox 账户中, 可能会注意到您的数据被 **简化** 或者 **不能在全缩放值下进行渲染**。Mapbox Streets 源数据也被限制在了指定的缩放范围。下面一起看看为什么会发生这样的情况，以及一些可以手动调整图块集的缩放范围以及使用自定义缩放级别添加自己的数据源的技术。

## 为什么会发生这样的情况

数据简化和缩放级别限制可以让地图加载更快，并限制了生成的瓦片文件大小。

### 矢量数据简化

较低缩放级别的简化会降低地图上甚至根本不会注意到细节的复杂性，这种简化使地图加载更加有效。

单个矢量瓦片中可以存在的数据量大小有上限，通过在上传过程中简化复杂的矢量特征，我们确保矢量瓦片集中的每个图块都低于此上限，并且将正确显示在地图上。

### 缩放值的最大和最小值

有时我们无法以给定的缩放级别清晰显示数据。例如，当以低缩放级别查看地图时，一系列密集的地形线将变成一堆特征。相反，低分辨率的数据在高缩放级别下显得过于粗糙。为避免这两个潜在问题，Mapbox Uploads API 会分析您的数据并自动确定应渲染图块的最大和最小缩放级别。

对于栅格瓦片集，上载的图像分辨率可设置最小缩放和最大缩放级别。较高分辨率的图像可以呈现更高的缩放级别。

_Note: 除了最大缩放等级，数据可以被 [overzoomed](/help/glossary/overzoom/) 到 22 级。_

## 调整瓦片的缩放范围

有两种技术可以调整瓦片的缩放范围：[使用 Tippecanoe 对数据做转化](#transform-data-with-tippecanoe), 或者[使用 Tilesets API to 对瓦片配方进行更新](#update-zoom-extent-in-a-tilesets-recipe)。瓦片配方和用于更新它们的 Tilesets API 是 beta 版本，可能会发生更改。 

### 使用 Tippecanoe 对数据做转化
Mapbox Streets 的很多数据来自 OpenStreetMap。你可以使用 [Overpass Turbo](/help/tutorials/overpass-turbo/#use-overpass-turbo) 下载数据并使用 [Tippecanoe](https://github.com/mapbox/tippecanoe) ，一个用于将复杂数据转换为矢量切片的命令行实用程序来调整缩放选项。要将数据从OpenStreetMap 下载，准备并上传到您的 Mapbox 帐户，请执行以下操作：

1. 使用 [Overpass Turbo](/help/tutorials/overpass-turbo/#use-overpass-turbo) 下载您需要的数据。
2. 使用命令行安装 Tippecanoe。首先安装 [Homebrew](https://brew.sh/)，然后运行 `brew install tippecanoe`。
3. 使用 Tippecanoe 的缩放等级选项创建您的瓦片。比如，将最小缩放值设置为 2，最大缩放值设置为 7，命令行看起来是这样的：
```
tippecanoe -o geography_regions.mbtiles -Z 2 -z 7 Documents/geography_regions.geojson
```
4. 上传在步骤 3 中创建的 [MBTiles](/help/glossary/mbtiles/) 文件到 Mapbox 账户中作为瓦片。

更多安装和使用技巧请阅读 [Manage large data files for Mapbox Studio with Tippecanoe](/help/troubleshooting/large-data-tippecanoe)  指导。

### 在瓦片配方中更新缩放范围

{{<Note title='Tilesets API public beta' theme="beta">}}
本节中讨论的 Tilesets API 功能已公开发布，并且可能会发生更改。
{{</Note>}}

您也可以使用 Mapbox Tilesets API，在 [tileset recipe](/help/glossary/tileset-recipe/) 中更新瓦片的缩放范围。您可以使用 [Tilesets CLI](https://github.com/mapbox/tilesets-cli/blob/master/README.md#update-recipe) 或者直接使用 [Tilesets API](https://docs.mapbox.com/api/maps/#update-a-tilesets-recipe)。想要了解更多缩放等级配置的信息，请参考  [Tileset recipe reference](/help/troubleshooting/tileset-recipe-reference/#zoom-level-configuration) 和 [Basic recipe using zoom levels example](https://docs.mapbox.com/help/troubleshooting/tileset-recipe-examples/#basic-recipe-using-zoom-levels)。
