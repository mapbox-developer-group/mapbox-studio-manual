---
title: Introduction
description: Learn how to create and manage datasets in Mapbox Studio.
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import YouAreHere from '../../../../components/illustrations/you-are-here';"
  - "import Browser from '@mapbox/dr-ui/browser';"
  - "import Note from '@mapbox/dr-ui/note';"
contentType: reference
---

You can use the **Mapbox Studio [dataset editor](https://www.mapbox.com/studio/datasets/)** to import, create, and edit point, line, and polygon features and their properties. A collection of these features in Mapbox is called a **[dataset](https://www.mapbox.com/help/define-dataset)**. Datasets can either be downloaded as GeoJSON or exported to tilesets for use in Mapbox styles (see the [Introduction](https://www.mapbox.com/help/studio-manual) section for more information).

{{
  <YouAreHere
    activeItems={["Upload", "Dataset"]}
  />
}}

## What is a dataset?

A **dataset** is an editable collection of [GeoJSON](https://www.mapbox.com/help/define-geojson) features. Datasets are distinct from [tilesets](https://www.mapbox.com/help/define-tileset) in that datasets can be edited on a feature-by-feature basis, but cannot be used directly in Mapbox Studio style.

Any dataset you create can be exported to a tileset, which can be then added as a layer in the [Mapbox Studio style editor](/studio-manual/reference/styles/#style-editor).

### Downloading and exporting datasets

Once you've created a dataset, you can export it to a tileset for use in a Mapbox map (see Style editor for more information), download it as a GeoJSON FeatureCollection, or use it with the [Datasets API](https://www.mapbox.com/api-documentation/maps/#datasets). Datasets can also be edited after export. To learn how to download and export datasets, see below.
