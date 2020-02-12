---
title: Manage styles
description: From the Styles page you can create, manage, and edit any of your styles and find links for developing with Mapbox template styles.
prependJs:
- "import AppropriateImage from '../../../../components/appropriate-image';"
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Note from '@mapbox/dr-ui/note';"
contentType: reference
---

## Manage styles

From the **[Styles](https://studio.mapbox.com/styles)** page you can create, manage, and edit any of your styles and find links for developing with Mapbox template styles.

{{
  <Browser>
    <AppropriateImage
      imageId="reference-styles-manage-styles"
      alt="A screenshot of the page in Mapbox Studio that lists all the styles in your account. You can also create a new style on this page."
    />
  </Browser>
}}

### New style

From the styles page, you can create a new style to be edited in the style editor. Click **New style** to choose a template style. For more details on available options see [Map styles](/studio-manual/overview/map-styling/#template-styles).


{{<Note>}}
If you have previously downloaded a Mapbox Studio style, you can upload it to the Mapbox Studio style editor by unzipping your compressed style and then uploading the `style.json` file. All sprites, fonts, and other assets relating to your style will be referenced when your style uploads successfully.

There is a limit of 15 unique sources permitted in styles saved in your Mapbox account. This count includes Mapbox tilesets like Streets or Terrain. If you reach the 15 source limit, you will see an error, `Failed to update style`. This limit is related to sources, not layers. To reduce the number of sources needed, consider combining data before uploading and using filters in the style editor to create different layers from the same source. For more information on source limits, see our [Source limits in Mapbox Studio styles](https://docs.mapbox.com/help/troubleshooting/reduce-tileset-sources/) troubleshooting guide.
{{</Note>}}


### Search styles

Use the **Search styles** search bar to filter or reorder your list of styles so they are easier to find and manage.

- **Search styles**: You can search for styles by name or style ID.
- **Sort styles**: You can sort styles by name or date modified.

<h3 id='menu-for-each-style'>{{<Icon name='options' inline={true} />}} Menu for each style</h3>

Click on the {{<Icon name='options' inline={true} />}} menu next to each style to uncover options for altering and using that style. Read more about what each menu item does below.

<h4 id='details'>{{<Icon name='globe' inline={true} />}} Details</h4>

Click {{<Icon name='globe' inline={true} />}} **Details** to see a preview of this style and see options for editing and managing this style.

<h4 id='duplicate'>{{<Icon name='duplicate' inline={true} />}} Duplicate</h4>

Create a new style with the same layers and data as the existing style. The new copy will have a unique style ID.

<h4 id='replace'>{{<Icon name='harddrive' inline={true} />}} Replace</h4>

Upload a new style and replace the existing version. The file you upload must be a JSON document adhering to the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/) that references an available sprite containing all icons and images used in the style and all fonts used in the style. You cannot replace a style with one that does not reference an available sprite or font stack.

<h4 id='make-public-or-private'>{{<Icon name='lock' inline={true} />}} Make public or private</h4>

Choose whether a style should be private or public. If a style is **public**, the style URL can be used by _any_ Mapbox user with their access token. But, only the owner of a style can make changes or delete a style, even if it's public. If a style is **private**, the style URL can only be used with an access token from the owner's account. By default, new styles created in Mapbox Studio are private.

<h4 id='delete'>{{<Icon name='trash' inline={true} />}} Delete</h4>

You can permanently delete a style from your account at any time. Deleted styles may not be recovered.

<h4 id='revert'>{{<Icon name='undo' inline={true} />}} Revert to last publish</h4>

Roll back changes to the last time you hit the **Publish** button in the style editor. This cannot be undone. You will lose any changes made between the current publish and the last publish.

<h4 id='style-url'>Style URL</h4>

Any time you create a style with Mapbox Studio it generates a **style URL**. The style URL allows you to reference that specific style with the [Mapbox GL JS API or native SDKs](https://docs.mapbox.com).
