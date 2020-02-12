---
title: Tileset information page
description: Learn how to create and manage tilesets in Mapbox Studio.
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Note from '@mapbox/dr-ui/note';"
contentType: reference
---

## Tileset information page

{{
  <Browser>
    <AppropriateImage
      imageId="reference-tilesets-info-page"
      alt="Screenshot of the page in Mapbox Studio that lists detailed information about one tileset including all source layers, the tileset ID, the format, the type, the size, and more."
    />
  </Browser>
}}

Each tileset has an information page that provides additional information about the tileset. For vector tilesets, you'll see a list of **source layers** within the tileset. Your custom tilesets will only have one layer; Mapbox Streets and Mapbox Terrain include multiple layers. Each layer in the listing has information on geometry type, zoom levels of the data, and data attributes and value types.

From this page you can also replace the data in the tileset, make the tileset private, and delete the tileset.

The right sidebar of the page includes additional information about the tileset, including:

- The [**tileset ID**](https://docs.mapbox.com/help/glossary/tileset-id) of the tileset.
- The **format** of the tileset.
- The **type** of the tileset (raster or vector).
- The **size** of the tileset.
- The **zoom extent** of the tileset, or which zoom levels have been rendered &mdash; vector tilesets can be styled up to zoom level 22, but data will be simplified to the highest rendered zoom level.
