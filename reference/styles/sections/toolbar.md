---
标题: 工具栏
描述: 在Mapbox Studio样式编辑器中，工具栏始终位于屏幕顶部。
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Note from '@mapbox/dr-ui/note';"
- "import Video from '@mapbox/dr-ui/video';"
- "import EditorCollisionBoxes from '../../../../video/reference-styles-toolbar-collision-boxes.mp4'"
- "import EditorCompare from '../../../../video/reference-styles-toolbar-compare.mp4';"
- "import EditorOverdrawInspector from '../../../../video/reference-styles-toolbar-overdraw-inspector.mp4';"
- "import EditorRaster from '../../../../video/reference-styles-toolbar-raster.mp4';"
- "import EditorSatelliteImagery from '../../../../video/reference-styles-toolbar-satellite-imagery.mp4';"
- "import EditorTileBoundaries from '../../../../video/reference-styles-toolbar-tile-boundaries.mp4';"
内容类型: 参考
---

## 工具栏

在Mapbox Studio样式编辑器中，工具栏始终位于屏幕顶部。

### 分享和发布

有关分享和发布样式的更多信息，请参考[发布样式]。(/studio-manual/overview/publish-your-style/).

### 打印面板

单击 **{{<Icon name='printer' inline={true} />}} 打印**，打开或关闭打印面板。 放置地图并在打印面板中指定**打印导出设置**。设置包括图像尺寸（英寸或厘米），分辨率（PPI）和文件格式（PNG或JPG）。最大图像导出为8000px × 800px。

Mapbox Studio每个帐户提供100个高分辨率图像导出数量。如果需要的数量超过100，则可以购买年度许可证，以增加图像输出和打印的数量。联系 [Mapbox 商务](https://www.mapbox.com/contact/sales) 获取更多信息.

如果您不想购买提供超过100张高分辨率图像导出的年度许可证，则可以使用[Mapbox 静态图片 API playground](https://docs.mapbox.com/help/interactive-tools/static-api-playground).使用Mapbox静态图片API，图片导出的最大尺寸为1,280px × 1,280px。虽然启用视网膜模式可能会提高图像质量，但是你无法使用静态图像API以更高的分辨率导出。

**在打印任何Mapbox地图之前，请务必阅读[Mapbox打印策略](https://docs.mapbox.com/help/how-mapbox-works/static-maps/#static-images-for-print)。**

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-publish-print-export-settings"
      alt="screenshot of the print panel with print export settings as described above"
    />
  </Browser>
}}

### 设置

设置菜单包含许多选项，包括：

- 各种 [**查看模式**](#view-modes) 用于调试样式.
- [**支持的Mapbox SDK版本**](#支持-mapbox-sdk-版本)用于检查与Mapbox GL JS和我们的移动地图 SDK的兼容性。
- [**默认地图位置**](#默认-地图-位置)用于设置和锁定地图位置。
- [**图层概述**]（#图层-概述），包含此样式中使用的所有图层和数据源图层。
- 启用和禁用[** 数据源合成 **]（#数据源-合成）的功能。

#### 查看模式

Toggle **Satellite imagery** to compare your style to satellite imagery. This is useful for checking the accuracy of map features.

{{
  <Browser>
    <Video
      src={EditorSatelliteImagery}
      title="toggle satellite imagery"
    />
  </Browser>
  <br />
}}

切换 **栅格瓦片** 查看你的样式的栅格图块。 请注意，样式更新可能会在栅格瓦片中延迟。 
{{
  <Browser>
    <Video
      src={EditorRaster}
      title="Preview the raster version of this style."
    />
  </Browser>
  <br />
}}


切换 **瓦片边界** 来查看瓦片边界。 有时，要素会受到瓦片边界的影响。 切换瓦片边界的可见性对于调试剪切或丢失的符号很有用。


{{
  <Browser>
    <Video
      src={EditorTileBoundaries}
      title="tile boundaries"
    />
  </Browser>
  <br />
}}

切换 **碰撞盒** 来查看符号的碰撞盒。 这对于调试剪切或丢失的符号也很有用。

{{
  <Browser>
    <Video
      src={EditorCollisionBoxes}
      title="collision boxes"
    />
  </Browser>
  <br />
}}

切换**透支检查器**。Toggle **Overdraw inspector**.

{{
  <Browser>
    <Video
      src={EditorOverdrawInspector}
      title="overdraw inspector"
    />
  </Browser>
}}

#### 支持的Mapbox SDK版本

确保特定版本的Mapbox SDK支持你正在使用的所有功能，并查看与兼容性有关的警告。

#### 默认的地图位置

设置当前地图视图的缩放，方位（旋转），俯仰以及纬度和经度坐标。 你还可以切换 **锁定默认位置** ，以便每当打开样式时地图都将返回到默认位置。

#### 比较样式

将你的正在编辑的样式与帐户中的另一种样式进行比较。 选择要比较的样式，然后单击“比较”以打开一个对话框。 使用滑动箭头比较地图。 点击ESC或单击“比较”工具以关闭该窗口。

{{
  <Browser>
    <Video
      src={EditorCompare}
      title="compare styles swipe"
    />
  </Browser>
}}

#### 图层概述

_图层概述_ 部分显示了依赖于瓦片集的样式图层中使用的瓦片集的列表。瓦片集即[数据源](https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources). 数据源包括上传到你帐户的矢量或栅格数据文件。你的帐户还包括访问[Mapbox 瓦片集](https://docs.mapbox.com/vector-tiles/).

使用样式编辑器制作的样式中最多只能包含15个唯一数据源。 您可以检查**设置** _图层概述_ 弹出框中使用的来源数量。

数据源合成不会减少计入此限制的数据源数量。 例如，如果你使用的模板样式同时引用了Mapbox街道和地形瓦片集（换句话说，是两个瓦片集数据源），并且你添加了一个自定义瓦片集，即使将这些瓦片集合成到一个复合数据源中，使用的瓦片集数据源的数量仍然为3。在此示例中，你可以在达到15个数据源限制之前添加其他12个数据源。

{{
  <AppropriateImage
    imageId="reference-styles-toolbar-layer-reference"
    alt="screenshot of the style overview section of the settings popover"
  />
  <br />
}}

有关数据源限制的更多信息，请参考 [Mapbox Studio样式中的源限制](https://docs.mapbox.com/help/troubleshooting/reduce-tileset-sources/) 故障排除指南.

#### 数据源合成

默认情况下，你的Mapbox Studio样式的任何数据源源都是合成或组合的。 启用数据源合成后，将来使用的任何Mapbox矢量瓦片集和任何添加到你样式的自定义矢量瓦片集都将合成到一个复合数据源中。 合成改善了整个瓦片之间的标签放置计算，并使地图加载速度更快。

可以在工具栏的设置部分中打开或关闭数据源合成。 关闭数据源合成时，无法在来自不同数据源的图层之间进行标签放置计算。

根据[Mapbox矢量瓦片规范](https://docs.mapbox.com/vector-tiles/specification/)，矢量瓦片集中的两个矢量图层都不能具有相同的ID。 如果你尝试使用相同的ID组合数据源，则会在样式编辑器中显示一个模式，来引导你解决名称冲突。

{{<Note title="数据源限制">}}
使用样式编辑器制作的样式中最多只能包含15个唯一数据源。 数据源合成不会减少计入此限制的数据源数量。 例如，如果你使用的模板样式同时引用了Mapbox街道和地形瓦片集（换句话说，是两个瓦片集数据源），并且你添加了两个自定义瓦片集，即使将这些瓦片集合成到一个复合数据源中， 瓦片集数据源为4。在此示例中，你可以在达到15个数据源限制之前添加其他11个数据源。 有关数据源限制的更多信息，请参阅我们的[Mapbox Studio样式中的源限制](https://docs.mapbox.com/help/troubleshooting/reduce-tileset-sources/)故障排除指南。</p>
{{</Note>}}

### 历史

查看当前会话中所做更改的完整历史记录（从打开样式编辑器到现在）。在我们的博客文章中了解有关此功能的更多信息，<a href="https://www.mapbox.com/blog/using-undo-redo-in-mapbox-studio-with-visual-history/">Mapbox Studio中的视觉撤消和重做</a>.

<h4 id='images-toolbar'> {{<Icon name='picture' inline={true} />}} 图像</h4>

在此弹出框中，从样式的[sprite](https://docs.mapbox.com/help/glossary/sprite/)中添加和删除图像。要在地图上显示图像，请在左侧的图层面板中选择。


{{
  <AppropriateImage
    imageId="reference-styles-toolbar-manage-style-images"
    alt="screenshot of the Manage style images popover"
  />
}}

### 字体

添加和删除与你的Mapbox帐户关联的所有字体（所有样式）。浏览 _Mapbox字体_ 或上传自定义的TTF或OTF字体。

### 光

使用填充拉伸层时，可以指定锚点，颜色和照明强度。 每个都可以通过缩放级别进行调整。

### 帮助

打开帮助来获取指向我们的帮助页面和联系页面的链接。 启用提示使其在样式编辑器中定位。 查看完整地图交互和键盘快捷键的列表。
Open Help for links to our help page and contact page. Turn on Tips to become oriented in the style editor. See a full list map interactions and keyboard shortcuts.
