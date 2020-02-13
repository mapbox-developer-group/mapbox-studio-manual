---
title: Integrate the Mapbox Visual with Microsoft Power BI
description: General configuration guidance and tips for using the Mapbox Visual in Microsoft Power BI.
topics:
  - third party integration
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
contentType: troubleshooting
---

## Supported Power BI environments and tools

The Mapbox Visual for Microsoft Power BI is on version **1.4.0**. This version works with the following Power BI environments and tools:

PBI Report Server | PBI Mobile (iOS/Android) | PBI Embedded | PBI Publish to Web | PBI Desktop | Chrome | Firefox | Safari | Edge | IE11
--- | --- | --- | --- | --- | --- | --- | --- | --- | ---
Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No

## Link your Mapbox access token in Power BI
To use the Mapbox Visual in Microsoft Power BI, you need to link your Mapbox access token in Power BI:

1. To get started with the Mapbox Visual in Microsoft Power BI, you need a [Mapbox account](https://www.mapbox.com/signup/) and a Mapbox access token. You can find your Mapbox access tokens on your [Account page](https://www.mapbox.com/account).
1. In Power BI, under the Mapbox Custom Visual **Format** panel, open the **Viz Settings** dropdown.
1. Paste your Mapbox access token in the Access Token field.

<img alt='A screenshot showing where to add your Mapbox access token to the Power BI Viz Settings panel' src='/help/img/3rdparty/power-bi-guide-access-token.png' class='block mx-auto wmax600'>

## Use a custom Mapbox style in Power BI
The Mapbox Visual for Power BI gives you access to several default Mapbox styles. You can also use a custom Mapbox that you have created in Mapbox Studio:

1. In [Mapbox Studio](https://www.mapbox.com/studio/), find the style that you want to use.
1. Click the **Menu** button.
1. Click the {{<Icon name='clipboard' inline={true} />}} icon next to the _Style URL_ to copy it to your clipboard. You will need this URL to link to your custom map style in Power BI.
<img alt='A screenshot showing the Make public option and the style URL in a Mapbox style menu options' src='/help/img/3rdparty/power-bi-guide-style-url.png' class='block mx-auto mt18'>
1. Go to Power BI. Under the Mapbox Custom Visual **Format** panel, open the **Viz Settings** dropdown.
1. In the _Map Style_ field, select the **Custom** option.
1. In the _Style URL_ field, paste the style URL that you copied earlier.

<img alt='Screenshot showing that the Map Style should be set to Custom and where to paste the Mapbox style URL in Power BI' src='/help/img/3rdparty/power-bi-guide-add-style-url.png' class='block mx-auto'>

## Format your location data to use in Power BI choropleth visualizations
The Mapbox Visual for Power BI provides default support for creating choropleth visualizations at different administrative levels:

- Global countries
- US states
- US postal codes.

When you add your own data to Power BI, the data must contain fields that match these administrative levels names and data types to create the data join. Data dropped into the `Location` field in the Mapbox Visual must match a row in the [`Name matches` file](https://docs.google.com/spreadsheets/d/1k5HvzWdeuELwnL-Ta1Jt7wghOOrRpmQU438_LfohBEI) exactly to be included visually on your map.

The following data are supported in the Mapbox Visual for Power BI:

Administrative level | Data type | Capitalization | Examples | Notes | Exceptions
--- | --- | --- | --- | --- | ---
**Global countries** | text | Capitalize the first letter of each word; all other letters must be lowercase. | `South Africa` | &bull; Use `United Kingdom` rather than the individual country names `England`, `Scotland`, `Wales`, or `Northern Ireland`.<br> &bull; Use a country's name rather than its abbreviation (for example, `United Arab Emirates`, not `UAE`), except for `USA`, as noted in this table's _Exceptions_ column. | Use `USA` rather than `United States` or `United States of America`.
**US states** | text | Capitalize the first letter of each word; all other letters must be lowercase.  | `New Jersey`, `New Hampshire` | &mdash; | &mdash;  
**US postal codes ZCTA** | 5-digit text string | Not applicable | `94110` | When you import data as a CSV file, Power BI will automatically cut the leading "0" off any zip codes beginning with "0". To fix this, change the zip code field type to "Text" _before_ the data is imported. Changing it to text after the data is imported will not fix the issue. | &mdash;  

## Style dimensional values with the Data Colors feature
If you format your data so that the values in categorical (dimension) field are text, you can style these dimensional values using the **Data Colors** feature. The Power BI interface hides this feature until you have met the following data and format conditions.

To access the Data Colors feature:
1. Format your data and import it into Power BI. The values in the dimensional field you want to use must be formatted as text.
1. Begin creating your Power BI report as usual, and add the Mapbox Visual.
1. Drag your dimensional field from the _Fields_ panel into the _Color_ shelf.
1. The **Data Colors** dropdown menu will appear in the **Format** panel. Select your desired colors for each text value.  

![Screenshot showing the Data Colors option in Power BI](/help/img/3rdparty/power-bi-guide-data-colors-circle.png)

You can also use the Data Colors field to style your choropleth visualizations in Power BI:
1. Format your data and import it into Power BI. The values in the dimensional field you want to use must be formatted as text.
1. Begin creating your Power BI report as usual, and add the Mapbox Visual.
1. Make sure that the data you drop into the **Location** field in the Mapbox Visual exactly matches the data in a default Mapbox Visual dataset (see the [Format your location data to use in Power BI section](#format-your-location-data-to-use-in-power-bi-choropleth-visualizations)).
1. Drag your dimensional field from the _Fields_ panel into the _Color_ shelf.
1. Go back to the **Format** tab. Switch the **Circle** option off and turn the **Choropleth** option on.
1. The **Data Colors** dropdown menu will appear. Select your desired colors for each text value.

![Screenshot showing the Data Colors option in Power BI when the Choropleth option is selected](/help/img/3rdparty/power-bi-guide-data-colors-choropleth.png)

## Resolve blank map issues in Power BI
If a map that you created with the Mapbox Visual for Power BI does not display, this can likely be traced to one of the following issues:

1. **No GPU.** If your map does not display and you are using Power BI Desktop, this likely means that the machine does not have a graphics processing unit (GPU). The Mapbox custom visual for Power BI uses Mapbox GL, which requires a GPU to do client-side rendering,
  - This is a common case when Power BI Desktop is running on a virtual machine. Mapbox GL needs access to the GPU, and virtual machines don't generally have access to the GPU without hardware acceleration enabled. Check to see if you have hardware acceleration enabled on the virtual machine &mdash; if not, you will need to enable it.
1. **Cache needs to be cleared.** If your map does not display in Power BI Web or Power BI Desktop, either the browser cache or the Power BI Desktop cache may need to be cleared. This can happen due to occasional problems with the Power BI marketplace. <!--copyeditor ignore clear-->To clear the Power BI Desktop cache, delete the contents of the following folders:
  - `C:\Users\%username%\AppData\Local\Microsoft\Power BI Desktop`
  - `C:\Users\%username%\Microsoft\Power BI Desktop Store App`
1. **No access to Mapbox API endpoints.** If your map does not display in Power BI Web or Power BI Desktop, the machine running Power BI Web or Power BI Desktop may not have access to the Mapbox API endpoints. While no customer data is ever sent to Mapbox, the Mapbox API endpoints must be accessible for rendering Mapbox tiles and styles:
  - `https://*.tiles.mapbox.com`
  - `https://api.mapbox.com`
