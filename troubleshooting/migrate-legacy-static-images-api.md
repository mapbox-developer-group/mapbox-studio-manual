---
title: Migrating to the modern Static Images API
description: Tools and tips for updating to the modern Static Images API.
topics:
- web apps
prependJs:
  - "import Note from '@mapbox/dr-ui/note';"
  - "import { highlightSwift } from '@mapbox/dr-ui/highlight/swift';"   
  - "import UserAccessToken from '../../components/user-access-token';"
  - "import MigrationCodeExample from '../../components/migration-code-example';"
  - "import { staticTemplate, staticCustom } from '../../data/migrate';"
contentType: troubleshooting
---

If you are using a Studio classic style template or a custom classic style and need to migrate to the modern [Static Images API](https://docs.mapbox.com/api/maps/#static-images), follow the guidance on this page. There are many benefits to migrating, including:

* Frequent data updates for [Mapbox vector tiles](https://docs.mapbox.com/vector-tiles/reference/)
* Support for styles that include [expressions](https://docs.mapbox.com/help/glossary/expression/)
* Visually consistent styles across all Mapbox platforms ([APIs](https://docs.mapbox.com/api/maps), [GL JS](https://docs.mapbox.com/mapbox-gl-js), & [Mobile Maps SDKs](https://www.mapbox.com/mobile/))

## Studio classic style templates

If you are using a Studio Classic [template style](https://docs.mapbox.com/studio-manual/overview/map-styling/#template-styles) (for example, `mapbox.outdoors`), use the modern [equivalent template style](https://docs.mapbox.com/api/maps/#mapbox-styles) with the [Mapbox Static Images API](https://docs.mapbox.com/api/maps/#static-images).

{{<MigrationCodeExample
id='static-image-templates'
before={staticTemplate.before}
after={staticTemplate.after}
highlighter={() => highlightSwift}
/>
}}

## Custom classic styles

If you are using the Legacy Static Images API with a _custom_ [classic style](/help/glossary/classic-style/) that you created in [Mapbox Studio Classic](/help/glossary/mapbox-studio-classic/), you will need to [create a new custom style](/help/tutorials/create-a-custom-style/) with [Mapbox Studio](/help/glossary/mapbox-studio/) so you can use your custom [style ID](/help/glossary/style-id/) with the [Mapbox Static Images API](https://docs.mapbox.com/api/maps/#static-images).

{{<MigrationCodeExample
id='static-image-custom'
before={staticCustom.before}
after={staticCustom.after}
highlighter={() => highlightSwift}
/>
}}

## Additional resources

- [Static Images API Playground](https://docs.mapbox.com/playground/static/)
- [Static Images API Documentation](https://docs.mapbox.com/api/maps/#static-images)
- [Static Images API Pricing Guide](https://docs.mapbox.com/accounts/overview/pricing/#static-images-api)
