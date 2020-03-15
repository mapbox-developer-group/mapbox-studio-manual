---
标题: 配置一个热力图图层样式
描述: 增加一个热力图层。
主题: 数据可视化
image: thumbnail-add-a-heatmap-layer
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
    styleId="cjka4x1y61l0j2rktysvr9gcb"
    mapPosition={{
      zoomLevel: "1.71",
      centerLatitude: "34.494200",
      centerLongitude: "-17.346053",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Heatmap color expression:",
      layerName: "meteorites",
      propertyType: "paint",
      propertyName: "heatmap-color"
    }}
    specs={[
       <p>这是<strong>基础模板</strong>样式的修改版本。</p>
       <p>一个命名为<code>陨石</code>的新<code>heatmap</code>图层已被添加。</p>
       <p><code>陨石</code>图层的源数据来自于已上传到Mapbox Studio的自定义瓦片。</p>
      ]}
  />
</GLWrapper>
}}

## 关于这种风格

- **来自于自定义数据的瓦片集**：用作`陨石`图层的`源`数据来自自定义瓦片集，该瓦片集是通过将CSV文件上传到Mapbox Studio创建的。 原始数据来自[NASA的开放数据门户](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh)。 瓦片集本身包含各种陨石撞击的位置以及包括`质量（克)`（一个数字）在内的几个属性。 详细了解[概述部分中的将数据上传到Mapbox Studio](/studio-manual/overview/geospatial-data/#types-of-uploads)。
- **配置热力图图层样式**：打开`陨石`图层以查看如何指定`颜色`，`不透明度`，`半径`，`重量`和`强度`样式属性来配置热力图图层。

## 相关资源

**正在寻找更多指南？**：请阅读我们的[使用Mapbox Studio制作热图](https://www.mapbox.com/help/studio-heatmap-tutorial/)教程。
