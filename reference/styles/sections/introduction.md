---
标题: 样式编辑器概述
描述: 样式编辑器是创建地图样式的工具。
prependJs:
- "import StyleEditorDiagram from '../../../../components/illustrations/style-editor-diagram';"
- "import YouAreHere from '../../../../components/illustrations/you-are-here';"
内容类型: 参考
---

**Mapbox Studio 样式编辑器**是用于创建地图样式的工具。 **[样式](https://docs.mapbox.com/help/glossary/style)** 是将你的地图如何展示在页面中的一套规则。 它包含对数据，地图影像（图标，标记，模式），字体的参考，最重要的是，它定义了应如何在地图上设置所有数据的样式。

{{
  <YouAreHere
    activeItems={["Tileset", "Template style", "Custom style", "Add data to style", "Style data"]}
  />
}}

## 样式是什么？

**样式**是符合[Mapbox样式规范](https://docs.mapbox.com/mapbox-gl-js/style-spec/)的JSON文档。样式规范是专为Mapbox GL JS[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js)（浏览器）和Mapbox移动SDKs（移动端）阅读和理解而设计的，因此你的地图可以在页面上呈现。样式几乎控制着地图的所有内容。

## 样式编辑器

Mapbox Studio样式编辑器允许你通过编辑[组件](#组件)，添加 [图层](#图层)，上传自定义图标以及发布样式来创建自定义[样式](https://docs.mapbox.com/help/glossary/style)。点击[样式页面](https://studio.mapbox.com/styles/)列表中的任何样式的名称，可以在样式编辑器中将其打开。

{{
  <StyleEditorDiagram
    imageId="reference-styles-introduction-style-editor-toc"
    alt="A diagram of the Mapbox Studio style editor."
  />
}}

使用样式编辑器左侧的 **样式面板** 来编辑地图要素的外观。 对于使用组件的样式，有两种用于样式化地图要素的选项：

- 使用**组件**选项卡一次设置多个图层的样式. 
- 使用**图层**选项卡可单独设置每个图层的样式或添加自定义图层。

对样式所做的所有更改都将显示在样式编辑器中心的**地图画布**中。 你可以点击地图某一点来查看所有图层，并且当 **选择数据** 面板打开时，您可以检查所选瓦片集中的各个要素来查看其属性。 [阅读更多关于关地图画布如何工作的信息。.](#地图-画布)]

使用屏幕顶部的工具栏来调整样式设置，管理图标和字体，导出要打印的图像以及发布样式。

### 发布

样式编辑器右上角的 **发布** 按钮可以用来保存样式，以便你在产品应用程序中使用它。

你做的每项更改都会在Mapbox Studio中进行跟踪，并保存为样式的**草稿**版本。 在单击**发布**之前，更改不会显示在你的任何产品应用程序中。 更新最多需要15分钟可以显示在实时地图上。

有关草稿与产品样式的更多信息， 请查看 [发布你的样式](/studio-manual/overview/publish-your-style/#draft-vs-production-styles).
