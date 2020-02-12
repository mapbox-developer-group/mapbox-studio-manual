---
title: Introduction
description: An introduction to the comprehensive documentation for Mapbox Studio.
order: 1
prependJs:
  - "import Icon from '@mapbox/mr-ui/icon';"
  - "import OverviewHeader from '@mapbox/dr-ui/overview-header';"
  - "import WhatIsMapboxStudio from '../../components/illustrations/what-is-mapbox-studio';"
  - "import HowDoesItWork from '../../components/illustrations/how-does-it-work';"
  - "import MapboxGlSystem from '../../components/illustrations/mapbox-gl-system';"
  - "import SampleWorkflow from '../../components/illustrations/sample-workflow';"
  - "import GLWrapper from '@mapbox/dr-ui/gl-wrapper';"
  - "import Note from '@mapbox/dr-ui/note';"
contentType: guide
---

{{
    <OverviewHeader
      features={[
        "Create custom maps",
        "Upload custom data as tilesets",
        "Create data visualizations",
        "Draw data in the dataset editor"
      ]}
      title='Mapbox Studio'
      image={<img
        width={1000}
        src="/studio-manual/img/studio/studio-manual-header.png"
      />}
    />
}}

This manual contains a comprehensive explanation of each section of Mapbox Studio, including general descriptions of individual components and detailed information on specific tools. It can be used either as a reference when using specific tools in Mapbox Studio, or as a way to understand the general pieces of how a Mapbox map is constructed.

- [**Overview**](/studio-manual/overview/): Conceptual explanations of the map components and workflows in Mapbox Studio.
- [**Examples**](/studio-manual/examples/): A collection of style examples you can browse and add to your account.
- [**Help**](/studio-manual/help/): Troubleshooting guides and step-by-step tutorials for creating styles in Mapbox Studio and using them in web and mobile applications.
- [**Reference**](/studio-manual/reference/): Comprehensive descriptions of the Mapbox Studio interface.

{{<Note title="Step-by-step tutorials">}}
<!-- copyeditor disable great-->
Looking for step-by-step instructions on how to create your first map in Mapbox Studio? The tutorials listed on the Studio Manual [Help page](/studio-manual/help/) are a great way to get started! These tutorials will teach you how to upload data to Mapbox Studio, create a custom style in Mapbox Studio, use your new custom map style in other platforms, and more.
<!-- copyeditor enable great-->
{{</Note>}}


## What is Mapbox Studio?

Mapbox Studio is the Mapbox application for managing your geospatial data and designing custom map styles. Use Mapbox Studio to build and design a map to your exact specifications by uploading and editing your own data, utilizing Mapbox-provided tilesets, adding custom fonts and icons, or refining the built-in template map styles. With Mapbox Studio, full data management and design control are at your fingertips.

{{
  <WhatIsMapboxStudio />
}}

### How does it work?

Digital maps are comprised of three major parts - geospatial data, styling rules describing how the data should look, and a tool that takes those and displays a map. In the case of Mapbox, we do the following:

{{
  <HowDoesItWork />
}}

Mapbox Studio provides tools for converting your data to tilesets and creating styles. It also includes a dataset editor, which you can use to create and edit data before converting to a tileset. Once you create a style, you can display your map using [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js) or one of our [mobile SDKs](https://www.mapbox.com/mobile).

{{
  <GLWrapper><MapboxGlSystem /></GLWrapper>
}}


## Sample workflow

The flexibility of Mapbox Studio's design supports many different workflows. Below is one possible workflow for creating a custom map style with your own data in Mapbox Studio. In this example, custom data is created with the dataset editor, exported to a tileset, styled in the style editor, and displayed on the web with Mapbox GL JS.

{{
  <GLWrapper><SampleWorkflow /></GLWrapper>
}}
