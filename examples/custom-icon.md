---
title: Add a custom icon
description: Upload an SVG and add it to the map as a custom icon.
topic: Map design
image: thumbnail-custom-icon
prependJs:
  - "import StudioExample from '../../components/studio-example';"
  - "import GLWrapper from '@mapbox/dr-ui/gl-wrapper';"
contentType: example
language:
- No code
---

{{
<GLWrapper>
  <StudioExample
    username="mapbox"
    styleId="cjk8zx2wx0k732qpb7oxam125"
    mapPosition={{
      zoomLevel: "3",
      centerLatitude: "23.162721",
      centerLongitude: "95.256611",
      bearing: "0",
      pitch: "0"
    }}
    relevantJson={{
      codeCaption: "Conditional icon expression:",
      layerName: "country-label",
      propertyType: "layout",
      propertyName: "icon-image"
    }}
    specs={[
      <p>This is a modified version of the <strong>Basic template</strong> style.</p>,
      <p>An SVG has been uploaded to the style editor using the <strong>Images</strong> option in the toolbar.</p>,
      <p>The <strong>Icon</strong> and <strong>Position</strong> options for the <code>country-label</code> layer (a <code>symbol</code> layer) have been modified.</p>
    ]}
  />
</GLWrapper>
}}

## About this style

- **SVG assets**: [Scalable Vector Graphics (SVG)](https://developer.mozilla.org/en-US/docs/Web/SVG) is a markup language for describing two-dimensional vector graphics. You can upload SVG images to your custom style in the Mapbox Studio style editor. You can click on the **Images** option in the top toolbar to manage the SVGs in your style. In this example, an icon called `mapbox-logo` has been uploaded. Read more about troubleshooting SVG uploads in our [SVG asset errors in Mapbox Studio guide](https://docs.mapbox.com/help/troubleshooting/studio-svg-upload-errors/).
- **Symbol layer**: Icons are added to the map using a `symbol` layer. Symbol layers are the most complex style type in Mapbox Studio. Symbol layer styling is separated into four main groups: **Text**, **Icon**, **Position**, and **Placement**. In this example, the **Icon** and **Position** options have been modified. Click on the `country-label` layer to explore the style properties in this style:
    - In the **Icon** tab, the `mapbox-logo` icon is applied to several countries using data conditions: if `name_en` is equal to any of the names of countries with a Mapbox office, set the _Image_ property to `mapbox-logo`.
    - In the **Position** tab, both the _Text anchor_ and the _Icon offset_ property have been modified to anchor the text below the data point it is labeling and the icon is offset to be above the data point.
- **Sprite**: A sprite is a single image containing all icons included in a style. Sprites are often used in web development and even video games to improve performance. If you’re using Mapbox Studio, you don’t have to worry about the technical underpinnings of sprites, but if you're interested in learning more, you can [read about sprites on our Help page](https://www.mapbox.com/help/define-sprite/).

## Related resources

**Looking for more guidance?** Read our [tutorials](https://www.mapbox.com/help/tutorials/#map-design).
