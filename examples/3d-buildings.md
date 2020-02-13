---
标题: 添加3D建筑
描述: 在Mapbox Studio中通过使用一个挤压填充的的图层在地图上添加3D建筑。
主题: 地图设计
image: thumbnail-add-3d-buildings
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
    styleId="cjk8m59xg8jzh2rlko4vlrq4h"
    mapPosition={{
      缩放级别: "15.35",
      中心点纬度: "40.754951",
      中心点经度: "-73.986714",
      水平方位: "9.60",
      倾斜角度: "60"
    }}
    relevantJson={{
      codeCaption: "Building height expression:",
      layerName: "building",
      propertyType: "paint",
      propertyName: "fill-extrusion-height"
    }}
    specs={[
      <p>这是一个基础版本样式的修改版</p>,
      <p>示例中使用的数据来源为 <code>mapbox-streets-v7</code> 瓦片集.</p>,
      <p><code>建筑</code> 图层已经被修改为<code>挤压填充</code> 图层类型，并且样式属性已经被修改.</p>
      <p>工具栏中的 <strong>光</strong> 选项已经被修改.</p>
    ]}
  />
</GLWrapper>
}}

## 关于此样式

- **建筑数据**: 示例中使用的数据来源为`mapbox-streets-v7`瓦片集. 建筑在这个瓦片集中可在13或者更高缩放级别显示. 建筑特征包含`高度`和`挤压`两种数据类型.`挤压`字段表示该对象是否会包含在3D挤压渲染中，而`高度`字段包含建筑建筑物的高度或者建筑物组成部分的高度，以米为单位（四舍五入为最近正数). 示例中的特定图层已经通过设置`挤压`属性为`true`进行过滤. [阅读更多关于可用数据的信息.](https://www.mapbox.com/vector-tiles/)
- **填充挤压层类型**: 在Mapbox样式中创建3D效果需要使用 `填充-挤压` 图层. 在 [Mapbox 样式规范]中阅读更多关于填充挤压层(https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill-extrusion).
- **Styling with extrusions**: 基于某种特征的数据属性进行特征样式化需要使用表达式. 在 [Mapbox 样式规范]中阅读更多关于表达式(https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions).

## 相关资源

**需要更多指导吗？** 阅读我们的[将3D建筑添加到Mapbox Studio样式]教程(https://www.mapbox.com/help/add-3d-buildings-studio/) tutorial.
