---
title: Use custom Mapbox styles in Tableau
description: General configuration guidance and tips for using custom Mapbox maps in Tableau.
topics:
  - third party integration
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import AppropriateImage from '../../components/appropriate-image';"
contentType: troubleshooting
---

The latest versions of [Tableau](https://www.tableau.com/) Server, Desktop, Public, and Online all use Mapbox vector maps by default. This guide shows you how to import and use custom Mapbox styles in Tableau.

### Find a Mapbox style's integration URL

To use a Mapbox style in Tableau, you need that style's _integration URL_.

1. Go to your [Mapbox Studio styles page](https://studio.mapbox.com/) and click on the style that you would like to use as your background map in Tableau.
1. Click on the **Share** button in the options bar at the top of the screen.
1. Click the **Production** tab.
1. In the _Develop_ bar, click the **Third party** option.
1. Choose **Tableau** from the dropdown menu.
1. Click on the **{{<Icon name='clipboard' inline={true} />}}** clipboard button to copy the _Integration URL_ to your computer's clipboard. You will use this URL to connect to your Mapbox style from Tableau.

{{
<AppropriateImage imageId="troubleshooting--use-custom-mapbox-styles-in-tableau--third-party-integration" alt="Screenshot showing how to retrieve the Integration URL from the Mapbox Studio style editor" />
}}

### Change your background map to a custom Mapbox map

To use a custom Mapbox map as your background map in Tableau:

1. In Tableau, click on **Map > Background Maps > Map Services**.
1. In the **Map Services** panel, click the **Add** button.
1. Select **Mapbox Maps**.
1. Give the style a name in the _Style Name_ field. You will be able to use this name later to identify the style, so make it descriptive.
1. In the _Add Mapbox Map_ modal, paste the Mapbox integration URL into the _URL_ field. The _API access token_, _Username_, and _Style ID_ fields will automatically populate.
1. Click the **OK** button.

{{
<AppropriateImage imageId="troubleshooting--use-custom-mapbox-styles-in-tableau--add-mapbox-style" alt="Screenshot showing the Tableau Add Mapbox Map menu" />
}}

The background map will automatically switch the Mapbox map style you imported in the last step.

{{
<AppropriateImage imageId="troubleshooting--use-custom-mapbox-styles-in-tableau--loaded-mapbox-style" alt="Screenshot showing a Tableau map with a Mapbox style as its background map" />
}}

### Use background maps in Tableau Desktop

You can access the Mapbox maps you've added to Tableau through the Maps menu:

1. Click on **Map** in the Tableau menu bar.
1. Select **Background Maps**.
1. Click on your desired Mapbox style. The background map will be updated to use the style that you select.

{{
<AppropriateImage imageId="troubleshooting--use-custom-mapbox-styles-in-tableau--change-mapbox-style" alt="Screenshot showing how to switch Mapbox styles in Tableau" />
}}

### Show or hide layers in a custom Mapbox map

When you set your Tableau background map to use a custom Mapbox map style, you can use the _Map Layers_ panel to either show or hide layers within that Mapbox style. The layers used in a custom Mapbox map style will likely be different than the layers used in the default Tableau map styles, which are described in the Tableau [Customize how your map looks](https://onlinehelp.tableau.com/current/pro/desktop/en-us/maps_options.htm) guide.

All your style's layers that are displayed in the Mapbox Studio style editor will be displayed automatically in the Tableau view. To hide a layer, click on the checkbox next to the layer name to deselect it.

{{
<AppropriateImage imageId="troubleshooting--use-custom-mapbox-styles-in-tableau--show-hide-layers" alt="Screenshot showing how to hide or show layers in Tableau when using a Mapbox style" />
}}

---

For further guidance on how to customize maps in Tableau, consult the [Tableau documentation](https://onlinehelp.tableau.com/current/pro/desktop/en-us/maps_options.htm).
