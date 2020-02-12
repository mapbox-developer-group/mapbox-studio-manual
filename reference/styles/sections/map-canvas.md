---
title: Map canvas
description: You can interact with the map to see all layers at a single point and when the Select data panel is open, you can inspect individual features from the selected tileset to view their properties.
prependJs:
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Note from '@mapbox/dr-ui/note';"
- "import Video from '@mapbox/dr-ui/video';"
- "import MapCanvas from '../../../../video/reference-styles-map-canvas.mp4';"
contentType: reference
---

## Map canvas

All changes made to your style will appear on the map in the center of the style editor. You can interact with the map to see all layers at a single point and when the **Select data** panel is open, you can inspect individual features from the selected tileset to view their properties.

{{
  <Browser>
    <Video
      src={MapCanvas}
      title="Interact with the map canvas and click to open layer and component details."
    />
  </Browser>
}}

<h4 id='search-toolbar'>{{<Icon name='search' inline={true} />}} Search places</h4>

The {{<Icon name='search' inline={true} />}} magnifying glass icon allows you to search for locations on the map. Type in what you're looking for and select the result and search will take you to the exact location. This search is powered by the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/#geocoding).

Although you can search and view places in the style editor, you cannot create new points in the style editor. See the next section on the [Mapbox Studio dataset editor](/studio-manual/reference/datasets/) to learn how to search for places and create new features to be added to your map.
