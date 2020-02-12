---
title: Components
description: In the Components tab, you can toggle the visibility of components, edit component properties, eject a component into layers, and define colors and typography groups.
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
contentType: reference
tag: beta
---

## Components

{{ <StyleComponentBetaNote /> }}

In the **Components** tab, you can toggle the visibility of components, edit component properties, eject a component into layers, and define colors and typography groups.

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-components-intro"
      alt="A screenshot of the Mapbox Studio style editor with the Components tab selected."
    />
  </Browser>
}}

### Components list

All components in the current style are listed at the top of the Components tab. While there are over a dozen components used throughout Mapbox template styles, the exact list of components will depend on the template style you are editing.

#### Hide and show components

To hide the map features in a component, hover over the component name in the list. A {{ <Icon name="noeye" inline={true} /> }} will appear. Click the icon to hide the component. To show a hidden component, click the {{ <Icon name="eye" inline={true} /> }}.

{{
  <Browser>
    <Video
      src={HideAndShow}
      title="Turn on and off components by clicking the eye icon that appears after hovering over the name of a component."
    />
  </Browser>
}}

#### Edit component properties

To edit the style of map features in a component, click on the name of the component in the list. A panel listing the available component properties will open.

There are a few component properties for each component, and the properties available vary between components. A single component property can control multiple layer properties across several layers. Values for component properties are often defined using a toggle (on or off), a dropdown menu with a few options, or a slider with several options along a scale.

{{
  <AppropriateImage
    imageId="reference-styles-components-component-properties"
    alt="A screenshot of the Mapbox Studio style editor after clicking the Points of interest component to open the component properties panel."
  />
  <br />
}}

{{<Note title="Component properties and the Mapbox Style Specification">}}
Unlike layer properties, component properties are not directly related to the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/) and cannot be edited outside Mapbox Studio (at runtime).
{{</Note>}}

#### More options

Toggle from **Edit** to **More options** in the component properties panel to **Eject component**  and **View  layers**.

Click **Eject component** to split the component into layers. When you eject a component, you are no longer able to edit the layers within that component as a single unit. After ejecting a component, the layers will continue to use the layer properties inherited from the initial component properties until they are manually edited. Going forward all layers _must_ be styled using layer properties directly.

**Once a component is ejected, it can't be reversed.**

{{
  <Browser>
    <Video
      src={Eject}
      title=""
    />
  </Browser>
  <br />
}}

Click **View layers** to see all layers within the selected component. Clicking **View layers** will switch your current view from the **Components** tab to the **Layers** tab and select all the layers in the layer list.

{{
  <Browser>
    <Video
      src={ViewLayers}
      title=""
    />
  </Browser>
}}

### Colors

The **Colors** tab displays colors used throughout the style. There are over a dozen **component color properties** you can define in Mapbox template styles. A component color property applies a single color to many features across components. _Greenspace_ is an example of a color category that applies to features in three different components (_Point of interest labels_, _Walking, cycling, etc._ and _Land & water_).

{{
  <Browser>
    <Video
      src={ColorsTab}
      title=""
    />
  </Browser>
  <br />
}}

The **color palette** contains a list of possible component color properties. You can add and remove color properties in the color palette. After a color property is added to your palette, you can change the value by clicking the color square to open a color picker where you can define an RGBA, HSLA, or hex code.

{{
  <Video
    src={ColorPalette}
    title=""
  />
  <br />
}}

Not every color category has to be included in the color palette. If a color category is not included in the color palette (no color is assigned), it will fall back to the color defined for the _Base_ color category, which can’t be removed. This means you will always have a well-coordinated palette without needing to choose a value for every possible color category.

For example, if the color assigned to _Base_ is purple and _Greenspace_ is green, green parks will be on top of a purple base. If you remove _Greenspace_ from the palette, your parks will turn a purple shade.

This is a pattern we use in our template styles. For example, the default color palette for Streets has 13 colors while Basic's default color palette has only 10 colors.

### Typography

The **Typography** tab displays fonts and text styles used throughout your style. There are up to eight component typography properties you can define in Mapbox template styles. A component typography property applies font and text styles to features in one or more components. _Minor cities_ is an example of a typography property that applies to a subset of features in the _Place labels_ component.

You can define the font, set the text size, and transform the case (uppercase, lowercase) by clicking the item in the list to open a typography panel.

{{
  <Browser>
    <Video
      src={TypographyTab}
      title=""
    />
  </Browser>
  <br />
}}
