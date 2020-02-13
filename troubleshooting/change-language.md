---
title: Change your map’s label language
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

When building a map from a Mapbox template style, map labels will appear in English by default. You can change the language of your map's labels directly in the [Mapbox Studio](https://studio.mapbox.com) style editor or dynamically using [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js), the [Mapbox Maps SDK for Android](https://docs.mapbox.com/android/maps/overview/), or the [Mapbox Maps SDK for iOS](https://docs.mapbox.com/ios/maps/overview/). This guide also outlines changing label language in Mapbox Studio Classic.

## Languages available

All Mapbox template maps use the [Mapbox Streets vector tileset](https://docs.mapbox.com/vector-tiles/) for map features. In this tileset, there are different name fields for each label layer. For a complete list of supported languages, see the [Mapbox Streets v{{constants.VERSION_STREETS_TILESET}} tileset documentation](https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v{{constants.VERSION_STREETS_TILESET}}/#name-text--name_lang-code-text).

{{<Note title='Language support in the Navigation SDKs' >}}

Looking for information about the languages supported by the Mapbox Navigation SDKs? See our documentation on internationalization for the [Mapbox Navigation SDK for iOS](https://docs.mapbox.com/ios/navigation/overview/localization-and-internationalization/) and the [Mapbox Navigation SDK for Android](https://docs.mapbox.com/android/navigation/overview/localization/).  

{{</Note>}}

## Right-to-left language support

### Mapbox GL JS
The [`mapbox-gl-rtl-text`](https://github.com/mapbox/mapbox-gl-rtl-text) plugin adds support for text written in the Arabic and Hebrew languages.

### Mapbox Studio
[Mapbox Studio](https://studio.mapbox.com/) loads the [`mapbox-gl-rtl-text`](https://github.com/mapbox/mapbox-gl-rtl-text) plugin by default.

## Change label language in Mapbox Studio

### Components

{{ <StyleComponentBetaNote /> }}

In template styles built with style components, you can change the language of labels using component properties. The available components vary from style to style, but for each component containing labels:

1. Click the name of the component.
2. Find the **Language** property and select a language from the dropdown menu.
3. Repeat for all components containing labels.

{{
  <AppropriateImage
    imageId="troubleshooting--change-language--change-components"
    alt="Screenshot of the Mapbox Studio style editor after clicking a component that contains labels and opening the dropdown menu for the Language property."
  />
}}

### Layers

To change the language of individual layers in the **Layers** tab:

1. Create a new style or edit an existing one in [Mapbox Studio](https://studio.mapbox.com/styles/).
2. Switch to the **Layers** tab.
3. Select the layer that contains the labels you'd like to edit.
4. Under the **Text** tab, click the value next to **Text field**. A panel will appear with all language options for the layer.
5. Click the desired language; the map will update on select.

{{
  <AppropriateImage
    imageId="troubleshooting--change-language--change-one-layer"
    alt="screenshot in Mapbox Studio of resulting new language in map style"
  />
}}

## Change label language dynamically

### Mapbox GL JS

If you are comfortable with JavaScript, you can change the language of your labels dynamically by using the [`.setLayoutProperty()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#setlayoutproperty) method in [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/). See the [language switcher](https://docs.mapbox.com/mapbox-gl-js/example/language-switch/) Mapbox GL JS example for more details.

You can also use the **Mapbox GL Language** plugin to automatically change the layers of a map style to use the `text-field` that matches the browser language. Read more about this and other capabilities of the Mapbox GL Language plugin on [GitHub](https://github.com/mapbox/mapbox-gl-language/#mapbox-gl-language--).

### Mapbox Maps SDK for Android

With the Mapbox Maps SDK for Android, you can change the language of labels on your map dynamically at runtime. For example, here's how you would change a map's city labels to Russian:

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

You could also use [the Mapbox Localization Plugin for Android](https://docs.mapbox.com/android/plugins/overview/localization/) if you want to change the language of the entire map all at once. This plugin detects the set language of the Android device and then changes all map text to that language. The plugin also enables you to change the entire map to a specific language. This could be useful if you want to provide your user the ability to switch the map to a specific language at a specific time, rather than locking the map to the device's set default language or a particular language.

### Mapbox Maps SDK for iOS

With the Mapbox Maps SDK for iOS, you can automatically change the language of labels to the system's preferred language at runtime.

{{
  <IosViewControllerToggle
    id="system-language"
    swift={generalSwiftCode}
    objectiveC={generalObjcCode}
  />
}}

You can also change labels to a specific language, either throughout the map or only for certain kinds of labels:

{{
  <IosViewControllerToggle
    id="specific-language"
    swift={specificSwiftCode}
    objectiveC={specificObjcCode}
  />
}}

See the [Maps SDK for iOS documentation](https://docs.mapbox.com/ios/api/maps/{{constants.VERSION_IOS_MAPS}}/Classes/MGLStyle.html#/Localizing%20Map%20Content) for more information.

## Change label language in Mapbox Studio Classic

Most of the Mapbox preset styles in Mapbox Studio Classic will have a `@name` variable in the CartoCSS. This is where you can set the language. Below are the options and an example of how to set the value of `@name` to `'[name_en]'` or English labels.

```scss
// Language options: name (local), name_en, name_fr, name_es, name_de
@name: '[name_en]';
```

Swap out any of the language options inside the brackets to change your labels to that language.

Next, you must set all the labels with the property `text-name` with the value `@name`. For example:

```scss
#country_label[zoom>=3] {
  text-name: @name;
  ...
}
```
