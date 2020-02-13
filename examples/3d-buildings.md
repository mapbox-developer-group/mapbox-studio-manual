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
      <p>示例中使用的数据来源为 <code>mapbox-streets-v7</code> 瓦片级.</p>,
      <p><code>建筑</code> 图层已经被修改为<code>挤压填充</code> 图层类型，并且样式属性已经被修改.</p>
      <p>工具栏中的 <strong>光</strong> 选项已经被修改.</p>
    ]}
  />
</GLWrapper>
}}

## About this style

- **Building data**: The data used in this example comes from the `mapbox-streets-v7` tileset. Buildings in this tileset are available at zoom levels 13 and higher. Building features include both a `height` and an `extrusion` data property. The `extrude` field indicates whether the object should be included in 3D-extrusion renderings while the `height` field contains the height of a building or building part in meters (rounded to the nearest integer). This particular layer has been filtered to only include features that has an `extrude` property of `true`. [Read more about available data.](https://www.mapbox.com/vector-tiles/)
- **Fill extrusion layer type**: Creating 3D effects in Mapbox styles requires using a `fill-extrusion` layer. Read more about fill extrusion layers in the [Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill-extrusion).
- **Styling with extrusions**: Styling a feature based on a data property of that specific feature requires using expressions. Read more about expressions in the [Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions).

## Related resources

**Looking for more guidance?** Read our [Add 3D buildings to a Mapbox Studio style](https://www.mapbox.com/help/add-3d-buildings-studio/) tutorial.
