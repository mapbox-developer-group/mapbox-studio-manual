---
标题: 图层
描述: 图层是数据或地图画布的设计表现。
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Note from '@mapbox/dr-ui/note';"
- "import Video from '@mapbox/dr-ui/video';"
- "import EditJson from '../../../../video/reference-styles-layers-edit-json.mp4';"
- "import Filter from '../../../../video/reference-styles-layers-filter.mp4';"
- "import FilterSourceLayer from '../../../../video/reference-styles-layers-filter-source-layer.mp4';"
- "import Hillshade from '../../../../video/reference-styles-layers-hillshade.mp4';"
- "import LayersTab from '../../../../video/reference-styles-layers-tab.mp4';"
- "import SelectData from '../../../../video/reference-styles-layers-select-data.mp4';"
- "import SetValue from '../../../../video/reference-styles-layers-set-value.mp4';"
- "import StyleBuildingsZoom from '../../../../video/style-buildings-zoom.mp4';"
- "import StyleDetails from '../../../../video/reference-styles-layers-style-details.mp4';"
- "import StyleProperties from '../../../../video/reference-styles-layers-style-properties.mp4';"
内容类型: 参考
---

## 图层

**图层**是一种类型（例如填充，线或符号）的数据的设计表现。 图层 _可以_ 是组件的一部分，但不_必须_是。

图层增强了地图的可视化效果。 没有图层，你将看不到数据。 你可以从同一数据创建多个图层，还可以按属性筛选数据来在图层中设置样式。你还可以在画布上填充将应用于整个世界的颜色或图案。

{{
  <Browser>
    <Video
      src={LayersTab}
      title=""
    />
  </Browser>
  <br />
}}

你始终可以通过点击样式编辑器左上角的**图层**标签来访问图层列表。 列表顶部有几个用于管理图层的选项，包括：

- {{<Icon name='plus' inline={true} />}} **添加一个自定义图层r** 来添加新的图层。
- {{<Icon name='duplicate' inline={true} />}} **复制图层**来创建现有图层的副本.
- {{<Icon name='folder' inline={true} />}} {{<Icon name='nofolder' inline={true} />}}**分组**和**取消分组**图层可分别设置样式并对其进行排序。
- {{<Icon name='noeye' inline={true} />}} {{<Icon name='eye' inline={true} />}} **隐藏** 和 **显示** 图层.
- {{<Icon name='trash' inline={true} />}} **删除图层**，可以永久删除图层。 你可以在当前会话中使用CTRL + Z撤消此操作，但是在关闭样式后你无法撤消此操作。
- {{<Icon name='menu' inline={true} />}} 通过点击并拖动每个图层列表项旁边的{{<Icon name='menu' inline={true} />}}，对图层进行**重新排序**。

### 添加图层

要创建一个新层，请点击图层面板顶部的 **+** 。 在样式中添加新图层时，有两个选项：**数据源**和**背景图层**。

#### 数据源

添加包含部分地图的特定形状（点，线或面）的图层。 图层的数据来自你添加到Mapbox帐户的自定义数据。 有关添加自定义数据的更多信息，请参见 [地理空间数据](/studio-manual/overview/geospatial-data/) 部分。

每个图层都需要使用数据，否则样式规则将不会应用于任何内容。(例外的是一个背景图层；有关更多细节，请参见下一节)。 要为图层指定数据，请从地图样式中使用的可用[瓦片集](https://docs.mapbox.com/help/glossary/tileset)列表中选择一个“数据源”（_主要 源数据_），以及在你帐户中但未在当前样式中使用的瓦片集列表（_未使用的数据源_）。你可以使用搜索框查找瓦片集，或使用 **+ 上传d** 按钮上传新的瓦片集。 
{{
  <AppropriateImage
    imageId="reference-styles-layers-editor-hover-and-click-data"
    alt="select data panel after clicking add layer"
  />
  <br />
}}

{{<Note title="来源限制">}}
Mapbox帐户中的保存的样式中最多允许有15个唯一数据源。 此数字包括Mapbox瓦片集，例如街道或地形。如果达到15个数据源限制，你将看到一个错误， `无法更新样式`。此限制与来源有关，而不与图层有关。为了减少所需的数据源数量，请考虑在上传之前合并数据，然后从样式编辑器中使用过滤器从同一来源数据创建不同的图层。有关数据源限制的更多信息，请参见[Mapbox Studio样式故障排除指南中的数据源限制](https://docs.mapbox.com/help/troubleshooting/reduce-tileset-sources/) 
{{</Note>}}


**矢量数据源**：如果选择数据源，则将具有以下选项：

- **类型**：允许你选择图层类型来创建[填充](#填充-图层)，[填充拉伸](#填充-拉伸-图层)，[线](#线-图层)，[点](#点-图层)，[符号](#符号-图层)，[热力图](#热力图-图层)或[栅格](#栅格-图层)数据类型。
- **筛选**：允许你根据数据属性或几何类型限制在图层中要显示的要素。
- **缩放程度**：设置在地图上查看数据的`最小`（开始）缩放和`最大`（最后）缩放等级（了解有关[手动调整缩放范围]的详细信息。(https://docs.mapbox.com/help/troubleshooting/adjust-tileset-zoom-extent)).

在画布上，你将看到数据的预览。 你可以点击以选择并查看地图上的数据。 在画布上，你将看到数据的预览。 你可以点击来选择并查看地图上的数据。 将鼠标悬停在数据上以查看下面的数据子集，然后点击 **选择** 按钮以将该数据填充到你创建的图层中。
{{
  <Video
    src={FilterSourceLayer}
    title="animated GIF walking through how to filter a source layer by adding a vector source clicking Filter > Create filter > select a data field from the list provided > select a value from the list provided"
  />
  <br />
}}

**栅格数据源**：如果选择栅格数据源，则会为你的图层自动分配 _栅格_ 类型。**缩放范围** 选项也可用于设置在地图上查看数据的最小（开始）缩放和最大（最后）缩放。

**RBG-编码的数字高程模型数据源**: 如果选择RBG-编码的数字高程模型数据源，则将为你的图层自动分配 _山体阴影_ 类型。 选项也可用于设置在地图上查看数据的最小（开始）缩放和最大（最后）缩放。

#### 背景图层

背景图层是与瓦片集没有关联的样式图层。背景图层覆盖了地图画布的整个范围。你可以根据需要创建多个背景图层。 要为你的地图样式创建纹理，请使用多个背景图层。

要创建背景层，请点击图层面板顶部的 **+添加图层**按钮 ，选择 **背景图层** 选项卡，然后点击 **创建背景图层** 按钮。

背景图层的样式选项包括：

- [填充颜色](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-color)
- [图案](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-pattern)
- [透明度](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-opacity)

由于**图案**是从平铺图像创建的，因此你可以上传自定义SVG图像来在地图中创建图案效果。 要添加SVG图像

1.点击顶部工具栏中的 **图像**。
2.点击 **上传SVG图像**。

然后，图像将上传到你的样式中，并可以在任何图层上使用。

### 筛选图层

点击 {{<Icon name='filter' inline={true} />}} 筛选图层来显示或者隐藏图层列表中的图层。 你可以通过在搜索栏中输入图层名称进行筛选，也可以按值，图层类型或矢量类型进行筛选。 

{{
  <Browser>
    <Video
      src={Filter}
      title="Filter layers in the style editor"
    />
  </Browser>
  <br />
}}

- **通过值筛选** 选项包括颜色，图像和图案，字体，文本字段，文本选项，图标选项，符号位置，线宽，线选项和填充选项。
- **通过图层类型筛选** 选项包括填充，线，符号，点，填充-拉伸和背景。
- **通过矢量图层筛选** 选项包括所有[数据源图层](https://docs.mapbox.com/help/glossary/source-layer/).


### 设置图层样式

通过点击“图层”列表中图层的名称，可以分别设置每个图层的样式。 下面列出了几种 **图层类型** 可供选择。 每种图层类型都可以指定一组唯一的 **图层属性**。有一些选项用于指定属性值。 你可以根据数据属性、缩放级别或其他属性的值分别选择值。

#### 设置手动覆盖
如果图层属性是由组件控制的，则该值旁边将显示一个 {{<Icon name="lock" inline={true} />}} 锁定图标。你可以通过点击 **设置手动覆盖** 来替代任何图层属性。当你覆盖属性时，它将仅影响该特定图层的一个图层属性-受组件控制的其他图层不被影响。 

{{
  <Browser>
    <Video
      src={StyleProperties}
      title="Style a layer"
    />
  </Browser>
}}

<h4 id='fill-layer'>{{<Icon name='fill' inline={true} />}} 填充图层</h4>

填充图层是将数据展示为填充形状的样式图层。 填充层是将数据显示为填充形状的样式层。 填充图层通常用于设置多边形内部要素的样式，但是任何要素类型（多边形，线段或点）都可以使用填充层设置样式。

有关填充层样式的示例，请参考 [制作分级统计地图](https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-1/) tutorial.

{{
  <AppropriateImage
    imageId="reference-styles-layers-fill"
    alt="screenshot showing an example of a fill layer"
  />
}}

要将图案添加到Mapbox Studio样式编辑器中的填充图层：

1. 点击顶部工具栏中的 **图像**。
2. 点击 **上传SVG图像**。
3. 从样式编辑器左侧的图层面板中选择所需的填充图层。
4. 点击 **图案** 字段。
5. 点击选择所需的图像。

<h4 id='fill-extrusion-layer'>{{<Icon name='extrusion' inline={true} />}} 填充-拉伸</h4>

可以将填充-拉伸图层应用于包含面要素的数据源来创建3D面。你可以使用填充-挤出图层，使用Mapbox Streets瓦片集中的 `建筑` 数据源图层来添加你的样式的3D建筑图层。 将[光面板]（＃光-顶部栏）与填充-拉伸图层一起使用，来控制光源的颜色，方向和强度。

<h4 id='line-layer'>{{<Icon name='line' inline={true} />}} 线图层</h4>

你可以将线图层设置为各种宽度、颜色和图案。还有一些高级选项，为虚线和模糊效果。在大多数情况下，线图层样式丰富并且在不同级别下进行过渡。你还可以复制图层并过滤数据以进行更多样式控制。 看一下地图样式模板 **Mapbox Streets** 或 **Mapbox Outdoors** ，来获取具有 `道路` ，`隧道`和 `桥梁` 数据图层的详细线段样式的示例。

要将样式添加到Mapbox Studio样式编辑器中的线图层：

1. 点击顶部工具栏中的 **图像**。
2. 点击 **上传SVG图像**。
3. 从样式编辑器左侧的图层面板中选择所需的线段图层。
4. 点击 **图案** 字段。
5. 点击选择所需的图像。

你也可以从此面板中选择以前上传的图像。

<h4 id='circle-layer'>{{<Icon name='circle' inline={true} />}} 点图层 </h4>

点图层是将数据显示为圆圈的样式图层。你可以使用点图层来展示缩放或交互式数据，并且可以将它们用于主要是点要素的数据。 在图层的样式面板中，点击每个属性的输入框以更改它的值。 将鼠标悬停在面板中的属性名称上可以查看它的定义。

##### 通过筛选设置样式

点数据可以展示变化的数据值。 你可以制作单独的点图层，按数据中的属性过滤，并根据数据属性设置每个样式。

例如，要按震级对地震数据进行样式设置，你可以：

- 使用地震作为数据源分别创建三个图层。
- 根据大小（小，中，大）筛选数据。
- 为每一个定义不同的样式属性，将高震级设置为更大，更暗的圆圈。

还可以根据用户交互或数据中的属性，使用Mapbox GL JS在地图中设置实时样式。

<h4 id='symbol-layer'>{{<Icon name='transform-uppercase' inline={true} />}} 符号图层</h4>

符号图层是Mapbox Studio中最复杂的样式类型之一。符号图层类型为标签和地图数据提供详细的字体样式选项。符号图层样式分为四个主要组：**文本**，**图标**，**位置**和**放置**。Symbol layers are the most complex style type in Mapbox Studio. The symbol layer type offers detailed typographic styling options for your labels and map data. Symbol layer styling is separated into four main groups: **Text**, **Icon**, **Position**, and **Placement**.

##### 文本

在“文本”部分中控制图层所包含的字体。

*字体*: 你只能在[符号]（#符号-图层）图层类型上设置字体。 可以使用样式编辑器左侧的 **字体** 工具栏项目上传自定义字体。在每个`符号`图层的 **样式** 标签下方的 **文本** 栏中的 **字体** 字段里设置字体。主字体和备用字体之间的唯一字体配对的每个列表将各自创建一个新的字体库。

**字体库** 是由 _主要字体_ 和 _可选的备用字体_ 组成的有序列表。 一个示例字体库：

`"Open Sans Regular", "Arial Unicode MS Regular"`

当你的主要字体缺少字形时，该文本将以备选字体呈现。 Mapbox Studio设置的默认备选字体为 `Arial Unicode MS Regular` 。 Unicode字体比常规字体包含更多的标志符号，从而可以实现更好的多语言覆盖。

*语言*: 从Mapbox模板样式构建地图时，默认情况下，地图标签将以英文显示。 你可以直接在 [Mapbox Studio]（https://studio.mapbox.com） 样式编辑器中更改地图标签的语言。 所有Mapbox模板地图均使用Mapbox Streets矢量瓦片集作为地图要素。 有关可用语言的列表，请参见[Mapbox Streets 矢量瓦片参考](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#overview)。

怎么更改语言：

1. 在[Mapbox Studio](https://studio.mapbox.com/styles/)中创建新样式或编辑现有样式。
2. 选择包含你要编辑的标签的图层。
3. 在 **文本** 选项卡下，点击 **文本字段** 中的当前值。 将出现一个面板，其中包含该图层的所有语言选项。
4. 点击所需的语言，地图将在选择时更新。

{{<Note title="阅读顺序从右到左的语言支持">}}
Mapbox Studio默认会加载[`mapbox-gl-rtl-text`](https://github.com/mapbox/mapbox-gl-rtl-text)插件。 该插件增加了对从阿拉伯语到希伯来语的文本的支持，这些文本从右到左显示。
{{</Note>}}

##### 图标

定义Mapbox Studio中可用的[Maki](https://labs.mapbox.com/maki-icons/)图标，或在图标样式部分中添加你自己的自定义图标。 要将图像添加到Mapbox Studio样式编辑器中的符号图层：

1. 点击顶部工具栏中的 **图像**。
2. 点击 **上传SVG图像**。
3. 从样式编辑器左侧的图层面板中选择所需的符号图层。
4. 从 **样式**标签中选择 **图标** 标签。
5. 点击 **图像** 字段。
6. 点击选择所需的图像。

##### 位置

位置样式允许你为图标和文本选择对齐方式，旋转方式和偏移量。

##### 放置

放置样式控制符号的放置，符号在地图上的旋转方式以及文本和图标符号之间的碰撞行为。

<h4 id='heatmap-layer'>{{<Icon name='flame' inline={true} />}} 热力图</h4>

热力图是一种数据可视化，其中一系列颜色表示特定区域中点的密度。 通过将数据源图层添加为热力图图层，你可以根据图层的要素彼此之间的接近程度来表示它们。 Mapbox Studio中的热力图图层具有几个可配置的属性，可让你自定义热图：

- `颜色`: 定义热力图的颜色梯度，从最小值到最大值。 你可以分别调整每个节点的密度和颜色，以及添加和删除节点。 对于你的热力图颜色选择的启发，请尝试[Color Brewer](http://colorbrewer2.org/)。
- `透明度`: 控制热力图图层的全局不透明度。
- `半径`: 设置每个点的半径（以像素为单位）。 随着半径的扩大，热力图将变得更平滑且细节更少。
- `权重`: 测量每个点对热力图外观的影响。默认情况下，热力图图层的权重为1，这意味着所有点的权重均相等。将权重属性增加到5的效果与在同一位置放置5个点的效果相同。你可以使用 **跨数据范围的样式** 和 **具有数据条件的样式** 选项来基于指定的属性设置点的权重。

- `强度`: 权重属性顶部的乘数。 强度主要用作基于缩放级别调整热图外观的便捷方式。

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-layers-heatmap"
      alt="screenshot of a heatmap layer displaying POI density in the Mapbox Studio style editor"
    />
  </Browser>
}}

<h4 id='raster-layer'>{{<Icon name='raster' inline={true} />}} 栅格图层</h4>

栅格图层是从GeoTIFF源创建的。 GeoTIFFs是地理参考图像，可用的样式属性包括你可以与编辑图像相关联的选项，例如不透明度，饱和度，对比度和亮度。

<h4 id='hillshade-layer'>{{<Icon name='mountain' inline={true} />}} 山体阴影图层 </h4>

当你创建新图层时，在可用数据源下有一个新的栅格-DEM数据源：Mapbox Terrain RGB。 选中后，它将使用山体阴影图层类型提供的许多属性来为其设置样式。

{{
  <Browser>
    <Video
      src={Hillshade}
      title="The process outlined above for adding a hillshade layer in the Mapbox Studio style editor."
    />
  </Browser>
}}

<h4 id='background-layer-properties'>{{<Icon name='globe' inline={true} />}} 背景图层</h4>

背景图层的属性包括：

- [颜色](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-color)
- [图像](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-pattern)
- [透明度](https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-background-opacity)

有关背景图层的更多信息，请参见上面的[背景层]（#背景-图层）部分。

**图层属性**: 每个图层的可用属性因图层类型而异。 你可以通过点击{{<Icon name ='caret-right'inline = {true} />}} **详情** 了解样式编辑器中每种图层类型的可用属性。

{{
  <Browser>
    <Video
      src={StyleDetails}
      title="hover to see property details"
    />
  </Browser>
  <br />
}}

了解更多[Mapbox样式规范]（https://docs.mapbox.com/mapbox-gl-js/style-spec）中可用于每种图层类型的属性，请参照链接内容。


### 值选项

你可以使用 **样式** 面板为每个图层分别指定每个可用属性的值。 你还可以使用 **应用现有值** ，根据 **缩放级别** ， **数据范围** 或 **数据条件** 来设置一个随其他值而快速匹配的值，或创建并使用自定义 **公式** 为图层设置样式。


{{
  <Browser>
    <Video
      src={SetValue}
      title="set property"
    />
  </Browser>
  <br />
}}

了解更多关于如何使用这些选项的下面指定的属性值。

#### 设置值

点击每个属性直接编辑值。

#### 缩放范围内的样式

你可以通过选择 **跨缩放范围的样式** 来基于缩放级别选择样式属性。 可以在任何的缩放级别随时停止来指定任何数量的值。

当在高缩放级别的对比度要求不同的颜色在较低的缩放级别具有相同的效果或使在较高的缩放级别出现的功能缓慢消失时，此功能很有用。 这是我们的[创建自定义样式教程]中的示例(https://docs.mapbox.com/help/tutorials/create-a-custom-style)。

{{
  <Browser>
    <Video
      src={StyleBuildingsZoom}
      title="animated GIF showing an example using zoom functions in the Mapbox Studio style editor"
    />
  </Browser>
}}

##### 变化率

对于变化率有几种不同的选择:

**线性的**: 默认情况下，变化率是 `线性`的 ，这意味着一个缩放级别增量的数量将使值增加或减少相同的数量。

**指数的**: 线性变化率对于许多属性而言是合乎逻辑的，但是由于透视图中的对象随着距离的增大而呈指数增加，因此`指数`选项允许倾道具有不同的 _基础_ ，这意味着你可以自定义曲线的大小来了解缩放级别的增加会影响属性随时间的变化。 例如，你可以通过将0到1000万人之间的图层的 `颜色` 属性从黄色成比例地缩放到红色来可视化某个州的人口。

**贝塞尔曲线**: `贝塞尔曲线` 选项使用给定控制点定义的贝塞尔曲线进行插值。 这可以用来创建非线性，非指数效果，例如CSS过渡属性`ease-in`和`ease-in-out`。 

**Step**: `step`选项通过计算一个由停止定义的分段常数函数来产生离散的、阶梯式的结果。如果要完全控制在定义的时间间隔中使用的属性值，而不是在节点之间进行插值，则此选项很有用。 例如，你可以通过将黄色分配给少于500,000人的州，将橙色分配给500,000-1,000,000人的州，将红色分配给人口超过100万的州，来形象化一个州的人口。

这是一个示例，该示例是从[使用Mapbox教程制作分及统计地图]中以逐步的变化率从数据进行插值(https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-1/):

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-layers-set-all-stops"
      alt="screenshot of the popover for editing style property values using a property function in the Mapbox Studio style editor"
    />
  </Browser>
}}

#### 跨数据范围的样式

通过选择 **跨数据范围的样式** ，可以基于瓦片集字段的值应用样式属性。要使用**跨数据范围的样式**，必须具有一个数字数据字段，可以为其创建节点。不是每个样式属性都提供此选项。 例如，你可以从数据中插入填充图层的颜色，但不能插入图案。

#### 带有数据条件的样式

使用 **带数据条件的样式** 将条件逻辑添加到样式中。Add conditional logic to your styles with **Style with data conditions**. 将样式属性应用于具有给定数据字段值的图层中的所有要素。 此字段中的值可以是`字符`, `数字`, or `布尔值`。 

例如，在Mapbox Basic样式中，土地类型由`class`设置样式。 如果`class`等于`公园`或`运动场`，则特征的填充颜色为绿色。 如果要素的`class`等于`医院`，则要素的填充颜色为粉红色。 如果`class`等于`学校`，则应用另一个条件，并且其`class`字段与任何条件都不匹配（或根本不存在）的任何要素都有一个备选值。

{{
  <AppropriateImage
    imageId="reference-styles-layers-create-a-data-condition"
    alt="screenshot of the landuse layer in the Mapbox Basic style using conditional logic to style parks, hospitals, and schools differently"
  />
}}

#### 使用公式

公式编辑器包括完整的表达式库，每个表达式都有内联文档。 对于任何不同于 **跨缩放范围的样式**、**跨缩放范围的样式**、或**跨数据范围的样式**选项的表达式(包括任何使用数学的表达式)，请使用公式编辑器。

以下是一个公式示例，该公式可将Mapbox Terrain轮廓图层中的单位从米转换为英尺。

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-layers-editor-formula-example"
      alt="screenshot of a formula that converts units in Mapbox Terrain’s contour layer from meters to feet"
    />
  </Browser>
}}

#### 将值重置为默认值

通过点击 **将值重置为默认值** 来删除所有基于数据或基于缩放的样式。

#### 应用现有的值

使用 **应用现有的值** 来编辑该值来匹配现有值。滚动浏览其他图层属性，来使当前图层与样式中的其他图层匹配。

### 将属性编辑为JSON

Mapbox Studio样式编辑器允许你直接编辑样式属性的JSON。样式属性JSON编辑器将为希望使用图形界面尚不支持的功能（例如[恒等函数]）的高级用户和早期采用者提供便利的工作流程(https://docs.mapbox.com/mapbox-gl-js/style-spec/#other-function).

{{
  <Browser>
    <Video
      src={EditJson}
      title="animated GIF showing how to find the style JSON editor at the bottom of the panel for each style property"
    />
  </Browser>
  <br />
}}

{{<Note>}}
JSON编辑器可以切换为任何类型的值。如果你输入了值那么只可以在JSON编辑器中进行编辑，它将处于打开状态，而不能关闭。
{{</Note>}}

### 选择数据

每各图层都有一个 **选择数据** 面板。 你可以通过在图层列表中点击该层，然后点击选择数据选项卡来找到它。 有几个选项可用于更改基础数据源。

{{<Note title="数据图层">}}
  这些选项与在样式中添加新[数据图层](#数据图层)[数据图层]时可用的选项相同。

{{
  <Browser>
    <Video
      src={SelectData}
      title="Select data for see map data in x-ray mode"
    />
  </Browser>
  <br />
}}

在下面的 **选择数据** 面板中详细了解可用字段。

#### 来源

这显示了在图层中使用的瓦片集数据源。 点击瓦片集的名称，从你的Mapbox帐户将数据源更改为另一个瓦片集。 数据源可以是矢量瓦片集或栅格瓦片集。 **选择数据** 面板上可用的其余属性将根据瓦片集数据源是矢量还是栅格数据源而有所不同。

#### 样式

对于具有 **矢数据源** 的图层，可用的数据源样式为：

- <span class='inline-block'>{{<Icon name='fill' inline={true} />}} 填充</span>
- <span class='inline-block'>{{<Icon name='extrusion' inline={true} />}} 填充-拉伸</span>
- <span class='inline-block'>{{<Icon name='circle' inline={true} />}} 点</span>
- <span class='inline-block'>{{<Icon name='line' inline={true} />}} 线</span>
- <span class='inline-block'>{{<Icon name='transform-uppercase' inline={true} />}} 符号 </span>
- <span class='inline-block'>{{<Icon name='flame' inline={true} />}} 热力图 </span>

某些瓦片集包含点，线段和多边形的组合。使用按 *几何类型* 筛选（请参见下面的“筛选”部分）可将图层样式规则仅应用于所选几何类型的要素。

于具有 **栅格数据源** 的图层，唯一的数据源类型是 {{<Icon name='raster' inline={true} />}} 栅格。

#### 过滤器

过滤器选项使你可以基于数据属性或几何类型来限制图层中显示的要素。

当你按数据字段过滤时，你将根据瓦片集的较小片段的属性为其设置样式。 这对于突出显示瓦片集中的特定功能很有用，或者你可以使用它通过多个图层将数据分类到连续的组中。

要根据字段值过滤数据：

1. 点击 **+创建过滤器** ，将弹出一个列表的数据字段在你的瓦片集中(包括**几何类型**)。
2. 选择你要过滤的数据字段。
3. 将新的 _数据字段_ 添加到过滤器列表之后，请使用下拉列表指定创建过滤器的方式。 选项包括 **是** ，**不是** ，**>**（大于），**<**（小于），**>= **（大于或等于），和 **<=**（小于或等于）。
4. 在框内点击来定义要应用于过滤器的值。 如果你使用的是Mapbox数据，则会出现一个潜在值的下拉菜单。 如果你使用自定义数据，则必须输入该值。
5. 点击 **+添加其他条件** 来添加其他过滤器。 

#### 缩放范围

设置最小和最大缩放。 仅当瓦片集存在于特定的缩放级别时，这才起作用。有关调整瓦片集缩放范围的更多信息， 请阅读我们的[故障排除指南](https://docs.mapbox.com/help/troubleshooting/adjust-tileset-zoom-extent/).
