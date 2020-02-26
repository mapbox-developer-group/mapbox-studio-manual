---
title: 解决 Mapbox Studio 上传 SVG 图像失败的问题
description: 学习如何解决 Mapbox Studio 上传 SVG 图像失败的问题。
topics:
- map design
contentType: troubleshooting
---

<!--copyeditor ignore retext-indefinite-article-->
Mapbox Studio 样式编辑器支持 SVG 格式的图标和图案。 Studio 使用 SVG 是因为它具有可伸缩性，并支持具有各种屏幕分辨率的设备。Mapbox Styles API 使用源 SVG 来以各种分辨率渲染 [sprites](/help/glossary/sprite/)（PNG 的集合），然后根据用户的设备传递适当的 sprite。例如，如果用户在具有高分辨率屏幕的设备上查看您的地图，他们将收到 2 倍的 sprite。如果用户在具有低分辨率屏幕的设备上查看您的地图，他们将收到 1 倍的 sprite。

## 共性问题

有时 SVG 无法成功上传或成功上传，但未按预期显示。以下是一些常见问题和疑难解答建议。

### 颜色丢失，变成了黑色的

如果您将 SVG 添加到 Mapbox Studio 中，但显示为黑色，则可能是因为您使用的是 `<style>` 标签来分配样式属性，而不是使用内联的 `<style>` 属性。

如果您使用 Adobe Illustrator 创建 SVG，选择 **Export** 或 **Save As** 并遵从 [Create SVG icons in Adobe Illustrator](#create-svg-icons-in-adobe-illustrator) 中的指导，让 SVG 文件适合于 Mapbox Studio。

### 草图图标在 Mapbox Studio 中无法正确呈现

草图生成的 SVG 可能包含一些 Mapbox Studio 无法正确呈现的 SVG 过滤器。您可以在 Adobe Illustrator 中打开 SVG，然后执行`Object > Expand Appearance`。

### "Icon upload failed" 错误

如果您的图标无法上传，则可能是因为 SVG 太大或文件不是有效的 SVG。 （有关 Mapbox 支持的 SVG 元素和属性的列表，请参见 [Mapnik SVG support page](https://github.com/mapnik/mapnik/wiki/SVG-support)）。我们建议您确保：

- 您上传的图像小于 1024px x 1024px。
- SVG 文件中没有语法错误。

### 大小属性导致图标看起来模糊

如果在 Mapbox Studio 样式编辑器或代码中调整图标的“大小”，您可能会注意到它似乎模糊或抖动。为了保持图标的清晰，请将“大小”属性设置为“ 1”。如果要在地图上显示更大的图像，请上传更大的 SVG。

### 从 Mapbox 模板样式更改图标

您可以通过单击 [Mapbox Studio style list](https://www.mapbox.com/studio/styles/) 中的样式的 `Download` 按钮来获取任何 Studio 样式中使用的原始 SVG，或使用 [Maki editor](https://www.mapbox.com/maki-icons/editor/) 创建一整套定制设计的图标。

## 在 Adobe Illustrator 中创建 SVG 图标

我们支持多种 SVG 功能，但某些功能不可用。要确保您的矢量图形正确地包含在地图中，请按照下列步骤操作：

确保所有内容均为矢量格式。如果您已经应用了一些 Illustrator 效果，请转到 **Object > Expand Appearance**。请勿将符号或光栅图像包括在您的 SVG 中，无论是嵌入的还是链接的。

有两种办法可以从 Illustrator 中生成 `.svg` 文件：**Export** 和 **Save As**.

### 导出

- 到 **File > Export**.
- 点击 **Use Artboards** 并输入 **Range** 中的 artboard number。
- 点击 **Export** 按钮。
- 在“SVG选项”窗口的 **Advanced Options** 面板下，选择 **Presentation Attributes** 作为 **Styling** 选项。取消选中 **Responsive** 复选框，并确保 **Decimal** 值大于3。您的设置应如下所示：

![adobe illustrator SVG export settings](/help/img/studio/svg_export_illustrator_setting.png)

### 另存为

- 到 **File > Save As**, 点击 **Save As**。
- 在 SVG 选项穿够, 选择 **SVG profiles** 中的 **SVG 1.1**，选择 **CSS Properties** 中的 **Presentation Attributes**，**Decimal Places** 选择 3 以上, 取消选择 **Responsive**。就像下面这样：

![adobe illustrator SVG export settings](/help/img/studio/svg_saveas_illustrator_setting.png)

## 不支持的SVG元素和属性

有一些 Mapbox 上传器不支持的 SVG 元素和属性。有关受支持和不受支持的 SVG 元素和属性的完整列表，请参见 [Mapnik SVG support page](https://github.com/mapnik/mapnik/wiki/SVG-support)。
