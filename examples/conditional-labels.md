---
标题: 条件标签的应用
描述: 检查数据属性是否存在，是否显示不同的标签。
主题: 地图设计
image: thumbnail-conditional-labels
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
    styleId="cjk8xtao498nt2rpe6093loi3"
    mapPosition={{
      zoomLevel: "12",
      centerLatitude: "39.455",
      centerLongitude: "-76.160344",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Conditional label expression:",
      layerName: "airport-label",
      propertyType: "layout",
      propertyName: "text-field"
    }}
    specs={[
      <p>这是一个 <strong>基础版本</strong> 样式的修改版.</p>,
      <p>示例中使用的数据来源为 <code>mapbox-streets-v7</code> 瓦片集.</p>,
      <p><code>航空站-标签</code> 图层, <code>符号</code> 图层已经被修改.</p
      <p>使用属性表达式对航空站标签进行样式化，以对具有数据条件的特性进行样式化. 如果短标识符可以使用，那么此便签将同时包含完整名称和短标识符.</p>
    ]}
  />
</GLWrapper>
}}

## 关于此样式

- **Label data**: 航空站标签的数据来源为 `mapbox-streets-v7` 瓦片集。 `ref` 字段许多航空站（但不是所有航空站）的短标识符代码。 阅读更多关于 [矢量瓦片文档中的Mapbox Streets](https://www.mapbox.com/vector-tiles/)。
- **使用表达式进行样式设置**: 在此示例中，使用属性表达式对航空站标签进行样式化，从而使用数据条件对特性进行样式化。打开 `航空站-标签` 图层检查数据属性是否存在 (在本示例中的 `ref` 属性)。 如果属性确实存在，标签将显示完整名称 (`name`)和 `ref` 。如果 `ref` 属性不存在，标签将显示 `name` 值。 [在 Mapbox 样式规范]中阅读更多关于数据条件样式化的更多信息(https://www.mapbox.com/mapbox-gl-js/style-spec#expressions-decision).

## 相关资源

**需要更多指导吗？** 阅读我们的 [教程](https://www.mapbox.com/help/tutorials/#map-design).
