---
title: Understanding Android APK size
description: Learn how to measure and optimize your Android app’s size.
topics:
- mobile apps
contentType: troubleshooting
---

The [Mapbox Maps SDK for Android](https://www.mapbox.com/android-docs/map-sdk/overview/) is a complex and powerful framework, but it only contributes 3–4 megabytes to the ultimate size of your application.

Here are a few suggested strategies for reducing the final Android app APK size when the app uses the Mapbox Maps SDK for Android.


## Shrink code and resources

Forgotten code, menus, images, strings, and more can pile up, but your final APK might not use them all.

[ProGuard](https://developer.android.com/studio/build/shrink-code.html) and [DexGuard](https://www.guardsquare.com/en/dexguard), even without obfuscation, will remove unused Java code from your code and its dependencies. Don't forget to check for and set up necessary ProGuard rules if you're using other third-party libraries!

Adding `shrinkResources` to your app-level gradle file will remove unused resource files that live in the `/res` folder. Adding `minifyEnabled` runs ProGuard to shrink code by deleting unused code and other references. **Set both to `true`**. Both are quick wins in making sure that your compiled project only includes what it truly needs.

```
android {
    ...
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            ...
        }
    }
}
```

## Drop unnecessary architectures

The Mapbox Maps SDK ships with three architectures:

```
./arm64-v8a/libmapbox-gl.so
./x86/libmapbox-gl.so
./x86_64/libmapbox-gl.so
```

Each of these files add up to the resulting APK. If your app doesn't need x86 support, for example, you could drop `x86` and `x86_64` to save some space. See [Leverage ABI splits](#leverage-abi-splits) below for details.

## Leverage ABI splits

This is a feature that lets you build an APK file for each CPU, only containing the relevant native libraries. This process is described in the [Android Studio Project Site](http://tools.android.com/tech-docs/new-build-system/user-guide/apk-splits#TOC-ABIs-Splits).

If you distribute your app via Google Play, you can use this approach through the [Multiple APK Support](https://developer.android.com/google/play/publishing/multiple-apks.html) distribution feature.

Leveraging APK splits is one of the tips we give users when it comes to shrinking their APK size. Splitting results in building different APK for the different supported ABIs in an application. Google Play is optimized to only download the APK for the ABI of the device that is installing the app.

Mapbox publishes an [Android demo app](https://play.google.com/store/apps/details?id=com.mapbox.mapboxandroiddemo) to the Google Play store that showcases core SDK features. This app is [open source](https://github.com/mapbox/mapbox-android-demo) and uses APK splitting for smaller binary distribution. You can learn how we do this in the [`build.gradle`](https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/build.gradle) file. Find [more information about multiple APKs](https://developer.android.com/studio/build/configure-apk-splits.html) in the Android Studio documentation.


## Contribute

The Mapbox team is actively looking at other ways to reduce the SDK size ([for example](https://github.com/mapbox/mapbox-gl-native/issues/5656)). If you have questions or ideas that you'd like to share, please [get in touch with us](https://github.com/mapbox/mapbox-gl-native-android/issues/new).
