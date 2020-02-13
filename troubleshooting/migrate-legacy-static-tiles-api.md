---
title: Migrating to the modern Static Tiles API
description: Update your Leaflet.js or Mapbox.js implementation to use the modern Static Tiles API.
topics:
- web apps
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
  - "import CodeSnippet from '../../components/code-snippet';"
  - "import { highlightJsx } from '@mapbox/dr-ui/highlight/jsx';"   
  - "import UserAccessToken from '../../components/user-access-token';"
  - "import MigrationCodeExample from '../../components/migration-code-example';"
  - "import { leaflet, mapboxJS } from '../../data/migrate';"
contentType: troubleshooting
---

If you are using a custom [classic style](https://docs.mapbox.com/help/glossary/classic-style/) that you created in Studio Classic and want to migrate to the modern [Static Tiles API](https://docs.mapbox.com/api/maps/#static-tiles), you will need to [create a new custom style](/help/tutorials/create-a-custom-style/) with [Mapbox Studio](/help/glossary/mapbox-studio/). You can then update your Leaflet or Mapbox.js implementation with your new [style ID](/help/glossary/style-id/) following the guidance on this page.

## Leaflet implementations

If you are using [Leaflet](/help/glossary/leaflet/) with a Studio Classic [template style](https://docs.mapbox.com/studio-manual/overview/map-styling/#template-styles) (for example, `mapbox.streets`), use the modern [equivalent template style](https://docs.mapbox.com/api/maps/#mapbox-styles) with the [Mapbox Static Tiles API](https://docs.mapbox.com/api/maps/#static-tiles) when initializing the `tileLayer`. This only requires changing a few lines of code.

<!--copyeditor disable mapbox-->
{{<MigrationCodeExample
before={leaflet.before}
after={leaflet.after}
id='Leaflet'
highlighter={()=> highlightJsx}
/>}}
<!--copyeditor enable mapbox-->

## Mapbox.js implementations
Because [Mapbox.js](/help/glossary/mapbox-js) is a plugin for [Leaflet](/help/glossary/leaflet/), the migration pattern is similar. Rather than passing the string id of Mapbox template style (for example, `'mapbox.streets'`), you will initialize a [`styleLayer`](https://docs.mapbox.com/mapbox.js/api/v3.2.1/l-mapbox-stylelayer/) and add this layer to your map.

{{<MigrationCodeExample
before={mapboxJS.before}
after={mapboxJS.after}
id='Mapbox'
highlighter={()=> highlightJsx}
accessToken={<UserAccessToken />}
/>}}

## Additional resources

- [Leaflet Documentation](https://leafletjs.com/)
- [Mapbox.js Documentation](https://docs.mapbox.com/mapbox.js/)
- [Mapbox.js & Leaflet Pricing Guide](https://docs.mapbox.com/accounts/overview/pricing/#mapboxjs-or-leaflet)
