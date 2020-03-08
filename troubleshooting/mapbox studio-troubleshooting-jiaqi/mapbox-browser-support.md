---
title: 浏览器支持Browser support
description: Learn which browsers support each Mapbox product.
topics:
- data
- map design
- web apps
contentType: troubleshooting
---

以下是与Mapbox工具兼容的浏览器列表。

## Mapbox.com

Mapbox.com（包括[docs.mapbox.com](https://docs.mapbox.com/)）与所有现代浏览器和Internet Explorer 11兼容。

## Mapbox Studio

支持WebGL的浏览器支持[Mapbox Studio](https://studio.mapbox.com/)，WebGL是一种通过JavaScript通过硬件加速生成动态3D图形的方法。Mapbox Studio与所有现代浏览器兼容，特别是：

- [Safari](http://www.apple.com/safari/) 9及更高版本。
- [Chrome](http://www.google.com/chrome/)最新。
- [Firefox](http://www.mozilla.org/en-US/firefox/new/)最新。
- [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) 13（具有最新的Windows 10更新）。

Mapbox Studio样式编辑器和数据集编辑器与Internet Explorer不兼容。但是，您可以使用Internet Explorer 10+ 访问[Mapbox Studio仪表板](https://studio.mapbox.com/)中的所有其他页面和功能。这包括但不限于您的帐户信息，统计信息，Mapbox Studio Classic样式和Mapbox编辑器项目。

我们不能保证Mapbox Studio可以与仅在实验上支持WebGL的浏览器一起使用。

有关更多信息，请访问[caniuse.com](https://caniuse.com/#search=gl)检查支持的最新浏览器，或访问[get.webgl.org](https://get.webgl.org/)检查您的浏览器是否支持WebGL。

## Mapbox GL JS

与Mapbox Studio一样，大多数现代浏览器都支持[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)。Mapbox Studio的相同要求也适用于Mapbox GL JS。

通常，Internet Explorer 11和Microsoft Edge的最新版本与Mapbox GL JS兼容。但是，由于IE11和Edge的某些版本不支持WebGL的必要功能或不提供相关浏览器错误的修复程序，并且由于底层硬件必须支持WebGL，因此我们不能保证对这两种浏览器的所有版本都支持。

要测试客户对您的应用程序的支持，[请参见我们的检查浏览器兼容性的示例](https://docs.mapbox.com/mapbox-gl-js/example/check-for-support/)。

## Mapbox.js

大多数现代浏览器（包括Internet Explorer 8+）都支持[Mapbox.js](https://docs.mapbox.com/mapbox.js/)。

对Internet Explorer版本的支持不包括以前版本兼容模式下的那些版本，例如IE7兼容模式下的Internet Explorer 8。