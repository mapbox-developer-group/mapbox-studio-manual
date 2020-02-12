---
title: Style components
description: Learn how components work in the Mapbox Studio style editor.
contentType: reference
order: 3
tag: beta
prependJs:
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Note from '@mapbox/dr-ui/note';"
- "import Video from '@mapbox/dr-ui/video';"
- "import YouAreHere from '../../components/illustrations/you-are-here';"
- "import ComponentProperty from '../../video/overview-components-component-property.mp4';"
- "import Eject from '../../video/overview-components-eject.mp4';"
- "import LayerProperty from '../../video/overview-components-layer-property.mp4';"
- "import Override from '../../video/overview-components-override.mp4';"
- "import StyleComponentBetaNote from '../../components/temporary/style-component-beta-note.js';"
- "import RelatedPage from '@mapbox/dr-ui/related-page';"
---

<p className="txt-l">Style components provide sensible defaults and quick opportunities for customization by optimizing the most common property changes for styles and packaging them into drop-down options, sliders, and toggles.</p>

{{ <StyleComponentBetaNote /> }}

{{
  <YouAreHere
    activeItems={["Template style", "Custom style"]}
  />
}}

## What are components?

A **component** is a collection of related map features that you style as a single unit. Components can include features of multiple types (for example fill, line, and symbol). _Road network_ and _administrative boundaries_ are examples of components. Each component contains several **layers**.

A **layer** is a collection of map features of a _single_ type. _bridge-pedestrian_ is an example of a layer. In the Mapbox Streets style, _bridge-pedestrian_ is one of more than 50 layers in the _Road network_ component. Layers _can_ be a part of a component, but don’t _have_ to be. Layers that are not part of a component are called **custom layers**.

Custom layers cannot be added to components or styled via a component property. They must be positioned and styled as individual, custom layers.


## Style a map using components

The term _property_ refers to a couple different concepts in Mapbox Studio including **layer properties** and **component properties**. Both refer to options for styling map features, but vary in how they work.

### Component property

A **component property** is one of a few available options for styling a single component. A single component property can control multiple layer properties across several layers. Values for component properties are often defined using a toggle (on or off), a dropdown menu with a few options, or a slider with several options along a scale.

{{<RelatedPage contentType='video' title="How to style a map using components" vimeoId='378466157' vimeoThumbnail="/studio-manual/img/video/how-to-style-using-components.jpg">}}
Learn how to use style components in Mapbox Studio.
{{</RelatedPage>}}

_Country boundaries width_ is an example of a component property in the _Administrative boundaries_ component. The value for _Country boundaries width_ is determined by selecting a point along a slider. This component property affects the width of features from several layers including `admin-0-boundary`, `admin-1-boundary`, `admin-0-boundary-bg`, and `admin-1-boundary-bg`.

{{
    <Browser>
        <Video
            src={ComponentProperty}
            title="Adjust the Country boundaries width component property and see the width of boundaries change on the map."
        />
    </Browser>
    <br />
}}

{{<Note title="Component properties and the Mapbox Style Specification">}}
Unlike layer properties, component properties are not directly related to the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/) and cannot be edited outside Mapbox Studio (at runtime).
{{</Note>}}

#### Color and typography properties

In map styles built using components, color- and typography-related options for features across components are determined by the properties defined in the **Color** and **Typography** tabs at the bottom of the **Components** panel. Read more in the reference section on [Colors](/studio-manual/reference/styles/#colors) and [Typography](/studio-manual/reference/styles/#typography).

### Layer property

A **layer property** is one of _many_ available options for styling a single layer. Layer properties often offer more fine-grained control than component properties. _Width_ for line layers is an example of a layer property. The value for the _width_ property is a number representing pixels.

{{
    <Browser>
        <Video
            src={LayerProperty}
            title="Go to the Layers tab and click on the admin-0-boundary layer, set a manual override for the width property, clear the current value, and type in a different value."
        />
    </Browser>
    <br />
}}

Layer properties directly align with paint and layout properties outlined in the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/). **Custom layers** are styled solely using layer properties while layers within components can be styled using a combination of component properties and layer property overrides (detailed below).

## Customize beyond components

There are two options for customizing layer properties in a layer that is styled using component properties. You can either **override** the value of a layer property set by a component property or **eject** the component.

### Override

When you **override** the value of a layer property, the override affects only one layer property for one layer. Manual overrides can be reverted at any time.

{{
    <Browser>
        <Video
            src={Override}
            title="Set a manual override to set color across a zoom range."
        />
    </Browser>
    <br />
}}

Overrides are appropriate for customizing a few layer properties in a few different layers.

### Eject

When you **eject** a component, you are no longer able to edit the layers within that component as a single unit. For example, ejecting the _Road network_ component in the Mapbox Streets style would result in over 50 layers that need to be styled individually using layer properties.

After ejecting a component, the layers will continue to use the layer properties inherited from the initial component properties until they are manually edited. Going forward all layers _must_ be edited using layer properties directly. **Once a component is ejected, it can't be reversed.**

{{<RelatedPage contentType='video' title="How to eject a style component" vimeoId='378704089' vimeoThumbnail="/studio-manual/img/video/how-to-eject-a-style-component.jpg">}}
Learn how to eject a style component in Mapbox Studio to get more control over your map's layers.
{{</RelatedPage>}}


Ejecting a component might be appropriate when you want to change many layer properties across many layers in the same component. It is also necessary when you want to reorder layers within a component or put a custom layer between layers within a single component.

{{
    <Browser>
        <Video
            src={Eject}
            title="Eject a component and view the resulting individual layers."
        />
    </Browser>
}}

### Custom components

It is not possible to build custom components or to add or remove individual layers from an existing component.

## Use a style built with components

The style JSON that results from making a map with components will adhere to the Mapbox Style Specification and can be used like any other Mapbox map style in [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/), our mobile Maps SDKs for [iOS](https://docs.mapbox.com/ios/maps/overview/) and [Android](https://docs.mapbox.com/ios/maps/overview/), and with our [Static Images API](https://docs.mapbox.com/api/maps/#static-images).

You can interact with, add, and remove individual layers and change **layer properties** at runtime when using Mapbox GL JS or our mobile Maps SDKs. It is **not** possible to change **component properties** at runtime. Component properties can only be edited in the Mapbox Studio style editor.
