---
title: 管理字体库Manage your fontstacks
description: Learn how to manage fontstacks for optimal rendering.
topics:
- map design
contentType: troubleshooting
prependJs:
- "import AppropriateImage from '../../components/appropriate-image';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import StyleComponentBetaNote from '../../components/temporary/style-component-beta-note';"
- "import Video from '@mapbox/dr-ui/video';"
- "import Components from '../../video/troubleshooting--manage-fontstacks--components.mp4';"
---

**字体库**是一个有序列表，包含了*主要字体*和*可选的备用字体（一个或多个）*。

字体只能在[`symbol`](https://www.mapbox.com/studio-manual/reference/styles/#symbol-layer)图层类型上设置。在输入字段中，在“ **文本”**下的每个图层的“ **样式”**选项卡中设置字体。主字体和后备字体之间的唯一字体配对的每个列表将创建一个新的字体堆栈。`symbol``Font`

## 在Mapbox Studio中管理

当您的主要字体缺少字形时，该文本将以后备字体呈现。Mapbox Studio设置的默认后备字体为`Arial Unicode MS Bold`。Unicode字体比常规字体包含更多的标志符号，从而可以实现更好的多语言覆盖。

在Mapbox Studio中，您可以使用**Components**或**Layers**来管理字体堆栈。本节说明如何使用组件和图层来管理示例字体库：

```js
'Roboto Black',
'Arial Unicode MS Bold';
```

### 组件

{{ <StyleComponentBetaNote /> }}

在使用样式组件构建的模板样式中，可以使用**Typography**选项卡设置后备字体。对于每个组件印刷属性，单击属性的名称，滚动到面板的底部，然后单击 **1 font fallback**以更改后备字体。

{{
    <Browser>
        <Video
            src={Components}
            title="In the Mapbox Studio style editor, click the Typography tab, click the first component typography property, scroll down to the bottom of the panel, and click 1 font fallback."
        />
    </Browser>
}}


### 图层

要在 **Layers** 选项卡中的各个图层上管理字体库，请单击图层的名称，单击**Font** 属性，然后单击 **1 font fallback** 以更改后备字体。

{{
    <Browser>
        <AppropriateImage
            imageId="troubleshooting--manage-fontstacks--layers"
            alt="Screenshot of the Mapbox Studio style editor with the Layers tab selected, the country-label layer selected."
        />
    </Browser>
}}

## 管理渲染时间

字体库的数量与地图上每次缩放的文本密度配对会大大减慢地图的加载时间，尤其是在使用多语言标签时。这是因为在任何设置的缩放级别下，密集的多语言文本都会增加渲染时间。

以下是一些减少地图渲染时间的提示：

- 拉丁语脚本可以处理更多的字体库，而其他脚本（如中文或韩文）可能需要为每个字体库加载数十个字形图块。
- 保持标签稀疏并在缩放级别上分散，可以在地图样式中使用更多字体集。
- 对于带有密集标签的多语言地图，请考虑使用较少的字体库。

## 管理离线下载大小

使用我们的移动SDK之一时，通常可以通过限制样式中的字体栈数量来大大减少下载离线区域所需的空间量。要了解有关减少离线下载大小的更多信息，请参阅我们的[离线地图指南](https://docs.mapbox.com/help/troubleshooting/mobile-offline/)。
