---
标题: 创建一个分级统计图
描述: 添加一个填充层，并使用表达式设置一个分级统计图的样式。
主题: 数据可视化
image: thumbnail-choropleth
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
    styleId="cjk8ulzsi7psd2tqp6lp69yx5"
    mapPosition={{
      zoomLevel: "3.77",
      centerLatitude: "39.859114",
      centerLongitude: "-79.762491",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Expression to style a choropleth map:",
      layerName: "state-data",
      propertyType: "paint",
      propertyName: "fill-color"
    }}
    specs={[
      <p>这是<strong>基本模板</strong> 样式的修改版本。</p>,
      <p>添加了一个名为<code>state-data</code> 的新<code>填充</code>层。</p>,
      <p><code>state-data</code>数据层的源数据来自于自定义瓦片集，该瓦片集已上传到Mapbox Studio。</p>,
      <p>各个州的样式使用属性表达式对<strong>整个数据范围内的要素进行样式设置</strong>。</p>
    ]}
  />
</GLWrapper>
}}

## 关于这种风格

- **自定义数据的瓦片集**：用作`state-data`层的`源`的数据来自于自定义瓦片集，该瓦片集是通过将GeoJSON文件上传到Mapbox Studio创建的。 该数据是从
[Leaflet 分级统计图教程](http://leafletjs.com/examples/choropleth/) 借鉴来的，其中包含有关美国各州人口密度的数据。 瓦片集本身包含每个州的几何形状和两个属性：`名称`（字符串）和`密度`（数字）。 阅读更多关于[概述部分中的将数据上传到Mapbox Studio的信息](/studio-manual/overview/geospatial-data/)。
- **带有表达式的样式**：`state-data`数据层使用了属性表达式设置样式。 在这种情况下，将在_Color_属性上使用属性表达式来为整个数据范围内的要素设置样式。 每个要素的颜色将根据其`密度`来确定。

## 相关资源

**还在寻找更多指南？**请阅读我们的[制作一个分级统计图，第1部分：创建样式](https://www.mapbox.com/help/choropleth-studio-gl-pt-1/)教程。
