---
标题: 组件库
描述: 在组件选项卡中，你可以切换组件的可见性，编辑组件的属性，从组件弹出图层以及定义颜色和字体排版。
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Note from '@mapbox/dr-ui/note';"
- "import Video from '@mapbox/dr-ui/video';"
- "import StyleComponentBetaNote from '../../../../components/temporary/style-component-beta-note.js';"
- "import HideAndShow from '../../../../video/reference-styles-components-hide-and-show.mp4';"
- "import Eject from '../../../../video/reference-styles-components-eject.mp4';"
- "import ViewLayers from '../../../../video/reference-styles-components-view-layers.mp4';"
- "import ColorsTab from '../../../../video/reference-styles-components-colors-tab.mp4';"
- "import ColorPalette from '../../../../video/reference-styles-components-color-palette.mp4';"
- "import TypographyTab from '../../../../video/reference-styles-components-typography-tab.mp4';"
contentType: 参考
标签: 测试版
---

## 组件库

{{ <StyleComponentBetaNote /> }}

在**组件库**选项卡中，你可以切换组件的可见性，编辑组件的属性，从组件弹出图层以及定义颜色和字体排版。

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-components-intro"
      alt="A screenshot of the Mapbox Studio style editor with the Components tab selected."
    />
  </Browser>
}}

### 组件库列表

当前样式的所有组件都列在组件库选项卡的顶部。虽然在整个Mapbox模板样式中使用了十几个组件，但是准确的组件列表将取决于你正在编辑的模板样式。

#### 隐藏和显示组件

要隐藏一个组件中的地图要素，请将鼠标悬停在列表中的组件名称上。一个 {{ <Icon name="noeye" inline={true} /> }} 将会出现。单击这个图标来隐藏组件。要显示隐藏的组件，请单击 {{ <Icon name="eye" inline={true} /> }}。

{{
  <Browser>
    <Video
      src={HideAndShow}
      title="Turn on and off components by clicking the eye icon that appears after hovering over the name of a component."
    />
  </Browser>
}}

#### 编辑组建属性

要编辑组件中的地图要素的样式，请单击列表中组件的名称。将打开一个可用组件属性列表的弹窗。

每个组件都有一些组件属性，并且各个组件之间可用的属性有所不同。 单个组件属性可以控制不同图层的多个图层属性。通常使用切换（打开或关闭）、带有几个选项的下拉菜单、或带有刻度的带有多个选项的滑块定义组件属性的值。
{{
  <AppropriateImage
    imageId="reference-styles-components-component-properties"
    alt="A screenshot of the Mapbox Studio style editor after clicking the Points of interest component to open the component properties panel."
  />
  <br />
}}

{{<Note title="组件属性和Mapbox样式规范">}}
与图层属性不同，组件属性与[Mapbox样式规范](https://docs.mapbox.com/mapbox-gl-js/style-spec/)不直接相关，并且不能在Mapbox Studio外部进行编辑（在运行时)
{{</Note>}}

#### 更多选择

从组件属性面板中的 **编辑** 切换到 **更多选项** ，**弹出组件** 和 **查看图层**。

单击 **弹出组件** 将组件拆分为多个图层。弹出组件时，您将无法再以一个单元的形式编辑该组件中的图层。弹出组件后，图层将继续使用从初始组件属性继承的图层属性，直到对其进行手动编辑。之后，必须直接使用图层属性设置所有图层的样式。

**组件一旦弹出为图层，图层将无法重新组成组件.**

{{
  <Browser>
    <Video
      src={Eject}
      title=""
    />
  </Browser>
  <br />
}}

单击**查看图层**来查看所选组件中的所有图层。单击**查看图层**会将当前视图从**组件库**选项卡切换到**图层**选项卡，然后在图层列表中选择所有图层。
{{
  <Browser>
    <Video
      src={ViewLayers}
      title=""
    />
  </Browser>
}}

### 颜色

**颜色**选项卡显示整个样式使用的颜色。你可以在Mapbox模板样式中定义十几种**组件颜色属性**。 组件颜色属性对跨组件的许多元素应用一种颜色。_绿地空间_是一个应用于三个不同组件的颜色类别的例子 (_兴趣点标签_, _人行道, 自行车道, 等等._ 以及 _陆地 & 水域_).

{{
  <Browser>
    <Video
      src={ColorsTab}
      title=""
    />
  </Browser>
  <br />
}}

**调色板**包含可能的组件颜色属性的列表。你可以在调色板中添加和删除颜色属性。将颜色属性添加到调色板后,您可以通过单击颜色方块来打开颜色选择器来修改值，你可以在其中定义RGBA值（R=红色，G=绿色，B=蓝色，A=透明度），HSLA值（H=色相，S=饱和度，L=亮度，A=透明度））或十六进制代码。
{{
  <Video
    src={ColorPalette}
    title=""
  />
  <br />
}}

并非每种颜色类别都必须包含在调色板中。如果调色板中未包括颜色类别（颜色未被使用），它将退回到为基础颜色类别定义的颜色，该颜色无法删除。这意味着您你始终拥有协调良好的调色板，而无需为每种可能的颜色类别选择一个值。

例如，如果分配给 _基础_ 的颜色是紫色，而 _绿地_ 是绿色，则绿色公园将位于紫色基础的顶部。如果从调色板中删除 _绿地_ ，公园将变成紫色阴影。

这是我们在模板样式中使用的模式。例如，“街道”的默认调色板具有13种颜色，而“基本”的默认调色板仅具有10种颜色。

### 字体

**字体**选项卡显示整个样式中使用的字体和文本样式。您最多可以在Mapbox模板样式中定义八个组件字体属性。组件字体属性将字体和文本样式应用于一个或多个组件中的元素中。 _小城市_ 是字体属性的一个示例，该属性应用于 _位置标签_ 组件中的部分要素。

您可以通过点击列表中的项目来打开字体面板来定义字体，设置文本大小以及转换大小写（大写，小写）。

{{
  <Browser>
    <Video
      src={TypographyTab}
      title=""
    />
  </Browser>
  <br />
}}
