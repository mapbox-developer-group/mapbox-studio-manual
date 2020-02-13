---
title: Troubleshooting SVG image errors in Mapbox Studio
description: Learn how to fix SVG upload errors in Mapbox Studio.
topics:
- map design
contentType: troubleshooting
---

<!--copyeditor ignore retext-indefinite-article-->
The Mapbox Studio style editor supports the SVG format for icons and patterns. Studio uses SVG because it's scalable and supports devices with a range of screen resolutions. Behind the scenes, the Mapbox Styles API uses the source SVGs to render [sprites](/help/glossary/sprite/) (collections of PNG) at a variety of resolutions, then delivers the proper sprite based on a user's device. For example, if a user views your map on a device with a high resolution screen, they will receive a 2x sprite. If a user views your map on a device with a low resolution screen, they receive a 1x sprite.

## Common issues

Sometimes SVGs fail to upload or upload successfully, but do not appear as expected. Here are some common issues and suggestions for troubleshooting them.

### Black images with no color

If you are able to add your SVG to Mapbox Studio, but it shows up as black, it may be because you are using `<style>` tags to assign style properties rather than using inline `style` attributes. Mapbox Studio does not support style properties added in `<style>` tags.

If you use Adobe Illustrator to create your SVG, choose **Export** or **Save As** and follow the instructions in the [Create SVG icons in Adobe Illustrator](#create-svg-icons-in-adobe-illustrator) section of this guide to format the SVG file correctly for use in Mapbox Studio.

### Sketch icons are not rendered correctly in Mapbox Studio

The SVGs Sketch generates may include some SVG filters that can not be correctly rendered by Mapbox Studio. You can open the SVG in Adobe Illustrator and do `Object > Expand Appearance`.

### "Icon upload failed" error

If your icon fails to upload, it's likely either because the SVG is too large or the file is not a valid SVG. (For the list of SVG elements and attributes that the Mapbox uploader supports, see the [Mapnik SVG support page](https://github.com/mapnik/mapnik/wiki/SVG-support).) We recommend you make sure that:

- The images you're uploading are smaller than the sprite dimension limit: 1024px x 1024px. Learn more about [how sprites work](/help/glossary/sprite/).
- There are no syntax errors in your SVG file.

### Size property causing icon to look blurry

If you adjust an icon's `size` in the Mapbox Studio style editor or in code, you might notice that it seems fuzzy or dithered. To keep your icons crisp, set the `size` property to `1`. And if you want to display a larger image on the map, upload a larger SVG.

### Change an icon from the Mapbox template styles

You can get the original SVGs used in any Studio styles by clicking on the `Download` button of a style from the [Mapbox Studio style list](https://www.mapbox.com/studio/styles/) or use the [Maki editor](https://www.mapbox.com/maki-icons/editor/) to create an entire set of custom designed icons.

## Create SVG icons in Adobe Illustrator

We support a wide range of SVG features, but some features aren't available. To make sure that your vector graphics are accurately included in your maps, follow these steps:

Make sure everything is in vector format. If you've applied some Illustrator effects, go to **Object > Expand Appearance**. Do not include symbols or raster images as part of your SVGs, whether embedded or linked.

There are two ways to generate an `.svg` file from Illustrator: **Export** and **Save As**.

### Export

- To **Export**, go to **File > Export**.
- Click the **Use Artboards** and enter the artboard number within the **Range** box.
- Click the **Export** button.
- In the SVG Options window, under **Advanced Options** panel, select **Presentation Attributes** as the **Styling** option. Uncheck the **Responsive** checkbox, and make sure you have a **Decimal** value greater than 3. Your settings should look like this:

![adobe illustrator SVG export settings](/help/img/studio/svg_export_illustrator_setting.png)

### Save as

- To **Save As**, go to **File > Save As**, and click **Save As**.
- In the SVG Options window, select **SVG 1.1** for **SVG profiles**, select **Presentation Attributes** for **CSS Properties**, select a value greater than 3 for **Decimal Places**, and uncheck the **Responsive** checkbox. Your settings should look like this:

![adobe illustrator SVG export settings](/help/img/studio/svg_saveas_illustrator_setting.png)

## Unsupported SVG elements and attributes

 The Mapbox uploader does not support all possible SVG elements and attributes. For a full list of supported and unsupported SVG elements and attributes, see the [Mapnik SVG support page](https://github.com/mapnik/mapnik/wiki/SVG-support).
