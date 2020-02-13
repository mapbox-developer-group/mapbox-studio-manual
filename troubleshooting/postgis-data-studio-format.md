---
title: Get your PostGIS data ready for Mapbox Studio
description: Methods to re-format, query, and export PostGIS data into a Mapbox Studio ready format.
topics:
- uploads
contentType: troubleshooting
---


This guide will outline two methods for preparing data from your PostGIS database to upload to Mapbox Studio:

1. **Export your data with QGIS** &mdash; connect QGIS to your PostGIS database and save selected tables as Shapefiles.
2. **Query and export your data with `ogr2ogr`** &mdash; query your database and create GeoJSON files.

This guide will use [QGIS](https://www.qgis.org/en/site/forusers/download.html), a free, open source GIS. Download and install QGIS before getting started.

## Export PostGIS data with QGIS

If you prefer interacting with your PostGIS database via a graphical user interface, we recommend using QGIS to connect to your database to export your data. If you're comfortable writing your own queries, skip to the next section.

### Connect to PostGIS

Launch QGIS and select **Layer** > **Add PostGIS Layers** from the toolbar.

<img alt='screenshot of QGIS on how to add PostGIS Layers' src='/help/img/3rdparty/qgis-connect-postgis-qgis.png'>

After the **Add PostGIS Table(s)** dialog pops up, click the **New** button to set up your database connection.

<img alt='screenshot of QGIS showing Add PostGIS Table dialogue' src='/help/img/3rdparty/qgis-click-new.png'>

Now enter:

- A name for this connection.
- The host name. The default is `localhost`.
- Port. The default is `5432`.
- Your PostGIS database name.
- The username for the database.

Click the **Test Connection** button to make sure you are synced up, then click **OK**.

<img alt='screenshot of QGIS showing how to create a New PostGIS connection' src='/help/img/3rdparty/qgis-new-connection.png'>

Back in the **Add PostGIS Table(s)** dialog box, click the **Connect** button to connect to your local database.

<img alt='screenshot of QGIS showing Connect button' src='/help/img/3rdparty/qgis-connect.png'>

### Select tables

You should see a label appear in the **Schema** column. The label in the screenshot below is **public**. Click the arrow next to the label to expand the nested table values. Next, click to select the tables you want to show in your project.

When you're finished, click the **Add** button on the bottom left of the dialog box.

<img alt='animated GIF of the process for selecting tables in the Add PostGIS Tables dialogue' src='/help/img/3rdparty/qgis-click-schema.gif'>

### View data

You should now be able to see your data visualized in QGIS.

<img alt='screenshot of QGIS showing data visualized' src='/help/img/3rdparty/qgis-see-data.png'>

### Save as Shapefile

Next, export your data as a Shapefile so you can upload it to Mapbox Studio later. Make sure your **Layers** panel is visible in QGIS by checking **Layers** under the **View** > **Panels** tab.

<img alt='screenshot of QGIS showing how to make layers panel visible' src='/help/img/3rdparty/qgis-view-layers.png'>

From the **Layers** panel, right-click on your data layer, then click **Save As..**.

<img alt='screenshot of QGIS showing how to save as' src='/help/img/3rdparty/qgis-save-as.png'>

This will open the **Save vector layer as...** panel. Make sure that you set the **Format** to **ESRI Shapefile**. Next, click the **Browse** button to navigate to the folder where you wish to save your file locally. Once you've navigated to your desired destination directory, create a new empty folder to house your shapefiles and give it a name. Select your new folder, then click **OK**.

<img alt='screenshot of QGIS showing Save vector layer as dialogue' src='/help/img/3rdparty/qgis-save.png'>

In QGIS, a light blue bar will quickly flash to show that your save is completed. You can now navigate to that folder on your local machine to retrieve your data.

<img alt='screenshot of QGIS successful save message' src='/help/img/3rdparty/qgis-saving.png'>

### Zip the Shapefiles

Navigate to the folder with your saved Shapefiles. Right-click on the folder containing all the files that are part of your Shapefile and **Compress** or **zip** this _entire folder_.

To upload Shapefiles to Mapbox Studio they must be zipped and cannot be larger than 270 MB.

<img alt='screenshot of finder showing how to zip a folder' src='/help/img/screenshots/save-shp.png'>


## Query and export PostGIS data with ogr2ogr

If prefer using the command line instead of QGIS, you can use GDAL's [`ogr2ogr`](http://www.gdal.org/ogr2ogr.html) utility to convert your data format. Using `ogr2ogr` and some SQL, you can also query your database.

### Choose tables

Decide what data you wish to display on your map. In this example, the PostGIS database is loaded with [Natural Earth](http://www.naturalearthdata.com/downloads/) data. Use the command `psql -d natural_earth` followed by `\dt` to enter your database and view the tables it contains:

```
psql -d natural_earth \
  \dt;
```

<img alt='screenshot of tables' src='/help/img/3rdparty/postgis-view-data-tables.png'>


### Choose columns

The example code below queries all the columns in tables named `ne_10m_minor_islands` table.

```

  \d+ ne_10m_minor_islands;

```

<img alt='screenshot of querying columns' src='/help/img/3rdparty/postgis-table-data.jpg'>


### Reformat and query

With one command you can convert your data into `GeoJSON` format, re-project from `EPSG:3857` to `EPSG:4326`, save the new `GeoJSON` file as `minor_islands.json`, and query specific tables with SQL.

```
ogr2ogr -f GeoJSON \
  -t_srs EPSG:4326 -s_srs EPSG:3857 \
  minor_islands.json \
  "PG:host=localhost dbname=natural_earth user=postgres" \
  -sql "select * from ne_10m_minor_islands";
```


### GeoJSON format

You now have your tables in GeoJSON format and they're ready to upload to Mapbox Studio!

<img alt='screenshot of finder with location of resulting file' src='/help/img/screenshots/json-format.png'>


## Next steps

### Upload your data

You are now ready to upload your data! Read our article on [Uploading data to your Mapbox account](/help/troubleshooting/uploads/) for more information.

### Working with large data files

If you've exported global data files or data that may exceed the 270 MB limit for uploading into Mapbox Studio, read our articles on [Preparing large data files for Mapbox Studio](/help/troubleshooting/large-data-tippecanoe/).
