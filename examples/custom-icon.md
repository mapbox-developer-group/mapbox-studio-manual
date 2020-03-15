---
标题: 添加一个自定义图标
描述: 上传一个 可缩放矢量图形(SVG) 并且将它作为一个自定义图标添加到地图中.
主题: 地图设计
image: thumbnail-custom-icon
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
    styleId="cjk8zx2wx0k732qpb7oxam125"
    mapPosition={{
      zoomLevel: "3",
      centerLatitude: "23.162721",
      centerLongitude: "95.256611",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Conditional icon expression:",
      layerName: "country-label",
      propertyType: "layout",
      propertyName: "icon-image"
    }}
    specs={[
      <p>这是一个<strong>基础模板</strong> 样式的修改版本。</p>
      <p>已经使用工具栏上的<strong>图像</strong>菜单 将可缩放矢量图形（SVG）上传到样式编辑器。</p>
      <p>这里<code>国家-标签</code>图层 (<code>符号</code>图层)的<strong>图标</strong>和<strong>位置</strong>选项已经被修改。</p>
    ]}
  />
</GLWrapper>
}}

## 关于样式

- **SVG资源**: [可缩放矢量图形 (SVG)](https://developer.mozilla.org/en-US/docs/Web/SVG) 是一种用于描述二维矢量图形的标记语言。你可以在Mapbox Studio样式编辑器中将SVG图像上传到你的自定义样式。你可以单击顶部工具栏中**图像**选项来管理你的样式中的SVG。 在此示例中，一个命名为`mapbox-logo`的图标已上传。更多关于SVG上传问题，请参考[Mapbox Studio指南中的SVG资源错误](https://docs.mapbox.com/help/troubleshooting/studio-svg-upload-errors/)。
- **符号图层**: 使用`符号`图层将图标添加到地图。符号图层是Mapbox Studio中最综合的样式类型。 符号层样式分为四个主要组成：**文本**，**图标**，**位置**和**放置方式**。 在此示例中，**图标**和**位置**选项已被修改。
单击`国家-标签`层以浏览此样式的样式属性：
     -在**图标**栏中，`mapbox-logo`图标已经通过数据条件应用于多个国家/地区：如果`name_en`等于任何国家拥有Mapbox办公室的地方，请将_Image_属性设置为` mapbox-logo`。
     -在**位置**栏中，已经修改 Text_anchor 和 Icon_offset 属性，将文本固定在正在标记的数据点下方，并将图标偏移到数据点上方。
- **雪碧图**：雪碧图（Sprite）是一个包含所有样式图标的单个图像。 雪碧图（Sprite）通常用于Web开发甚至视频游戏中，以提高性能。 如果您使用的是Mapbox Studio，则不必担心雪碧图（Sprite）的技术基础，但是如果您想了解更多信息，可以[在帮助页面上阅读雪碧图（Sprite）的信息](https://www.mapbox.com/help/define-sprite/)。

## 相关资源

**寻求更多指导?** 参考我们的[指导案例](https://www.mapbox.com/help/tutorials/#map-design).
