---
title: Mapbox Studio样式中的源限制
description: Read about strategies for reducing the number of tileset sources in Mapbox Studio styles.
topics:
- data
- map design
contentType: troubleshooting
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import Video from '@mapbox/dr-ui/video';"
  - "import StyleReference from '../../video/reduce-tileset-sources-style-reference.mp4';"
  - "import SourceCompositing from '../../video/reduce-tileset-sources-source-compositing.mp4';"
---

[样式](https://docs.mapbox.com/help/glossary/style/)与Mapbox工作室样式编辑器制作或上传到您的帐户Mapbox有15个限制[来源](https://docs.mapbox.com/help/glossary/source/)。如果您尝试向样式中添加15个以上的来源，则会收到错误消息`Failed to update style`。

## 检查使用的源数量

您可以在Mapbox Studio样式编辑器中检查样式中使用的源数量。在样式编辑器中打开样式，单击顶部工具栏中的 **{{<Icon inline={true} name="sprocket" />}}“设置”**选项，然后滚动到“ **图层概述”**部分。

{{
  <Video
    src={StyleReference}
    title="screenshot of the source list section of the Mapbox Studio style reference popover"
  />
}}
## 减少源数量

您可以使用几种策略来减少样式中使用的源的数量。

### 合并Mapbox Studio之外的源

减少样式中使用的源数量的最有效方法是将来自多个数据文件或图块的数据合并到一个图块中。您可以通过几种方式执行此操作：

- **GIS应用程序**：在将地理空间数据上传到Mapbox之前，请使用Mapbox外部的工具（例如QGIS或ArcGIS）合并地理空间数据。
- **Tippecanoe**：使用我们的开源命令行工具[Tippecanoe](https://github.com/mapbox/tippecanoe#tippecanoe)，可以将多个数据文件添加到单个tilset源中，导出到MBTiles，然后一次将它们全部上传到Mapbox。
- **Mapbox Studio Classic**：使用我们的旧版桌面工具[Mapbox Studio Classic](https://github.com/mapbox/mapbox-studio-classic)将多个数据文件添加到单个tileet源中，导出到MBTiles，并将它们一次全部上传到Mapbox。在[Mapbox Studio Classic手册中](https://github.com/mapbox/mapbox-studio-classic/tree/mb-pages/docs/studio-classic-manual/03-classic-manual-sources.md#create-a-new-source)了解有关创建具有多个数据层的源的更多信息。


### 对合并的源进行样式设置

合并源之后，可以通过以下几种方法在Mapbox Studio样式编辑器中对数据进行样式设置：

- **数据驱动的样式**：可以使用样式编辑器根据数据的属性分配样式。在[Mapbox Studio手册样式部分](https://docs.mapbox.com/studio-manual/reference/styles/#value-options)和我们的[制作一个整体地图教程系列中，](https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-1/)了解有关创建数据驱动样式的更多信息。
- **过滤**：只要您的数据具有唯一标识每个原始数据集的属性，您还可以使用Mapbox Studio的过滤器功能从单个贴图集源创建不同的样式层。在[Mapbox Studio手册样式部分中](https://docs.mapbox.com/studio-manual/reference/styles/#filter)了解有关过滤的更多信息。

### 确保Source Compositing （源的复合）处于打开状态

默认情况下，Mapbox Studio样式中使用的源是复合的或已经合并的。Source Compositing （源的复合）**不会减少达到此限制的源的数量**，但是如果启用了Source Compositing ，则尚未在任何样式图层中使用的tilset源将自动从复合源中删除。

要检查Source Compositing是否打开，请在样式编辑器中打开您的样式，单击顶部工具栏中的{{<Icon inline={true} name="sprocket" />}} **设置**选项，然后滚动到**Source compositing**部分。

{{
  <Video
    src={SourceCompositing}
    title="screenshot of the source compositing section of the Mapbox Studio Settings popover"
  />
}}

### 删除未使用的源

通过使用该源删除所有图层，可以从样式中删除不再需要的源。要删除依赖于特定来源的图层，请在`Layers`面板中选择图层，然后单击面板`Delete`顶部的按钮。请注意，并非所有图层都可以删除。
