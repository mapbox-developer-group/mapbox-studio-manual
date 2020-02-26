---
title: 添加山体阴影层
description: 添加栅格数据源作为山坡阴影图层，以获取详细的坡度和阴影。
topic: 地图设计
image: thumbnail-hillshade
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
    styleId="cjk8t3twt9pgr2smwl6cyyy7y"
    mapPosition={{
      zoomLevel: "6",
      centerLatitude: "46.629445",
      centerLongitude: "8.785110",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Hillshade layer color:",
      layerName: "mapbox-terrain-rgb",
      propertyType: "paint",
      propertyName: "hillshade-shadow-color"
    }}
    specs={[
      <p>这是<strong>基本模板</strong>样式的修改版本。</p>,
      <p>添加了一个名为<code>mapbox-terrain-rgb</code>的新<code>山体阴影</code>层。</p>,
    ]}
  />
</GLWrapper>
}}

## 关于这种风格
- **山坡阴影层数据**：山坡阴影层数据来自`mapbox-terrain-rgb`图块集。 Mapbox Terrain-RGB是一个栅格数据源，其中包含以栅格PNG瓦片编码的全局高程数据作为颜色值。 由于它使用栅格数据源来计算用户计算机上像素的斜率和阴影，因此产生的山体阴影比矢量地形图块可能的阴影要细得多。 设置单个像素的样式与更宽，更不详细的多边形之间的区别。 详细了解更多关于[Mapbox Terrain-RGB tileset]（https://www.mapbox.com/help/access-elevation-data/）。

- **栅格样式**：通过`hillshade`图层，您可以自定义颜色，光照方向和山体阴影效果的强度。 在样式编辑器中打开此样式以尝试使用山坡阴影样式属性。 详细了解[Mapbox样式规范中的山坡阴影图层类型]（https://www.mapbox.com/mapbox-gl-js/style-spec#layers-hillshade）。

## 相关资源

**寻求更多指导?** 参考我们的[指导案例](https://www.mapbox.com/help/tutorials/#map-design)。
