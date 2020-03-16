---
标题: 管理样式
描述: 在样式页面中，你可以创建，管理和编辑任何样式，并找到用于使用Mapbox模板样式进行开发的链接。
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Note from '@mapbox/dr-ui/note';"
内容类型: 参考
---

## 管理样式

在 **[样式](https://studio.mapbox.com/styles)** 页面中，你可以创建，管理和编辑任何样式，并找到用于使用Mapbox模板样式进行开发的链接。

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-manage-styles"
      alt="A screenshot of the page in Mapbox Studio that lists all the styles in your account. You can also create a new style on this page."
    />
  </Browser>
}}

### 新样式

在样式页面中，你可以在样式编辑器中编辑并创建一个新样式。 点击新样式来选择模板样式。 有关可用选项的更多详细信息，请参考[地图样式](/studio-manual/overview/map-styling/#template-styles).


{{<Note>}}
如果你以前下载过Mapbox Studio样式，则可以通过缩压缩样式然后上传`style.json`文件，将其上传到Mapbox Studio样式编辑器。 成功上传样式后，将引用与样式相关的所有雪碧图，字体和其他资源。

Mapbox帐户中的保存的样式中最多允许有15个唯一数据源。 此数字包括Mapbox瓦片集，例如街道或地形。如果达到15个数据源限制，你将看到一个错误， `无法更新样式`。此限制与数据源有关，而与图层无关。为了减少所需的数据源数量，请考虑在上传之前合并数据，然后从样式编辑器中使用过滤器从同一来源数据创建不同的图层。有关数据源限制的更多信息，请参见[Mapbox Studio样式故障排除指南中的数据源限制](https://docs.mapbox.com/help/troubleshooting/reduce-tileset-sources/)
{{</Note>}}


### 样式搜索

使用 **样式搜索** 搜索栏可以筛选或重新排列样式列表，以便于查找和管理。 

- **样式搜索**: 你可以按名称或样式ID搜索样式。
- **样式排序**: 你可以按名称或修改日期对样式进行排序。

<h3 id='menu-for-each-style'>{{<Icon name='options' inline={true} />}}每种风格的菜单</h3>

单击每个样式旁边的{{<Icon name='options' inline={true} />}}菜单，可以发现用于更改和使用该样式的选项。 在下面详细了解每个菜单项的功能。


<h4 id='details'>{{<Icon name='globe' inline={true} />}} 详情</h4>

单击{{<Icon name ='globe'inline = {true} />}} **详细信息** 来查看此样式的预览，并查看用于编辑和管理此样式的选项。

<h4 id='duplicate'>{{<Icon name='duplicate' inline={true} />}} 复制</h4>

创建具有与现有样式相同的图层和数据的新样式。新副本将具有唯一的样式ID。

<h4 id='replace'>{{<Icon name='harddrive' inline={true} />}} 替换 </h4>

上传新样式并替换现有版本。你上传的文件必须是遵循[Mapbox样式规范](https://docs.mapbox.com/mapbox-gl-js/style-spec/)的JSON文档，该规范引用了一个可用的Sprite，其中包含该样式中使用的所有图标和图像以及该样式中使用的所有字体。 你不能将样式替换为不引用可用的sprite或字体库的样式。

<h4 id='make-public-or-private'>{{<Icon name='lock' inline={true} />}} 公开或私人</h4>

选择样式是私人的还是公开的。 如果样式是 **公开** ，则_任何_ Mapbox的用户及其访问令牌可以使用这个样式的URL。选择样式是私人的还是公共的。 但是，只有样式的所有者才能更改或删除样式，即使该样式是公开的也是如此。如果样式是“私有”，则样式URL只能与所有者帐户中的访问令牌一起使用。 默认情况下，在Mapbox Studio中创建的新样式是私有的

<h4 id='delete'>{{<Icon name='trash' inline={true} />}} 删除</h4>

您可以随时从帐户中永久删除样式。 删除的样式可能无法恢复。

<h4 id='revert'>{{<Icon name='undo' inline={true} />}} 恢复到上次发布</h4>

将恢复到上一次在样式编辑器中单击 **发布** 按钮的时间的更改。这不能被撤消。 你将丢失当前发布和最后发布之间所做的任何更改。

<h4 id='style-url'>样式的URL</h4>

每当你使用Mapbox Studio创建样式时，都会生成 **样式的URL**。样式的URL允许你使用[Mapbox GL JS API或本机的SDK]引用特定样式。
(https://docs.mapbox.com).
