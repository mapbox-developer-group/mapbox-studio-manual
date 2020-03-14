---
标题: 转换单位
描述: 使用公式将高度值从米转换为英尺。
主题: 数据可视化
image: thumbnail-unit-conversion
prependJs:
  - "import StudioExample from '../../components/studio-example';"
  - "import GLWrapper from '@mapbox/dr-ui/gl-wrapper';"
contentType: example
language:
- No code
---

{{
<GLWrapper>
  <StudioExample
    username="mapbox"
    styleId="cjka1d0ds6kun2so220yv4egu"
    mapPosition={{
      zoomLevel: "15.05",
      centerLatitude: "37.952244",
      centerLongitude: "-122.262027",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Unit conversion expression:",
      layerName: "contour-label",
      propertyType: "layout",
      propertyName: "text-field"
    }}
    specs={[
      <p>这是<strong>基础模板</strong>样式的修改版本。</p>
      <p>添加两个新图层：<code>等高线</code>和<code>等高线-标签</code>。</p>
      <p>这两个新图层的数据来自<code>mapbox-terrain-v2</code>瓦片集。</p>
      <p><code>等高线-标签</code>层是一个<code>符号</code>层，它使用公式将高度单位从米转换为英尺。</p>
    ]}
  />
</GLWrapper>
}}

## 关于这种风格
- **等高线数据**：此示例中使用的等高线数据来自`mapbox-terrain-v2`图块集。 `等高线` [源层](https://www.mapbox.com/help/define-source-layer)包含每个等高线的几何形状和两个属性：`index`和`ele`。 `ele`属性是海拔高度，以米为单位。 详细了解[矢量图块参考文档中的Mapbox地形瓦片](https://www.mapbox.com/vector-tiles/mapbox-terrain/)。
- **双层方法**：此示例使用来自同一数据源的两个不同图层：称为`等高线`的线层和名为`等高线-标签`的标签层。
  - 通过添加新图层并从Mapbox Terrain瓦片集中指定`等高线`源图层作为源数据并创建`线`层，来添加线层`等高线`。 `等高线`图层作为线图层使用默认样式。
  - 通过复制`等高线`线图图层并将图层类型从`线`更改为`符号`来添加符号层`等高线-标签`。
- **使用公式**：`等高线-标签`图层的_Text field_使用公式来计算和显示`ele`数据属性中以米和英尺为单位的标高。 打开`等高线-标签`图层以查看公式的工作原理。

## 相关资源

**需要更多指导吗？**请阅读我们的[教程](https://www.mapbox.com/help/tutorials/#map-design)。
