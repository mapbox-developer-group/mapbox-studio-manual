
本手册包含对Mapbox Studio所有内容的说明，涵盖各个组件的一般性说明以及某些特定工具的详细信息。在Mapbox Studio中使用特定工具时，它可以用作参考，也可以用作一种了解如何构造Mapbox地图的方式。

- [**概述**](/studio-manual/overview/): Mapbox Studio中地图组件和工作流程的概念性说明。
- [**示例**](/studio-manual/examples/): 一组可以浏览并添加到帐户中的样式示例。
- [**帮助**](/studio-manual/help/): 关于如何在Mapbox Studio中创建样式并在Web和移动应用程序中使用样式的疑难解答指南和分步教程。
- [**参考**](/studio-manual/reference/): Mapbox Studio界面的全面介绍

{{<Note title="Step-by-step tutorials">}}
<!-- copyeditor disable great-->
你可以通过学习Studio手册“ 帮助”页面上列出的教程，从而在Mapbox Studio中创建属于你的第一个地图！这些教程教您如何将数据上传到Mapbox Studio，在Mapbox Studio中创建自定义样式，在其他平台上使用新的自定义地图样式等等。
<!-- copyeditor enable great-->
{{</Note>}}


## Mapbox Studio是什么?

Mapbox Studio是Mapbox的应用程序，用于管理地理空间数据和设计自定义地图样式。您可以通过使用Mapbox Studio上传和编辑自己的数据，使用Mapbox提供的图块集，添加自定义字体和图标或编辑内置模板地图样式，按照您的确切规范构建和设计地图。借助Mapbox Studio，全面的数据管理和设计样式控制唾手可得。

{{
  <WhatIsMapboxStudio />
}}

### 它是如何运作的？

数字地图由三个主要部分组成-地理空间数据，描述数据外观的样式规则以及获取数据并显示地图的工具。在Mapbox中，我们做了这些事情：

{{
  <HowDoesItWork />
}}

Mapbox Studio提供了将数据转换为图块和创建样式的工具。其中还包括一个数据集编辑器，用于在转换为图块之前创建和编辑数据。当你创建样式后，您可以使用我们的[Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js) 或 [mobile SDKs](https://www.mapbox.com/mobile)显示地图。

{{
  <GLWrapper><MapboxGlSystem /></GLWrapper>
}}


## 工作流程演示案例

Mapbox Studio在设计上的灵活性可以支持多种工作流程，以下是在Mapbox Studio中关于使用您自己的数据创建自定义地图样式的一种。在此案例中，使用数据集编辑器创建自定义数据，将其导出到图块，在样式编辑器中设置样式，然后使用Mapbox GL JS在网络上显示。

{{
  <GLWrapper><SampleWorkflow /></GLWrapper>
}}
