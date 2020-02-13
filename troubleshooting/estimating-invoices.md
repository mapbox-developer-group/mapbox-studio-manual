---
title: Estimating your future invoices on new pricing 
description: Learn how to use the pricing calculators on the pricing page to estimate costs on the new pricing model.
topics:
- data
- web apps
prependJs:
  - "import AppropriateImage from '../../components/appropriate-image';"
  - "import LineItem from '../../components/diagrams/line-item';"
  - "import InvoiceLine from '../../components/diagrams/invoice-line';"
  - "import AccountPricingCard from '../../components/diagrams/account-pricing-card';"
  - "import Icon from '@mapbox/mr-ui/icon';"
contentType: troubleshooting
hideFromSearchEngines: true
---

This guide outlines how to use the correct pricing calculators on the [pricing page](https://www.mapbox.com/pricing/) to estimate the costs of your invoices under Mapbox’s new pricing model. This guide will only help if you **have not** already upgraded to the new pricing model.

## Step 1: Access your invoices page

Sign into your account and navigate to your [invoices page](https://account.mapbox.com/invoices/).

If you are unfamiliar with Mapbox invoices, read [What to Expect](https://docs.mapbox.com/accounts/overview/invoices/#what-to-expect) with Mapbox billing.


## Step 2: Open an invoice and review details of charges

Every invoice will include [details of charges](https://docs.mapbox.com/accounts/overview/invoices/#details-of-charges), which list distinct line items for each product you were billed for in a single [billing period](https://docs.mapbox.com/accounts/overview/invoices/#billing-period). Each line item contains the following information (product, quantity, unit, and costs):

{{ <LineItem /> }}

Identifying which products your account has been billed for is the first step to understanding current costs and projecting future expenses. **Note that it's possible that your account has used some products during a billing period that did not exceed the free tier for that product and were not billed.** To review usage volumes for all products within a billing period, input the dates from your invoices into the [Statistics page](https://account.mapbox.com/statistics).

### Example

The following example invoice was charged for use of the _Raster Tiles API_ and _Vector Tiles API_ independently. Each product is listed as separate line items:

{{
  <div className="round shadow-darken10 wmax600 mx-auto px24 py24 my18 clearfix">
    <div className="txt-fancy txt-l">Details of charges</div>
    <InvoiceLine
      description="Vector Tiles API: X,XXX,XXX tile requests"
      amount="$xxx.xx"
    />
    <InvoiceLine
      description="Raster Tiles API: Y,YYY,YYY tile requests"
      amount="$yyy.yyy"
    />
    <InvoiceLine
      description="Pay-as-you-go plan for Sep 12 - Oct 12"
      amount="$0.00"
    />
    <div className="wmax300 fr">
      <InvoiceLine
        description="Total charges"
        amount="$zzz.zz"
      />
      <InvoiceLine
        description="Amount due"
        amount="$zzz.zz"
      />
    </div>
  </div>
}}


## Step 3: Use the pricing calculator that matches each line item on your invoices

There is a pricing calculator for each product on the Mapbox [pricing page](https://www.mapbox.com/pricing). Input your usage volumes to the corresponding pricing calculator for that product. For the most accurate estimations, use the calculator that matches the line items on your invoice.

### Example

Input the values for each product in the corresponding calculator on the pricing page.

#### Raster Tiles API costs

1. Find the **Raster Tiles API** section on the [pricing page](https://www.mapbox.com/pricing/#tile).
2. Click the {{<span className="inline-block txt-bold txt-s color-green bg-green-faint round-full px3 py3"><Icon name="creditcard" inline="true" size={30} /> Show pricing calculator </span>}} button.
3. In the text input box, enter the value that appears on your invoice next to "Raster Tiles API:" (in the example below, this is represented by <span className="bg-green-light txt-bold">Y,YYY,YYY</span>).
4. The new estimated monthly cost will appear to the left.

{{
  <div className="round shadow-darken10 wmax600 mx-auto px24 py24 my18">
    <div className="txt-fancy txt-l">Details of charges</div>
    <InvoiceLine
      description="Vector Tiles API: X,XXX,XXX tile requests"
      amount="$xxx.xx"
    />
    <InvoiceLine
      description={<div>Raster Tiles API: <span className="bg-green-light">Y,YYY,YYY</span> tile requests</div>}
      amount="$yyy.yy"
    />
  </div>
}}

{{ <AppropriateImage imageId="troubleshooting--estimating-invoices--raster-costs" alt='A screenshot of the "Raster Tiles API" section of the pricing page (mapbox.com/pricing) after clicking "Show price calculator" and entering 2,756,194 into the input field. The result is $463.90.' /> }}

#### Vector Tiles API costs

<!-- copyeditor disable xxx -->
1. Find the **Vector Tiles API** section on the [pricing page](https://www.mapbox.com/pricing/#tile).
2. Click the {{<span className="inline-block txt-bold txt-s color-green bg-green-faint round-full px3 py3"><Icon name="creditcard" inline="true" size={30} /> Show pricing calculator </span>}} button.
3. In the text input box, enter the value that appears on your invoice next to "Raster Tiles API:" (in the example below, this is represented by <span className="bg-green-light txt-bold">X,XXX,XXX</span>).
4. The new estimated monthly cost will appear to the left.
<!-- copyeditor enable xxx -->

{{
  <div className="round shadow-darken10 wmax600 mx-auto px24 py24 my18 clearfix">
    <div className="txt-fancy txt-l">Details of charges</div>
    <InvoiceLine
      description={<div>Vector Tiles API: <span className="bg-green-light">X,XXX,XXX</span> tile requests</div>}
      amount="$xxx.xx"
    />
    <InvoiceLine
      description="Raster Tiles API: Y,YYY,YYY tile requests"
      amount="$yyy.yy"
    />
  </div>
}}

{{ <AppropriateImage imageId="troubleshooting--estimating-invoices--vector-costs" alt='A screenshot of the "Vector Tiles API" section of the pricing page (mapbox.com/pricing) after clicking "Show price calculator" and entering 1,297,429 into the input field. The result is $274.50.' /> }}


## Step 4: Follow the same process for any other products you see on your invoices

You may see line items for several different products on your invoices. These correspond to the products that your mapping implementations are utilizing (for example: Static Images API, Temporary Geocoding API, Directions API, etc).

It’s important to match the product on your invoice line items to the correct product on the pricing page so the pricing calculator accurately matches to your projected costs.

Once you have used the pricing calculators for each product found on your invoices, add the costs to see what that invoice would have cost under the new pricing model.


## Next steps

**There are actions you can take before December 1, 2019 to optimize your implementations and reduce costs.** 

If you are using a [product that is charged by tile requests](https://docs.mapbox.com/accounts/overview/pricing/), such as a version of [Mapbox GL JS below v1.0.0](https://docs.mapbox.com/accounts/overview/pricing/#mapbox-gl-js--v100), [Mapbox.js](https://docs.mapbox.com/accounts/overview/pricing/#mapboxjs-or-leaflet), [Leaflet](https://docs.mapbox.com/accounts/overview/pricing/#mapboxjs-or-leaflet), or another service with Mapbox-hosted tiles, there are actions you can take to reduce your bill. 

### Use the latest version of Mapbox GL JS (or at least v1.0.0)

The latest versions of Mapbox GL JS are [billed by map loads](https://docs.mapbox.com/accounts/overview/pricing/#mapbox-gl-js-v100-and-higher) instead of by tile requests. A map load occurs whenever a Mapbox GL JS Map object is initialized on a webpage and a Mapbox-hosted map tile is requested.  Measuring usage by map loads means that users interacting with your web map can toggle layers from non-composited sources on and off, zoom and pan around the map, and toggle between styles without affecting your usage. You can also add non-composited vector or raster sources to your map at runtime without incurring additional charges.

If you’re already using GL JS, you can review the [GL JS changelog](https://github.com/mapbox/mapbox-gl-js/blob/master/CHANGELOG.md) to learn more about how to upgrade to v1.0.0 (or greater). For the vast majority of users, there's likely not much work required to update the GL JS version number to v1.0.0 or greater in your web app or webpage since there have been no real major breaking changes apart from new pricing. If you run into any particular issues upgrading, you can reach out to us for technical help [through the support form](https://support.mapbox.com/hc/en-us/requests/new?ticket_form_id=360000291231).

### Use the Static Tiles API instead of the Raster Tiles API with Mapbox.js, Leaflet, and other applications

If your invoice includes requests to the Raster Tiles API and you are using Mapbox.js or Leaflet, you can either [read this guide to learn how to upgrade to GL JS](https://docs.mapbox.com/help/troubleshooting/transition-from-mapbox-js-to-mapbox-gl-js/), or, if upgrading to GL JS is not an option, you can use the [Static Tiles API](https://docs.mapbox.com/api/maps/#static-tiles) instead of the Raster Tiles API with your Mapbox.js or Leaflet implementation. The process of switching from Raster Tiles to Static Tiles depends on the tools you are using:

**Implementation** | **Old Method** | **New Method**
-- | -- | --
Mapbox.js ([styleLayer](https://docs.mapbox.com/mapbox.js/api/v3.2.1/l-mapbox-stylelayer/)) | `L.mapbox.map('map',{tileset_id})` | `L.map('map').addLayer(L.mapbox.styleLayer({style_url}))`
Other applications ([Static Tiles API request](https://docs.mapbox.com/api/maps/#static-tiles)) | `/v4/{tileset_id}/{zoom}/{x}/{y}{@2x}.{format}` | `/styles/v1/{username}/{style_id}/tiles/{tilesize}/{z}/{x}/{y}{@2x}`

Read more about using the [Static Tiles API versus Raster Tiles API in web apps](https://docs.mapbox.com/accounts/overview/pricing/#mapboxjs-or-leaflet).

**Still have questions? [Let us know](https://support.mapbox.com/hc/en-us/requests/new?ticket_form_id=360000279191). Our billing support team is standing by to help.**
