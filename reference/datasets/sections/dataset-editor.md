---
title: Dataset editor
description: Learn how to create and manage datasets in Mapbox Studio.
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import DatasetEditorDiagram from '../../../../components/illustrations/dataset-editor-diagram';"
  - "import Browser from '@mapbox/dr-ui/browser';"
  - "import Note from '@mapbox/dr-ui/note';"
contentType: reference
---

## Dataset editor

In addition to managing datasets, Mapbox Studio provides an in-browser editor for creating and modifying dataset features.

{{
  <DatasetEditorDiagram
    imagePath="/studio-manual/img/studio/dataset-editor.png"
    alt="A diagram of the Mapbox Studio dataset editor."
  />
}}

<h3 id='export-to-tileset-sec'>Export to tileset</h3>

To add your data to a style in the Mapbox Studio style editor, you need to export your dataset to a tileset.

- **Save**. After you have finished editing your dataset, click **Save** to review the changes you have made.

- **Export**. Click **Export** to export your dataset to a vector tileset. A [vector tileset](https://www.mapbox.com/help/define-vector-tiles) is a collection of data broken up into a uniform grid of square tiles at up to 22 preset zoom levels. Your tilesets are stored on the [Tilesets](https://www.mapbox.com/studio/tilesets/) page in your Mapbox account, and tilesets created through dataset export have a reference back to the original dataset. See the **Uploads** section for more information on using tilesets.

If you need to make further changes to your data, you can change a dataset after you have exported to a tileset and re-export to have those changes reflected in the tileset. If you update a connected tileset, any styles that reference that tileset will also be updated automatically.

### Manage features

Features are individual points, lines, or polygons in your dataset. In the dataset editor you can add, change, and delete features in your dataset.

{{
  <Browser>
    <img src="/studio-manual/img/studio/dataset-add-feature.gif" alt="Illustrates how to draw new features using the draw tools, add new data properties to features by clicking the feature on the map and using the '+ Add property' button, and change the map style below your data to a satellite map using the 'Background style' button." />
  </Browser>
}}

**Add new features**: You can add new features to an existing dataset by either importing them from a data file or drawing them directly in the editor.

- **{{<Icon name='plus' inline={true} />}} Import**. You can import data into your dataset from a [GeoJSON](https://www.mapbox.com/help/define-geojson) or [CSV](https://www.mapbox.com/help/define-csv) file. If using a CSV, make sure that the data is already geocoded and represents point features.
- **Draw tools**. Use the draw tools to draw features directly on the map. You can change the geometry, placement, and properties of existing features with the dataset editor's draw tools:
  - **{{<Icon name='marker' inline={true} />}}** Draw a point
  - **{{<Icon name='line' inline={true} />}}** Draw a line
  - **{{<Icon name='polygon' inline={true} />}}** Draw a polygon
- **{{<Icon name='search' inline={true} />}} Search places**. You can search places in the toolbar. When you search for a country, region, postcode, place, locality, neighborhood, or address you will have the option to **Save to dataset**. *This option is not available when searching POIs.*

**Edit feature properties**: You can add, edit, and delete feature properties using tools in the panel on the left side of the dataset editor. You can also view feature properties in GeoJSON form by clicking the GeoJSON tab.

![edit properties dataset editor](/studio-manual/img/studio/dataset-edit-properties.gif)

### Map canvas

You can interact directly with the features in your dataset on the map to draw, change or delete features.

{{
  <Browser>
    <img src="/studio-manual/img/studio/dataset-modify-feature.gif" alt="Illustrates how to edit the geometry and properties for one feature on the map." />
  </Browser>
}}

1. **Geometry**. Change the geometry by clicking on the feature, then clicking and dragging the points.
1. **Placement**. Hover over the feature until you see {{<Icon name='position' inline={true} />}}, then click and drag to move the feature.
1. **Properties**. To change the properties of a feature, click on the feature and edit properties in the panel on the left side of the editor.

You can delete a feature by selecting the feature and clicking {{<Icon name='trash' inline={true} />}}. You can select and delete multiple features at once using Shift + click + drag.

### Toolbar

The toolbar in the upper right will help you navigate the dataset editor.

{{
  <Browser>
    <img src="/studio-manual/img/studio/dataset-editor-toolbar.gif" alt="Clicks through the toolbar, revealing options for searching the dataset, changing the background style, adding a reference tileset, viewing a history of your edits, and keyboard shortcuts." />
  </Browser>
}}


<h4 id='search-places'>{{<Icon name='search' inline={true} />}} Search places</h4>

The {{<Icon name='search' inline={true} />}} **Search places** search bar allows you to search for locations on the map. You can find this button on the top right. Type in what you're looking for and select the result and search will take you to the exact location. This search is powered by the [Mapbox Geocoding API](https://www.mapbox.com/geocoding/).

![search-places-dataset](/studio-manual/img/studio/dataset-search-places.gif)

<h4 id='search-dataset'>{{<Icon name='search' inline={true} />}} Search dataset</h4>

You can use {{<Icon name='search' inline={true} />}} **Search dataset** to search your dataset by a property value. The search will return all features that contain that property value. Click on the thumbnail to jump to the feature on the map.

![search-within-dataset](/studio-manual/img/studio/dataset-search-dataset.gif)

<h4 id='background-style'>{{<Icon name='paint' inline={true} />}} Background style</h4>

Use the {{<Icon name='paint' inline={true} />}} **Background** button to switch between background styles. These include the default dataset editor style, [Mapbox Satellite](https://www.mapbox.com/satellite), Mapbox Satellite Streets, and an empty canvas.

![change-backgrounds-dataset](/studio-manual/img/studio/dataset-backgrounds.gif)

<h4 id='reference-tileset'>{{<Icon name='tileset' inline={true} />}} Reference tileset</h4>

In addition to the pre-loaded background layers, you can display a custom raster tilesets (such as your own custom satellite imagery, for example) between the basemap and your data as a reference for drawing new GeoJSON features. Click {{<Icon name='tileset' inline={true} />}} **Reference tileset** and select the tileset you would like to add. Note that this must be a [raster tileset](https://www.mapbox.com/help/define-tileset) uploaded to your account. You can remove the raster tileset by clicking **Deselect {{<Icon name='close' inline={true} />}}** or by clicking on the active tileset.

![add-reference-tileset-dataset](/studio-manual/img/studio/dataset-ref-tileset.gif)

<h4 id='history'>{{<Icon name='history' inline={true} />}} History</h4>

View your history by clicking the {{<Icon name='history' inline={true} />}} **History** button. The dataset keeps a history of all changes you made *since the beginning of your current session*. You can revert your changes in the current session, but your history will reset once you exit the dataset editor.

<h4 id='help'>{{<Icon name='question' inline={true} />}} Help</h4>

The {{<Icon name='question' inline={true} />}} **Help** button includes the option to see a guided walkthrough of the dataset editor. As you scroll through this panel, you will see a list of keyboard shortcuts. At the top of the help panel, there are links to [Mapbox Help](https://www.mapbox.com/help) and our [contact page](https://www.mapbox.com/contact).

## Dataset information page

For each dataset, there is a **dataset information page** where you can review the tilesets that are connected to that dataset and do the same tasks that you can in the [menu on the Datasets page](#menu-for-each-dataset).

{{
  <Browser>
    <img src="/studio-manual/img/studio/dataset-information-page.png" alt="Screenshot of the page in Mapbox Studio that lists detailed information about one dataset including any connected tilesets, the dataset ID, the size, the feature count, and the bounds." />
  </Browser>
}}

### Connected tilesets

The center of the dataset information page contains a list of all connected tilesets, which can be added to your styles as new custom layers.

### Menu items

The same items that exist in the menu for each dataset on the Datasets page are listed on the right side of the dataset information page. See the [menu section](#menu-for-each-dataset) for more details.

### Dataset characteristics

In the lower right side of the dataset information page, there are several characteristics that are listed for each dataset.

- **Size**. Size of the dataset.
- **Feature count**. The number of features included in the dataset.
- **Bounds**. The coordinate bounds the dataset resides within, which are both listed and displayed on a satellite map.

### Edit dataset

Click **{{<Icon name='pencil' inline={true} />}} Edit** to open the dataset editor and make changes to the dataset.
