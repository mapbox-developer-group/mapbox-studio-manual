---
title: Understanding iOS framework size
description: Learn how to measure and optimize your iOS app’s size.
topics:
- mobile apps
contentType: troubleshooting
---

The [Mapbox Maps SDK for iOS](https://www.mapbox.com/ios-sdk/) provides much functionality and countless customization options at high performance, requiring somewhat more storage space than a less complex framework would. Nonetheless, the SDK contributes only 3–4 megabytes to the ultimate size of your application, thanks to various optimization steps that occur during the compilation and App Store submission processes.

## App thinning

Apple packages optimized, device-specific versions of your app via [app thinning](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html). What your users download only includes code and resources required by their specific device. You can [generate an app size report](https://developer.apple.com/library/content/qa/qa1795/_index.html#//apple_ref/doc/uid/DTS40014195-CH1-MEASURE) using Xcode or look at the “App Store File Sizes” report in iTunes Connect to see what the actual initial download size of your app will be. Note that these figures represent the maximum amount that your users will download — see the [application updates](#application-updates) section of this page for more information on how updates are optimized.

## CPU architectures

Our framework includes a “fat” (multi-architecture) binary that contains slices for `armv7`, `arm64`, `i386`, and `x86_64` CPU architectures. ARM slices are used by physical iOS devices, while `i386` and `x86_64` are used by Simulator and are stripped from your app during the build and archive process. When a user downloads your app from the App Store, they receive only the architecture that their device requires.

## Bitcode

[Bitcode](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html#//apple_ref/doc/uid/TP40012582-CH35-SW2) is included for ARM architectures but does not affect the final size of your application. Bitcode is an unoptimized intermediate code representation that is used by Apple for potential recompilation and re-optimization of your app binary, after App Store submission. As metadata solely intended for build optimization, bitcode is never downloaded by your users.

If you have disabled bitcode in your project, it is _not_ necessary for you to remove bitcode from frameworks that contain it. Regardless of whether your app takes advantage of bitcode, the version of your app that the App Store delivers to your users never contains bitcode.

## Application updates

When you update your application, your users download only the files that have changed in that update. These partial updates are commonly known as “delta updates”. If resources and binaries in your app have not changed, they will not be downloaded again. See Apple’s [Reducing Download Size for iOS App Updates](https://developer.apple.com/library/content/qa/qa1779/_index.html) guide for more information on how to take advantage of delta updates.

## Debug symbols

The Mapbox Maps SDK for iOS framework download includes `dSYM` and `BCSymbolMap` files. These are used for [crash symbolication](https://developer.apple.com/library/content/technotes/tn2151/_index.html#//apple_ref/doc/uid/DTS40008184-CH1-SYMBOLICATION) and are not included in the app that your users download.

## Dynamic versus static frameworks

Following Apple’s platform guidelines, Mapbox recommends using the dynamic-linked version of our SDK in your app. If you have installed our SDK via [CocoaPods](https://www.mapbox.com/install/ios/cocoapods/) or [Carthage](https://www.mapbox.com/install/ios/carthage/), you are already using our dynamic framework. See Apple’s [Overview of Dynamic Libraries](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/OverviewOfDynamicLibraries.html) for information on how dynamic libraries work and a discussion of their benefits.

Mapbox does additionally build and publish a statically-linked version of our SDK, but we do not recommend it for general use.

## Reducing the size of your app

We recommend that you read Apple’s [Reducing the size of my App](https://developer.apple.com/library/ios/qa/qa1795/_index.html) guide to learn about ways to accurately measure and reduce the size of your app.

The Mapbox team is constantly optimizing the size of our framework, making sure that your users only get the bits they need to enjoy your maps. If you have any questions or concerns, reach out to our [support team](https://www.mapbox.com/contact).
