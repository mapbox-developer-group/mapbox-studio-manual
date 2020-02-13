---
title: Manage your fontstacks
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

A **fontstack** is an ordered list consisting of a _primary font_ and _optional fallback font(s)_.

Fonts can only be set on [`symbol`](https://www.mapbox.com/studio-manual/reference/styles/#symbol-layer) layer types. Set fonts from the **Style** tab of each `symbol` layer, under **Text**, in the `Font` input field. Each list of unique font pairings between primary and fallback font(s) will create a new fontstack.

## Manage in Mapbox Studio

When your primary font has missing glyphs, the text will be rendered in the fallback font instead. The default fallback font set by Mapbox Studio is `Arial Unicode MS Bold`. Unicode fonts include more glyphs than conventional fonts, allowing for better multilingual coverage.

In Mapbox Studio you can manage fontstacks using **Components** or **Layers**. This section shows how to manage this example fontstack using either components and layers:

```js
'Roboto Black',
'Arial Unicode MS Bold';
```

### Components

{{ <StyleComponentBetaNote /> }}

In template styles built with style components, you can set a fallback font using the **Typography** tab. For each component typography property, click the name of the property, scroll to the bottom of the panel, and click **1 font fallback** to change your fallback font.

{{
    <Browser>
        <Video
            src={Components}
            title="In the Mapbox Studio style editor, click the Typography tab, click the first component typography property, scroll down to the bottom of the panel, and click 1 font fallback."
        />
    </Browser>
}}


### Layers

To manage fontstacks on individual layers in the **Layers** tab, click the name of the layer, click the **Font** property, and click **1 font fallback** to change your fallback font.

{{
    <Browser>
        <AppropriateImage
            imageId="troubleshooting--manage-fontstacks--layers"
            alt="Screenshot of the Mapbox Studio style editor with the Layers tab selected, the country-label layer selected."
        />
    </Browser>
}}

## Manage rendering time

The number of fontstacks paired with the density of text per zoom on your map can significantly slow down your map's load time, especially when using multilingual labels. This is because dense multilingual text, at any set zoom level, will increase rendering time.

Here are some tips to decrease your map's rendering time:

 - Latin scripts can handle more fontstacks, while other scripts like Chinese or Hangul, can require loading dozens of glyph tiles per fontstack.
 - Keeping labels sparse and spread across zoom levels allows for more fontstacks in your map style.
 - For multilingual maps with dense labeling, consider using fewer fontstacks.

## Manage offline download size

When using one of our mobile SDKs, you can often reduce the amount of space required to download an offline region dramatically by limiting the number of fontstacks in your style. To learn more about reducing offline download sizes, please see our [guide to offline maps](/help/troubleshooting/mobile-offline/).
