---
title: Offline maps
description: Learn about how offline maps work.
topics:
- mobile apps
prependJs:
  - "import * as constants from '../../constants';"
  - "import ChevronousText from '@mapbox/mr-ui/chevronous-text';"
  - "import Note from '@mapbox/dr-ui/note';"
contentType: troubleshooting
---

Applications built with the Mapbox Maps SDK for [Android](https://www.mapbox.com/android-sdk) or [iOS](https://www.mapbox.com/ios-sdk) can download maps of selected regions for use when the device lacks network connectivity.

Offline maps are useful for apps whose users expect to travel through areas with limited data connectivity or who want to save on cellular roaming charges while traveling abroad.

With the Maps SDK for iOS v{{constants.PRICE_BREAK_OFFLINE_IOS}} and higher and the Maps SDK for Android v{{constants.PRICE_BREAK_OFFLINE_ANDROID}} and higher, there is no upper limit to the number of tiles your users can download. You may raise the default 6,000 offline tile limit to whatever value you want, and your offline tile usage will be billed as [Vector Tiles API](https://docs.mapbox.com/api/maps/#vector-tiles) or [Raster Tiles API](https://docs.mapbox.com/api/maps/#raster-tiles) requests. Resources downloaded for offline use are not included in [monthly active user (MAU) billing](https://docs.mapbox.com/accounts/overview/pricing/#maps-sdk-for-ios-and-android). Since you are responsible for the cost of all the tiles your users download, you may want to set an appropriate [offline tile limit](/#tile-ceiling--limits). **Please visit the [offline maps pricing documentation](https://docs.mapbox.com/accounts/overview/pricing/#offline-maps) for more information**.

## Requirements

Before your application can download maps for use offline, the Mapbox Maps SDKs for iOS and Android need:

- A geographic bounding box or a geographic region.
- A zoom level range.
- A [style URL](/help/glossary/style-url/) (for example `mapbox://styles/mapbox/light-v9`).

If the application provides each of the above requirements, the Mapbox Maps SDK for iOS or Android can request all the required resources from Mapbox's servers and will store them in a database on the device. Downloaded resources include:

- [Style JSON](/help/glossary/style/).
- All fonts and [icons](/help/glossary/sprite/) associated with the style.
- [TileJSON](/help/glossary/tilejson/) for all sources.
- Map tiles covering the geographic area of the [offline regions](/help/glossary/offline-region/).

### Ambient caching

The Maps SDKs for iOS and Android also automatically cache tiles and other resources that are requested during normal use of the app. These resources are stored in the same database as offline resources, but unlike offline resources, they are limited to 50 MB of space. When this limit is reached, the least-recently used resources that aren't shared by an offline region will be evicted to make room for newer resources.

## Working with offline maps

With the Maps SDKs for iOS and Android, you can create offline maps, access a list of offline maps stored on the device, and remove offline maps that are no longer needed. When managing your offline regions, remember:

- An offline region cannot be modified after creation, but it is possible to create a new region with a modified definition and remove the existing region.
- When you remove an offline region, resources that are shared with other offline regions will not be removed.

For more information on working with offline maps, explore the documentation for the Mapbox Maps SDKs for [Android](https://www.mapbox.com/android-sdk) and [iOS](https://www.mapbox.com/ios-sdk).

{{<Note>}}
When adding symbol layers to an existing map with the Mapbox Maps SDKs for iOS and Android, you will need to take additional precautions for them to be visible offline:

- [Font stacks](/help/glossary/font-stack/) for symbol layers added to a map that will be used offline must be explicitly defined to match a font stack already being used for a layer within the map. The font stacks listed must be in the same order of the existing layer's font stack and must not contain any additional fonts.
- Icon images for symbol layers added to a map that will be used offline must be explicitly defined to match an existing style image that is already being used within the style.
- If a symbol layer for a given source can't load, all related layers that reference the same source will also fail to load.

By explicitly stating the font stacks and icon image names used within a dynamically added symbol layer, you will make sure that the symbol layer will be visible when the map is offline.
{{</Note>}}

### Updating offline resources

If the device has network connectivity, the Maps SDK for Android or iOS will make periodic network requests to revalidate cached tiles and other resources if the `Cache-Control` or `Expires` HTTP response headers have expired. If an updated resource is available, it will replace the older version in the offline database.

When the SDK automatically updates offline map tiles, the offline region is not re-download from scratch. The offline tile update process is the same process as with regular map tiles: The map tile's only downloaded if there's a new version of that tile.

## Tile ceiling & limits

An app can download multiple regions for offline use, but the total offline download is capped at a maximum tile count (or "ceiling") across all downloaded regions. The tile ceiling is **6,000 tiles**. The total tile count in an offline region is the sum of the tiles downloaded from each [source](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources) in your style. For example, if you would like to download a region covering 10 tiles and your style includes one vector tile source and one raster tile source (see sample JSON below), the resulting tile count would be 20.

``` json
"sources": {
  "mapbox-streets": {
    "url": "mapbox://mapbox.mapbox-streets-v7",
    "type": "vector"
  },
  "mapbox-satellite": {
    "url": "mapbox://mapbox.satellite",
    "type": "raster",
    "tileSize": 256
  }
}
```

Six thousand tiles covers a region roughly the size of Greater London within the M25 at zoom levels 0–15 or the contiguous United States at zoom levels 0–9. The size of these tiles on disk will vary according to the selected style.

To estimate the number of tiles needed to download a region offline, use our offline tile count estimator. Note that this only generates an _estimate_ of the number of tiles needed to load a defined region offline. The _size_ of the download will vary according to the location being downloaded and the style being used in your application.

<a class="txt-bold" href="https://docs.mapbox.com/playground/offline-estimator/">{{<ChevronousText text="Offline tile count estimator" />}}</a>

You can create an unlimited number of [offline regions](/help/glossary/offline-region/). Your Mapbox-powered application will reuse tiles and resources that are required by multiple regions, conserving network traffic and disk space.

The Maps SDKs for Android and iOS do not limit the download speed of offline regions, nor do they limit the amount of disk space that may be used by offline resources. The effective limits will depend on the storage capacity of the mobile device and the speed of the network to which it is connected.

Please note that our [terms of service](https://www.mapbox.com/tos/#[YmcMYmns]) do not allow you or an end user to redistribute offline maps downloaded from Mapbox servers.

## Adjust the offline tile limit per user
{{<Note title="Version restrictions for adjusting tile limits">}}
It is against the [Mapbox terms of service](https://www.mapbox.com/legal/tos/#%5BYmcMYmns%5D) to raise the tile limit in the following versions of the Maps SDK:
- **for iOS:** less than v{{constants.PRICE_BREAK_OFFLINE_IOS}}
- **for Android:** less than v{{constants.PRICE_BREAK_OFFLINE_ANDROID}}

You must be using Maps SDK for iOS v{{constants.PRICE_BREAK_OFFLINE_IOS}} and higher or the Maps SDK for Android v{{constants.PRICE_BREAK_OFFLINE_ANDROID}} and higher in order to adjust the tile limit.
{{</Note>}}

For versions of the [Maps SDK for iOS](https://docs.mapbox.com/ios/maps/overview/) lower than v{{constants.PRICE_BREAK_OFFLINE_IOS}} and the [Maps SDK for Android](https://docs.mapbox.com/android/maps/overview/) lower than v{{constants.PRICE_BREAK_OFFLINE_ANDROID}}, there is a default offline tile limit of 6,000 tiles per user (or about the size of the San Francisco Bay Area). This means each of your users may download up to 6,000 tiles for offline use at one time. Beyond that limit, your users must first delete their downloaded tiles before downloading additional tiles for offline use. There is no way to raise this limit for older versions of our iOS and Android Maps SDKs.

For the Maps SDK for iOS v{{constants.PRICE_BREAK_OFFLINE_IOS}} and higher and the Maps SDK for Android v{{constants.PRICE_BREAK_OFFLINE_ANDROID}} and higher, there are no hard limits to the number of tiles your users can download. You may raise the default 6,000 offline tile limit to whatever value you want, and your offline tile usage will be billed as [Vector Tiles API](https://docs.mapbox.com/api/maps/#vector-tiles) or [Raster Tiles API](https://docs.mapbox.com/api/maps/#raster-tiles) requests. Since you are responsible for the cost of all the tiles your users download, you may want to set an appropriate offline tile limit.

To increase or decrease the number of offline tiles your users can download, change the offline tile limit:

- **On Android**, set the offline tile limit by calling [-setOfflineMapboxTileCountLimit](https://docs.mapbox.com/android/api/map-sdk/{{constants.VERSION_ANDROID_MAPS}}/com/mapbox/mapboxsdk/offline/OfflineManager.html#setOfflineMapboxTileCountLimit-long-).
- **On iOS**, set the offline tile limit by calling [-[MGLOfflineStorage setMaximumAllowedMapboxTiles:]](https://docs.mapbox.com/ios/api/maps/{{constants.VERSION_IOS_MAPS}}/Classes/MGLOfflineStorage.html#/c:objc(cs)MGLOfflineStorage(im)setMaximumAllowedMapboxTiles:).

Use the [Mapbox offline tile count estimator](https://docs.mapbox.com/playground/offline-estimator/) to estimate how many tiles your users might need for their offline maps usage.

## Network data and disk space

The total size of offline resources will vary from region to region depending on:

- The geographic extent of the region.
- The zoom level range of the region.
- Feature count and density.
- The sources, fonts, and icons used by the style.
- The size of individual tiles required by the region.
- Whether the region overlaps existing downloaded regions.

For the default Mapbox Streets style, some typical total sizes are:

- City of Barcelona: 83 MB.
- Greater London within the M25 at zoom levels 0–15: 120 MB.
- Contiguous United States at zoom levels 0–9: 290 MB.

For Mapbox Satellite:

- City of Barcelona: 45 MB.
- Greater London within the M25 at zoom levels 0–15: 400 MB.
- Contiguous United States at zoom levels 0–9: 315 MB.

Note that these sizes are rough estimates; they do not account for size savings from automatic resource sharing between multiple regions. We suggest benchmarking typical regions for your application to get an estimate.

The Maps SDK downloads tiles when any connection is available, including over regular mobile data (2G, 3G, 4G, etc.). Because only individual highly-optimized tiles download, there's no risk of the user incurring an unexpected 100 MB download by opening the map in a region that's already downloaded (unless the user is browsing 100 MB worth of tiles).

The Mapbox iOS and Android SDKs do not include any built-in controls to prevent your users from downloading large offline resources over a cellular network. If you would like to provide your users with this option, we recommend tracking your app's network connectivity type using the your platform of choice's APIs, then activating or deactivating the download as desired.

### Managing offline download size

When storage space is at a premium, there are a few tactics you can use to decrease the total size of your offline resources:

1. **Reduce the number of [font stacks](/help/glossary/font-stack/) in your style**. A font stack is a combination of primary and fallback fonts that defines the order in which the Maps SDK should try to find the characters rendered on your map. If the rendered cannot find a particular character in the primary font, then the Maps SDK will look for it in the fallback font. Mapbox default styles often use the Arial Unicode font as a fallback font. Because the Maps SDK needs to download the entirety of each font stack to function offline, reducing the total number of font stacks in your style can drastically reduce the total size of your downloaded resources. For example, if your style uses three different font stacks that use Arial Unicode (`Comic Sans + Arial Unicode`, `Comic Sans Bold + Arial Unicode`, and `Comic Sans italic + Arial Unicode`), you have to download the entire Arial Unicode font three times because it's part of three font stacks. You can manage font stacks used within a custom style using the [Mapbox Studio style editor](/help/troubleshooting/manage-fontstacks/).
2. **Reduce the number of [sources](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources) in your style**. Does the offline experience you've incorporated in your app require the same level of detail as the online experience you provide? Would reducing the file size by removing some sources would be more beneficial to your users than a higher level of detail? For example, the road network may be more important to your offline users than terrain details. If this is the case, consider removing the [Mapbox Terrain](https://www.mapbox.com/vector-tiles/mapbox-terrain/) tileset from your style.
3. **Request [style-optimized vector tiles](https://docs.mapbox.com/api/maps/#vector-tiles) in your style**. Style-optimized vector tiles exclude any features that do not appear in your style. For example, if the parks in your style only appear above zoom level 14, all park features would be removed from vector tiles below zoom level 14, reducing the file size of those tiles.
