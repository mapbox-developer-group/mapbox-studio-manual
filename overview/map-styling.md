title: Map styles
description: Learn what map styles are.
order: 2
prependJs:

“import Icon from ‘@mapbox/mr-ui/icon’;”
“import YouAreHere from ‘../../components/illustrations/you-are-here’;”
“import ChevronousText from ‘@mapbox/mr-ui/chevronous-text’;”
“import AppropriateImage from ‘../../components/appropriate-image’;”
contentType: guide
使用Mapbox Studio样式编辑器可以根据您的确切要求设计地图。

{{

}}

风格是什么？
风格 是一个符合 Mapbox样式规范的JSON文件。样式规范是渲染在 Mapbox GL JS (浏览器) 和Mapbox移动SDK（移动）地图上用来改善阅读和理解体验的，几乎覆盖着地图的所有内容。

Mapbox的样式API 让您能通过Mapbox工作室的可视化界面来改变地图风格的字体，颜色和图标。Mapbox样式API是我们地图软件中不可或缺的一部分，可在多个Mapbox工具中使用。

样式编辑器
Mapbox样式编辑器 是用于创建样式的可视化软件。当你点击保存时，您在Mapbox Studio样式编辑器中添加到样式的每个图层都会通过Styles API添加到此JSON对象，然后在请求地图时传递到浏览器或设备。创建后，您可以将样式保留在Mapbox上，以投放到地图，也可以下载JSON文档。

{{

}}

Cartogram
您还可以使用拖放工具Cartogram在几秒钟内创建自定义地图。上传图片，选择所需的颜色，然后获取适合您的品牌和风格的地图。您可以在网站或移动应用程序中使用此新地图，也可以在Mapbox Studio中对其进行编辑。

{{

}}

模板样式
Mapbox设计的几种地图样式模板既可以直接在您的Web或移动应用程序中使用，也可以以此为基础，在Mapbox Studio中创建新的自定义样式。在你的，样式页.点击 新样式浏览更多可用的样式。

{{

}}

Monochrome
当你选择 Monochrome时, 你可以在五个预设的单色选项之间进行选择，也可以根据您输入的自定义颜色，使用颜色生成器创建全新的单色样式。

{{

}}

案例
案例页 包含一些样式案例，这些样式示例代表了特定功能，例如添加3D建筑物和山体阴影。您可以将浏览示例直接添加到您的帐户。
