---
title: Manage datasets
description: Your Datasets page in Mapbox Studio provides a list of your existing datasets as well as a link to create a new dataset.
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import Browser from '@mapbox/dr-ui/browser';"
  - "import Note from '@mapbox/dr-ui/note';"
contentType: reference
---

## Manage datasets

Your **[Datasets](https://www.mapbox.com/studio/datasets)** page in Mapbox Studio provides a list of your existing datasets as well as a link to create a new dataset.

{{
  <Browser>
    <img src="/studio-manual/img/studio/manage-datasets.png" alt="Screenshot of the page in Mapbox Studio that lists all the datasets in your account." />
  </Browser>
}}

### Search datasets

Use the {{<Icon name='search' inline={true} />}} **Search** bar to filter or reorder your list of datasets. You can search for datasets by name or dataset ID and sort by name or date modified.

### Create a new dataset

To create a new dataset, click the **New dataset** button at the top of the page. You can either start with a blank dataset or upload data as a starting point for your dataset. Data must be in one of the [accepted data formats](https://www.mapbox.com/help/uploads). Once your dataset is created, it opens in the dataset editor for editing.

{{
  <Browser>
    <img src="/studio-manual/img/studio/dataset-upload.gif" alt="animated gif showing how to upload a dataset in Mapbox Studio" />
  </Browser>
}}

{{<Note title="Dataset and dataset editor limits">}}
Multiple files can be uploaded to the same dataset without limit &mdash; they need to be loaded 5 MB at a time in the Mapbox Studio dataset editor. The size of a dataset is unlimited, but the Mapbox Studio dataset editor can only display datasets of 20 MB or smaller. Datasets that exceed 20 MB can still be downloaded from Mapbox Studio and accessed through the [Mapbox Datasets API](https://docs.mapbox.com/api/maps/#datasets).
{{</Note>}}

<h3 id='menu-for-each-dataset'>{{<Icon name='menu' inline={true} />}} Menu for each dataset</h3>

Once a dataset is created, it will appear in the list on your Datasets page. There are several actions you can take with each dataset.

<h4 id='view-details'>{{<Icon name='share' inline={true} />}} View details</h4>

Open the [dataset information page](#dataset-information-page) for this data to see more details.

<h4 id='export-to-tileset'>{{<Icon name='tileset' inline={true} />}} Export to tileset</h4>

Once exported, the tilesets can be added as a new custom layer to a Mapbox map in the [Mapbox Studio style editor](/studio-manual/reference/styles/#style-editor). You can also add a tileset directly to a web map by using Mapbox GL JS like in [this example](https://www.mapbox.com/mapbox-gl-js/example/vector-source/).

<h4 id='download-as-geojson'>{{<Icon name='arrow-down' inline={true} />}} Download</h4>

Once created, you can download your data as a GeoJSON file to use with Mapbox GL JS or other web mapping applications.

<h4 id='delete'>{{<Icon name='trash' inline={true} />}} Delete</h4>

Tileset deletion cannot be undone. Any tilesets that were derived from this dataset will stay intact, but you will no longer be able to update the data associated with those tilesets in the dataset editor.

<h4 id='dataset-id'>{{<Icon name='clipboard' inline={true} />}} Dataset ID</h4>

Each dataset has a unique ID. Use this ID when interacting with your dataset using the [Mapbox Datasets API](https://www.mapbox.com/api-documentation/maps/#datasets).
