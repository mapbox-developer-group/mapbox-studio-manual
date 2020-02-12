---
title: Introduction
description: Learn how to create and manage tilesets in Mapbox Studio.
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Note from '@mapbox/dr-ui/note';"
- "import YouAreHere from '../../../../components/illustrations/you-are-here';"
contentType: reference
---

Tilesets are the primary data format for Mapbox maps. Whether you start with your own custom data or you create a [dataset](/studio-manual/reference/datasets/) first, converting your data into a tileset will allow you to add it to a Mapbox map and style it using the [Mapbox Studio style editor](/studio-manual/reference/styles/).

{{
  <YouAreHere
    activeItems={["Upload", "Tileset"]}
  />
}}

## What is a tileset?

A [**tileset**](https://www.mapbox.com/help/define-tileset) is a collection of raster or vector data broken up into a uniform grid of square tiles at up to 22 preset zoom levels. Tilesets are used in Mapbox libraries and SDKs as a core piece of making maps visible on mobile or in the browser; they are also the main mechanism we use for determining [map views](https://www.mapbox.com/help/define-map-view/).

Tilesets are highly cacheable and load quickly. Mapbox relies heavily on both raster and vector tilesets to keep our maps fast and efficient.
