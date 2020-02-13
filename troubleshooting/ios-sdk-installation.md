---
layout: help-single
title: Troubleshooting Mapbox Maps SDK for iOS installation
description: Learn how to troubleshoot frequently seen issues when installing the Mapbox Maps SDK for iOS.
topics:
- mobile apps
contentType: troubleshooting
---

## CocoaPods Installation

If you're already using CocoaPods to manage dependencies in your project, we suggest installing the [Mapbox Maps SDK for iOS](https://www.mapbox.com/ios-sdk/) in the same way. If you run into issues while installing the framework with CocoaPods, try following these steps:

* Use the most recent version of CocoaPods. Beta versions are not recommended for use with the Mapbox Maps SDK for iOS.
* If `pod install` gives you an “Unable to find a specification” error, try running `pod repo update` first.
* When you run `pod install`, CocoaPods generates an `xcworkspace` file that includes its configuration. The `xcworkspace` file has a white background, unlike the `xcodeproj` file with a blue background. Make sure you're opening this file and not the original Xcode project.
* If you see the error `Mapbox.h not found`, this can typically be resolved by building your application despite the error.
* If you're getting a permission error or having trouble installing CocoaPods itself, consult the [CocoaPods troubleshooting](https://guides.cocoapods.org/using/troubleshooting.html) documentation.

If you're still having issues using Mapbox with CocoaPods, please [contact support](https://www.mapbox.com/contact) with the complete details of the issue, including error messages.

## General Troubleshooting

If your app successfully builds, but you see `401` responses to requests, make sure that you've [set your access token correctly](https://www.mapbox.com/ios-sdk/#access-tokens).
