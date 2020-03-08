---
title: 在帐户之间转移样式Transfer styles between accounts
description: Learn how to transfer Mapbox styles between accounts.
topics:
- data
- map design
contentType: troubleshooting
prependJs:
  - "import AppropriateImage from '../../components/appropriate-image';"
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import RelatedPage from '@mapbox/dr-ui/related-page';"
---

有三种在帐户之间转移[样式的](https://docs.mapbox.com/help/glossary/style/)方法。前两种方法是将Mapbox样式从一个帐户真实转移到另一个帐户，但是根据样式是公共帐户还是私有帐户而有所不同。第二种方法涉及从您自己的应用程序中的另一个Mapbox帐户引用公共样式。

## 方法1：使用共享链接复制公共样式

对于您帐户中保存的公共样式，您可以生成一个特殊链接，该链接允许其他用户将您的样式复制到他们的帐户中。

如果您的样式尚未公开，则可以通过以下方式将其公开：

1. 访问您的[样式](https://studio.mapbox.com/styles/)页面，
2. 单击 {{ <Icon name='share' inline={true} /> }} 您要公开的样式旁边的共享图标，然后
3. 单击**Make public**（公开）按钮。
4. 系统将提示您确认要公开样式。如果确定，请单击**Make public** 的确认按钮。

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--make-public"
    alt="Make a style public using the menu next to the style listed on your Mapbox Studio Styles page"
  />
}}

一旦样式公开后，您将在该样式的共享菜单中看到一个可复制的链接。要将样式复制到新帐户，请在登录到目标帐户时导航到此链接，然后单击 **Copy style**（复制样式）按钮。

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--copy-link"
    alt="Copy a style to another account with your style's copy link"
  />
}}

{{<RelatedPage contentType="video" title="How to share a map style using a share link" vimeoId="385079703" vimeoThumbnail="/help/img/videos/how-to-share-a-map-style.jpg">}}
Learn how to generate a share link to allow other users to copy your style.
{{</RelatedPage>}}


## 方法 2: 下载并重新上传私人样式

在帐户之间转移私人样式可让您拥有样式并通过单个Mapbox帐户对其进行更改，而无需将样式公开。

如果您有权访问要从中进行转移的帐户或获得了必要的文件，则可以在帐户之间转移Mapbox资产。如何将样式从一个帐户转移到另一个帐户取决于您使用的是Mapbox Studio还是Mapbox Studio Classic，以及样式中包含的数据。

### 使用 Mapbox Studio 制作的样式

使用Mapbox Studio制作的样式可以以JSON格式下载并作为新样式重新上传。要下载样式，请在Mapbox Studio样式编辑器中打开样式，单击**Share**（共享）按钮，然后单击 **Download** （下载）选项旁边的链接。您可以下载样式的草稿或正式版本。

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--download-style"
    alt="Download a zipped folder with style JSON and necessary assets by opening the style in the Mapbox Studio style editor, clicking the Share button, and clicking the link next to the Download option"
  />
}}

然后，您可以将JSON文件上传到另一个Mapbox帐户：

1. 解压缩下载的文件夹。
2. 登录第二个帐户。
3. 单击“ 新样式”按钮旁边的**Upload Style**（上载样式）链接。
4. 在解压缩的文件夹中选择`style.json`文件并上传。

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--upload-style"
    alt="Upload a style from your Mapbox Studio Styles page by clicking the Upload style link next to the New style button"
  />
}}

如果您在样式中添加了任何自定义图标或字体，则需要手动将其重新添加。在Mapbox Studio中打开新上传的样式，然后：

1. 要添加字体，请单击**Fonts**（字体），然后单击 **Upload new font**（上传新字体），从你下载的样式中将**字体**文件夹的内容拖放到适当的区域。

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--upload-fonts"
    alt="Upload fonts from your downloaded Mapbox Studio style page by clicking the Upload new font button"
  />
}}

2. 添加图标（图像），请单击 **Images** （图像）然后单击 **Upload SVG Image**（上传SVG图像）。从你下载的样式中将**图标**文件夹的内容拖放到适当的区域。

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--upload-icons"
    alt="Upload icons from your downloaded Mapbox Studio style page by clicking the Upload SVG Image button"
  />
}}

{{<RelatedPage contentType="video" title="如何在Mapbox帐户之间导出（和导入）自定义地图样式 How to export (and import) custom map styles between Mapbox accounts" vimeoId="386341477" vimeoThumbnail="/help/img/videos/how-to-export-and-import.jpg">}}
了解如何从一个Mapbox帐户导出地图样式并将该地图样式导入另一个Mapbox帐户。
{{</RelatedPage>}}

### 使用Mapbox Studio Classic制作的项目

请注意，Mapbox Studio Classic已弃用。如果可能，请考虑将样式移至Mapbox Studio。

Mapbox Studio Classic样式（.tm2文件中的CartoCSS）将转换为Mapbox服务器上的代码，因此假定您已经在本地计算机上拥有这些样式。如果它们引用了您的帐户中的可用资源，则可以将它们重新上传到您的新帐户中。GeoJSON或KML可以作为图块集下载并重新上传到您的新帐户，然后导入到新的Mapbox Studio或Mapbox Studio Classic项目中。

## 方法 3: 引用公共样式

通过引用公共样式，可以在自己的应用程序中使用在其他Mapbox帐户上创建的Mapbox样式。如果您的组织有多个Mapbox帐户，每个帐户都有自己的自定义样式，字体和精灵，则此方法特别有用。

在这种情况下，您具有帐户A的样式，并且希望帐户B在应用程序中使用该样式。

默认情况下，Mapbox样式为**Private**（私人）。导航到[“样式”](https://studio.mapbox.com/styles/)页面，然后打开要共享的样式的菜单。选择 **Make public**（公开）。

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--make-public"
    alt="Make a style public using the menu next to the style listed on your Mapbox Studio Styles page"
  />
}}

一旦将样式设置为**Public**（公开）后，可以通过在“样式”页面内复制 **Style URL** （样式URL）来引用任何应用程序中的样式。

*特别说明*：任何应用程序都可以使用任何访问令牌来引用 **Public URL** （公共URL）。

这是使用[Mapbox GL JS库的](https://docs.mapbox.com/mapbox-gl-js/example/simple-map/)外观的快速示例：

```js
mapboxgl.accessToken = '<ACCESS TOKEN FROM ACCOUNT B>';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: '<PUBLIC STYLE URL FROM ACCOUNT A>', // stylesheet location
  center: [-74.50, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});
```
