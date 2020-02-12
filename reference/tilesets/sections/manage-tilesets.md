---
title: Manage tilesets
description: Learn how to create and manage tilesets in Mapbox Studio.
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Note from '@mapbox/dr-ui/note';"
contentType: reference
---

## Manage tilesets

The **Tilesets** page is where you can add and manage your uploaded tilesets.

{{
  <Browser>
    <AppropriateImage
      imageId="reference-tilesets-introduction"
      alt="Screenshot of the page in Mapbox Studio that lists all the tilesets in your account."
    />
  </Browser>
}}

The **Tilesets** page shows you a list of all your uploaded tilesets, plus the five Mapbox-provided tilesets: [Mapbox Streets](https://www.mapbox.com/vector-tiles/mapbox-streets), [Mapbox Satellite](https://www.mapbox.com/satellite), [Mapbox Terrain](https://www.mapbox.com/vector-tiles/mapbox-terrain), [Terrain (RGB-encoded dem)](https://www.mapbox.com/help/how-mapbox-data-works/#mapbox-terrain-rgb), and [Mapbox Traffic](https://www.mapbox.com/vector-tiles/mapbox-traffic-v1/).

Unlike the tilesets you upload, the [Mapbox Streets](https://www.mapbox.com/vector-tiles/mapbox-streets) and [Mapbox Terrain](https://www.mapbox.com/vector-tiles/mapbox-terrain) tilesets have layers that group certain features together. Any tilesets you upload will appear below the tilesets Mapbox provides.

### New tileset

Click the **New tileset** button to create a new tileset. You can either **Upload a file** or **Create from dataset**.

{{<Note>}}
When a vector data file is uploaded to Mapbox, it is converted to [vector tile format](https://docs.mapbox.com/help/glossary/vector-tiles). When a [raster](https://docs.mapbox.com/help/glossary/raster) data file (like an image) is uploaded to Mapbox, it becomes a set of tiled PNGs.
{{</Note>}}

#### Upload a file

When uploading a file, the uploads pane will appear in the lower right corner of the page. This pane shows the [tileset ID](https://docs.mapbox.com/help/glossary/tileset-id) and status of your upload &mdash; the circle will be blue while the file is processing and green once the file has been uploaded.

For more information about uploading data to your Mapbox account, see the [Uploads](https://www.mapbox.com/help/uploads) page.

#### Create from dataset

Click the **Create from dataset** tab to create a tileset from a dataset. A modal will appear with a list of all datasets associated with your account. Choose a dataset from the list and click **Export dataset**. You will have the choice to either **Export to a new tileset** or, if that dataset is already connected to a tileset, the option to **Update a connected tileset**.

### Tileset menu

For each tileset, you can either click on the name of the tileset to go to its information page or click the {{<Icon name='options' inline={true} />}} button for more options:

{{
  <AppropriateImage
    imageId="reference-tilesets-list-item"
    alt="screenshot of the options in the tooltip menu for each tileset in Mapbox Studio"
  />
}}

<h4 id='replace'>{{<Icon name='harddrive' inline={true} />}} Replace</h4>

Replace the current data in your tileset with new data. The tileset ID will stay the same and the new data will be reflected in all styles that reference this tileset.

<h4 id='make-private'>{{<Icon name='lock' inline={true} />}} Make public or private</h4>

Choose whether a tileset should be private or public. If a tileset is **public**, the tileset ID can be used by _any_ Mapbox user with their [access tokens](https://docs.mapbox.com/help/glossary/access-token/). But, only the owner of a tileset can make changes or delete a tileset, even if it's public. If a tileset is **private**, the tileset ID can only be used with an access token from the owner's account. By default, new tilesets created in Mapbox Studio are private.

<h4 id='delete'>{{<Icon name='trash' inline={true} />}} Delete</h4>

You can permanently delete a tileset from your account at any time. Deleted tilesets may not be recovered.

<h4 id='tileset-id'>{{<Icon name='clipboard' inline={true} />}} Tileset ID</h4>

From this menu, you can also copy the **[tileset ID](https://docs.mapbox.com/help/glossary/tileset-id)** to be used with Mapbox SDKs and APIs.
