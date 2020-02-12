---
title: Style editor overview
description: The Mapbox Studio style editor is a tool for creating map styles.
prependJs:
- "import StyleEditorDiagram from '../../../../components/illustrations/style-editor-diagram';"
- "import YouAreHere from '../../../../components/illustrations/you-are-here';"
contentType: reference
---

The **Mapbox Studio style editor** is a tool for creating map styles. A **[style](https://docs.mapbox.com/help/glossary/style)** is a set of rules for how your map will be rendered on a page. It includes references to your data, map images (icons, markers, patterns), fonts, and, most importantly, it defines how all your data should be styled on your map.

{{
  <YouAreHere
    activeItems={["Tileset", "Template style", "Custom style", "Add data to style", "Style data"]}
  />
}}

## What is a style?

A **style** is a JSON document that conforms to the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/). The style specification is designed especially for [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js) (browser) and the Mapbox mobile SDKs (mobile) to read and understand so your map can be rendered on the page. The style controls almost everything about the map.

## Style editor

The Mapbox Studio style editor allows you to create a custom [style](https://docs.mapbox.com/help/glossary/style) by editing [components](#components), adding [layers](#layers), uploading custom icons, and publishing your style. Click on the name of any style listed on your [Styles page](https://studio.mapbox.com/styles/) to open it in the style editor.

{{
  <StyleEditorDiagram
    imageId="reference-styles-introduction-style-editor-toc"
    alt="A diagram of the Mapbox Studio style editor."
  />
}}

Use the **styling panel** on the left side of the style editor to edit the appearance of map features. For styles that use components, there are two options for styling map features:

- Use the **Components** tab to style many layers at once. 
- Use the **Layers** tab to style each layer individually or add custom layers.

All changes made to your style will appear on the **map canvas** in the center of the style editor. You can click on the map to see all layers at a single point and when the **Select data** panel is open, you can inspect individual features from the selected tileset to view their properties. [Read more about how the map canvas works below.](#map-canvas)

Use the toolbar along the top of the screen to adjust style settings, manage icons and fonts, export an image to print, and publish your style.

### Publish

The **Publish** button in the upper right of the style editor allows you to save your style so you can use it in production applications.

Every change you make is tracked within Mapbox Studio, and saved as a **draft** version of your style. The changes will not show in any of your production applications until you click **Publish**. Updates can take up to 15 minutes to show on your live map.

For more information on draft vs. production styles, see [Publish your style](/studio-manual/overview/publish-your-style/#draft-vs-production-styles).