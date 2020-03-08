---
title: 更改地图的标签语言
description: Learn about available languages and how to change your map’s language.
topics:
- data
- map design
prependJs:
  - "import * as constants from '../../constants';"
  - "import AppropriateImage from '../../components/appropriate-image';"
  - "import Note from '@mapbox/dr-ui/note';"
  - "import StyleComponentBetaNote from '../../components/temporary/style-component-beta-note';"
  - "import Video from '@mapbox/dr-ui/video';"
  - "import PropertiesTextChange from '../../video/change-language-properties-text-change.mp4';"
  - "import IosViewControllerToggle from '../../components/context-dependent/ios-view-controller-toggle';"
  - "import AndroidActivityToggle from '../../components/context-dependent/android-activity-toggle';"
  - "import generalSwiftCode from '../../snippets/manual/change-language--general-swift.swift';"
  - "import generalObjcCode from '../../snippets/manual/change-language--general-objc.m';"
  - "import specificSwiftCode from '../../snippets/manual/change-language--specific-swift.swift';"
  - "import specificObjcCode from '../../snippets/manual/change-language--specific-objc.m';"
contentType: troubleshooting
---

从Mapbox模板样式构建地图时，默认情况下，地图标签将以英文显示。您可以直接在[Mapbox Studio](https://studio.mapbox.com/)样式编辑器中更改地图标签的语言，也可以使用[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js)，[Android](https://docs.mapbox.com/android/maps/overview/)的[Mapbox Maps SDK](https://docs.mapbox.com/ios/maps/overview/)或[iOS](https://docs.mapbox.com/ios/maps/overview/)的[Mapbox Maps SDK](https://docs.mapbox.com/ios/maps/overview/)动态更改地图标签的语言。本指南还概述了在Mapbox Studio Classic中更改标签语言。

## 可用语言

所有Mapbox模板地图均使用[Mapbox Streets矢量图块集](https://docs.mapbox.com/vector-tiles/)作为地图[要素](https://docs.mapbox.com/vector-tiles/)。在此图块集中，每个标签层都有不同的名称字段。有关支持的语言的完整列表，请参见[Mapbox Streets v 8 tileet 文档](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/#name-text--name_lang-code-text)。

{{<Note title='导航SDK中的语言支持' >}}

寻找有关Mapbox导航SDK支持的语言的信息吗？见我们的国际化的文档[Mapbox导航SDK适用于iOS](https://docs.mapbox.com/ios/navigation/overview/localization-and-internationalization/)和[Mapbox导航SDK为Android](https://docs.mapbox.com/android/navigation/overview/localization/)。 

{{</Note>}}

## 对从右到左的语言的支持

### Mapbox GL JS
该[`mapbox-gl-rtl-text`](https://github.com/mapbox/mapbox-gl-rtl-text)插件增加了对以阿拉伯语和希伯来语编写的文本的支持。

### Mapbox Studio
[[Mapbox Studio](https://studio.mapbox.com/)[`mapbox-gl-rtl-text`](https://github.com/mapbox/mapbox-gl-rtl-text)默认情况下会加载插件。

## 在Mapbox Studio中更改标签语言

### 组件

{{ <StyleComponentBetaNote /> }}

在使用样式组件构建的模板样式中，可以使用组件属性更改标签的语言。可用的组件因样式而异，但是对于每个包含标签的组件：

1. 单击组件的名称。
2. 找到“ **语言”**属性，然后从下拉菜单中选择一种语言。
3. 对所有包含标签的组件重复上述步骤。

{{
  <AppropriateImage
    imageId="troubleshooting--change-language--change-components"
    alt="Screenshot of the Mapbox Studio style editor after clicking a component that contains labels and opening the dropdown menu for the Language property."
  />
}}

### 层数

要在“ **图层”**标签中更改各个图层的语言，请执行以下操作：

1. 在[Mapbox Studio中](https://studio.mapbox.com/styles/)创建新样式或编辑现有样式。
2. 切换到“ **图层”**选项卡。
3. 选择包含您要编辑的标签的图层。
4. 在“ **文本”**选项卡下，单击“ **文本”字段**旁边的值。将出现一个面板，其中包含该图层的所有语言选项。
5. 单击所需的语言；地图将在选择时更新。

{{
  <AppropriateImage
    imageId="troubleshooting--change-language--change-one-layer"
    alt="screenshot in Mapbox Studio of resulting new language in map style"
  />
}}

## 动态更改标签语言

### Mapbox GL JS

如果您对JavaScript感到满意，则可以使用[Mapbox GL JS中](https://docs.mapbox.com/mapbox-gl-js/)的[`.setLayoutProperty()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#setlayoutproperty)方法来动态更改标签的语言。有关更多详细信息，请参见[语言切换器](https://docs.mapbox.com/mapbox-gl-js/example/language-switch/) Mapbox GL JS示例。

您还可以使用**Mapbox GL语言**插件自动更改地图样式的图层，以使用`text-field`与浏览器语言匹配的。在[GitHub上](https://github.com/mapbox/mapbox-gl-language/#mapbox-gl-language--)了解有关Mapbox GL语言插件的其他功能的更多信息。

### 适用于Android的Mapbox Maps SDK

借助适用于Android的Mapbox Maps SDK，您可以在运行时动态更改地图上标签的语言。例如，以下是将地图的城市标签更改为俄语的方法：

{{
<AndroidActivityToggle
id="change-language-android"
java={`
map.getStyle(new Style.OnStyleLoaded() {
	@Override
	public void onStyleLoaded(@NonNull Style style) {

		Layer settlementLabelLayer = style.getLayer("settlement-label");
	
		if (settlementLabelLayer != null) {
		  settlementLabelLayer.setProperties(textField("{name_ru}"));
		}
	}
});
`}
kotlin={`
map?.getStyle {
	val settlementLabelLayer = it.getLayer("settlement-label")
	settlementLabelLayer?.setProperties(textField("{name_ru}"))
}
`}
/>
}}

如果您想一次更改整个地图的语言，也可以使用[Android的Mapbox本地化插件](https://docs.mapbox.com/android/plugins/overview/localization/)。此插件检测Android设备的设置语言，然后将所有地图文本更改为该语言。该插件还使您可以将整个地图更改为特定的语言。如果要向用户提供在特定时间将地图切换为特定语言的功能，而不是将地图锁定为设备的默认语言或特定语言的功能，这可能会很有用。

### Mapbox Maps SDK for iOS

使用适用于iOS的Mapbox Maps SDK，您可以在运行时自动将标签的语言更改为系统的首选语言。

{{
  <IosViewControllerToggle
    id="system-language"
    swift={generalSwiftCode}
    objectiveC={generalObjcCode}
  />
}}

您还可以在整个地图中或仅针对某些种类的标签将标签更改为特定的语言：

{{
  <IosViewControllerToggle
    id="specific-language"
    swift={specificSwiftCode}
    objectiveC={specificObjcCode}
  />
}}

有关更多信息，请参见[Maps SDK for iOS文档](https://docs.mapbox.com/ios/api/maps/5.7.0/Classes/MGLStyle.html#/Localizing Map Content)。

## 在Mapbox Studio Classic中更改语言标签

Mapbox Studio Classic中的大多数Mapbox预设样式在CartoCSS中都会有一个`@name`变量。您可以在此处设置语言。以下是选项和如何设置`@name`to `'[name_en]'`或英文标签值的示例。

```scss
// Language options: name (local), name_en, name_fr, name_es, name_de
@name: '[name_en]';
```

交换括号内的任何语言选项，即可将标签更改为该语言。

接下来，必须将所有标签的属性`text-name`设置为value `@name`。例如：

```scss
#country_label[zoom>=3] {
  text-name: @name;
  ...
}
```
