---
title: 为 Mapbox Studio 准备好 PostGIS 数据
description: 重新格式化，查询 PostGIS 数据并将其导出为 Mapbox Studio 所支持的格式的方法。
topics:
- uploads
contentType: troubleshooting
---


本指南将概述两种从 PostGI 数据库准备数据以上传到 Mapbox Studio 的方法：

1. **使用QGIS导出数据**＆mdash;将 QGIS 连接到您的 PostGIS 数据库，并将选定的表另存为 Shapefile。
2. **使用 `ogr2ogr` 查询和导出数据**＆mdash;查询您的数据库并创建 GeoJSON 文件。

本指南将使用免费的开源 GIS [QGIS](https://www.qgis.org/en/site/forusers/download.html)。在开始之前，下载并安装 QGIS。

## 使用 QGIS 导出 PostGIS 数据

如果您希望通过图形用户界面与 PostGIS 数据库进行交互，我们建议使用 QGIS 连接到数据库以导出数据。如果您愿意编写自己的查询，请跳至下一部分。

### 连接到 PostGIS

启动 QGIS 并从工具栏选择 **Layer** > **Add PostGIS Layers** 。

<img alt='screenshot of QGIS on how to add PostGIS Layers' src='/help/img/3rdparty/qgis-connect-postgis-qgis.png'>

在 **Add PostGIS Table(s)** 对话框弹出后, 点击 **New** 按钮来设置您的数据库链接。

<img alt='screenshot of QGIS showing Add PostGIS Table dialogue' src='/help/img/3rdparty/qgis-click-new.png'>

下面请输入：

- 此连接的名称。
- 主机名。默认值为`localhost`。
- 端口。默认值为`5432`。
- 您的 PostGIS 数据库名称。
- 数据库的用户名。

点击 **Test Connection** 按钮确保您已同步，然后点击 **OK**。

<img alt='screenshot of QGIS showing how to create a New PostGIS connection' src='/help/img/3rdparty/qgis-new-connection.png'>

回到 **Add PostGIS Table(s)** 对话框, 点击 **Connect** 按钮连接到您的本地数据库。

<img alt='screenshot of QGIS showing Connect button' src='/help/img/3rdparty/qgis-connect.png'>

### Select tables

您应该看到一个标签出现在 **Schema** 列中。以下屏幕截图中的标签为 **public**。单击标签旁边的箭头以展开嵌套表的值。接下来，单击以选择要在项目中显示的表。完成后，单击对话框左下方的“添加”按钮。

当完成之后，点击对话框底部左边的 **Add** 按钮。

<img alt='animated GIF of the process for selecting tables in the Add PostGIS Tables dialogue' src='/help/img/3rdparty/qgis-click-schema.gif'>

### 查看数据

现在您应该可以看到数据显示在 QGIS 中了。

<img alt='screenshot of QGIS showing data visualized' src='/help/img/3rdparty/qgis-see-data.png'>

### 另存为 Shapefile

接下来，将数据导出为 Shapefile，以便以后将其上传到 Mapbox Studio。通过选中 **View** > **Panels** 选项卡下的 **Layers**，确保您的 **Layers** 面板在 QGIS 中可见。

<img alt='screenshot of QGIS showing how to make layers panel visible' src='/help/img/3rdparty/qgis-view-layers.png'>

在 **Layers** 面板中，右键单击数据层，然后单击**Save As..**。

<img alt='screenshot of QGIS showing how to save as' src='/help/img/3rdparty/qgis-save-as.png'>

这将打开 **Save vector layer as...** 面板。确保将 **Format**  设置为 **ESRI Shapefile**。接下来，单击 **Browse** 按钮以浏览到您希望在本地保存文件的文件夹。导航到所需的目标目录后，创建一个新的空文件夹来存放 shapefile 并为其命名。选择新文件夹，然后单击 **OK**。

<img alt='screenshot of QGIS showing Save vector layer as dialogue' src='/help/img/3rdparty/qgis-save.png'>

在 QGIS 中，淡蓝色的条将快速闪烁以显示您的保存已完成。现在，您可以导航到本地计算机上的该文件夹以检索数据。

<img alt='screenshot of QGIS successful save message' src='/help/img/3rdparty/qgis-saving.png'>

### 压缩 Shapefiles

导航到包含已保存的 Shapefile 的文件夹。右键单击包含所有文件的文件夹，这些文件是 Shapefile 的一部分，并且 **Compress** o或 **zip** 在这个 _entire folder_。

要将 Shapefile 上传到 Mapbox Studio，必须将其压缩，并且不能大于 270 MB。

<img alt='screenshot of finder showing how to zip a folder' src='/help/img/screenshots/save-shp.png'>

## 使用 ogr2ogr 查询和导出 PostGIS 数据

如果更喜欢使用命令行而不是 QGIS，则可以使用 GDAL的 [`ogr2ogr`](http://www.gdal.org/ogr2ogr.html) 实用程序来转换数据格式。使用`ogr2ogr`和一些 SQL，您也可以查询数据库。

### 选择表格

确定要在地图上显示的数据。在此示例中，PostGIS 数据库加载了 [Natural Earth](http://www.naturalearthdata.com/downloads/) 数据。使用命令`psql -d natural_earth`，然后使用 `\dt` 输入数据库并查看其包含的表：

```
psql -d natural_earth \
  \dt;
```

<img alt='screenshot of tables' src='/help/img/3rdparty/postgis-view-data-tables.png'>


### 选择列

下面的示例代码查询名为 `ne_10m_minor_islands` 的表中的所有列。

```

  \d+ ne_10m_minor_islands;

```

<img alt='screenshot of querying columns' src='/help/img/3rdparty/postgis-table-data.jpg'>


### 重新格式化和查询

使用一个命令，您可以将数据转换为`GeoJSON`格式，从`EPSG：3857`重新投影到`EPSG：4326`，将新的`GeoJSON`文件保存为`minor_islands.json`，并使用 SQL 查询特定的表。

```
ogr2ogr -f GeoJSON \
  -t_srs EPSG:4326 -s_srs EPSG:3857 \
  minor_islands.json \
  "PG:host=localhost dbname=natural_earth user=postgres" \
  -sql "select * from ne_10m_minor_islands";
```


### GeoJSON 格式

现在，您可以使用 GeoJSON 格式的表格，并且可以将其上传到 Mapbox Studio 了！Y

<img alt='screenshot of finder with location of resulting file' src='/help/img/screenshots/json-format.png'>


## 下一步

### 上传您的数据

现在就可以上传数据了！可以通过 [Uploading data to your Mapbox account](/help/troubleshooting/uploads/) 了解更多信息。

### 处理大数据文件

如果您已导出全局数据文件或可能超出 270 MB 限制的数据以上传到 Mapbox Studio，请阅读 [Preparing large data files for Mapbox Studio](/help/troubleshooting/large-data-tippecanoe/)。
