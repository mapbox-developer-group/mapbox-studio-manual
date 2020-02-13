---
title: Transfer styles between accounts
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

There are three approaches to transferring [styles](/help/glossary/style/) between accounts. The first two approaches are true transfers of Mapbox styles from one account to another, but differ depending on whether the style is public or private. The second approach involves referencing a public style from another Mapbox account within your own application.

## Approach 1: Copy a public style using a share link

For public styles saved in your account, you can generate a special link that allows other users to copy your style to their account.

If your style is not already public, you can make it public by:

1. Visiting your [Styles](https://studio.mapbox.com/styles/) page,
2. Clicking on the {{ <Icon name='share' inline={true} /> }} share icon next to the style you would like to make public, then
3. Clicking the **Make public** button.
4. You will be prompted to confirm that you would like to make your style public. If you are sure, click the **Make public** confirmation button.

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--make-public"
    alt="Make a style public using the menu next to the style listed on your Mapbox Studio Styles page"
  />
}}

Once your style is public, you will see a copyable link in that style's share menu. To copy your style to a new account, navigate to this link while logged in to the destination account and click on the **Copy style** button.

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--copy-link"
    alt="Copy a style to another account with your style's copy link"
  />
}}

{{<RelatedPage contentType="video" title="How to share a map style using a share link" vimeoId="385079703" vimeoThumbnail="/help/img/videos/how-to-share-a-map-style.jpg">}}
Learn how to generate a share link to allow other users to copy your style.
{{</RelatedPage>}}


## Approach 2: Download and re-upload a private style

Transferring private styles between accounts allows you to own a style and make changes to it from a single Mapbox account without making the style public.

You can transfer Mapbox assets between accounts if you have access to the account you're transferring from or if you're given the necessary files. How you transfer styles from one account to another depends on whether you are using Mapbox Studio or Mapbox Studio Classic, as well as the data that's included with your style.

### Styles made with Mapbox Studio

Styles made with Mapbox Studio may be downloaded in JSON format and re-uploaded as a new style. To download a style, open the style in the Mapbox Studio style editor, click the **Share** button, and click the link next to the **Download** option. You can download draft or production versions of your styles.

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--download-style"
    alt="Download a zipped folder with style JSON and necessary assets by opening the style in the Mapbox Studio style editor, clicking the Share button, and clicking the link next to the Download option"
  />
}}

You can then upload the JSON file to another Mapbox account:

1. Unzip the folder you downloaded.
2. Log into the second account.
3. Click the **Upload style** link next to the New style button.
4. Select the `style.json` file inside the unzipped folder and upload.

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--upload-style"
    alt="Upload a style from your Mapbox Studio Styles page by clicking the Upload style link next to the New style button"
  />
}}

If you added any custom icons or fonts to your style, you'll need to add them back manually. Open your newly uploaded style in Mapbox Studio, then:

1. To add fonts, click **Fonts** and then **Upload new font**. Drag and drop the contents of the **fonts** folder from your downloaded style into the appropriate area.

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--upload-fonts"
    alt="Upload fonts from your downloaded Mapbox Studio style page by clicking the Upload new font button"
  />
}}

2. To add icons (images), click **Images** and then **Upload SVG Image**. Drag and drop the contents of the **icons** folder from your downloaded style into the appropriate area.

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--upload-icons"
    alt="Upload icons from your downloaded Mapbox Studio style page by clicking the Upload SVG Image button"
  />
}}

{{<RelatedPage contentType="video" title="How to export (and import) custom map styles between Mapbox accounts" vimeoId="386341477" vimeoThumbnail="/help/img/videos/how-to-export-and-import.jpg">}}
Learn how to export a map style from one Mapbox account and import that map style into another Mapbox account.
{{</RelatedPage>}}

### Projects made with Mapbox Studio Classic

Note that Mapbox Studio Classic has been deprecated. When possible, consider moving your styles to Mapbox Studio instead.

Mapbox Studio Classic styles (CartoCSS in .tm2 files) are converted to code on Mapbox servers, so it's assumed you already have the styles on your local machine. You can re-upload these to your new account if they reference sources available as a tileset in your account. GeoJSON or KML can be downloaded and re-uploaded to your new account as a tileset and imported to a new Mapbox Studio or Mapbox Studio Classic project.

## Approach 3: Reference a public style

By referencing public styles, you can use Mapbox styles created on other Mapbox accounts in your own application. This approach can be particularly useful if your organization has multiple Mapbox accounts each with their own custom styles, fonts, and sprites.

In this scenario, you have a style from Account A and you’d like Account B to use that style in an application.

By default, Mapbox styles are **Private**. Navigate to your [Styles](https://studio.mapbox.com/styles/) page and open the menu for the style you want to share. Select **Make public**.

{{
  <AppropriateImage
    imageId="troubleshooting--transfer-styles-between-accounts--make-public"
    alt="Make a style public using the menu next to the style listed on your Mapbox Studio Styles page"
  />
}}

Once you set the style to **Public**, you can reference the style within any application by copying the **Style URL** within the Styles page.

*Special note*: A **Public URL** can be referenced by any application using any access token.

Here’s a quick example of how this might look using our [Mapbox GL JS library](https://docs.mapbox.com/mapbox-gl-js/example/simple-map/):

```js
mapboxgl.accessToken = '<ACCESS TOKEN FROM ACCOUNT B>';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: '<PUBLIC STYLE URL FROM ACCOUNT A>', // stylesheet location
  center: [-74.50, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});
```
