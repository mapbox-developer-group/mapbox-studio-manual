---
title: Keep access tokens private in open source iOS and Android apps
description: Learn how to protect your access tokens so that they aren't used by others.
topics:
- mobile apps
contentType: troubleshooting
---

An app using the [Mapbox Maps SDK for iOS](https://docs.mapbox.com/ios/maps/overview/) or the [Mapbox Maps SDK for Android](https://docs.mapbox.com/android/maps/overview/), must provide an [access token](/help/glossary/access-token) to display Mapbox-hosted maps and use other Mapbox services. If the app’s source code is public, for example on GitHub, you should [rotate your access token](/help/how-mapbox-works/access-tokens/) regularly to prevent abuse by other developers. You can go one step further by keeping your access token out of the project’s repository entirely.

## iOS

1. Create a new plain text file containing your access token, named either `.mapbox` or `mapbox`. To avoid accidentally committing this file to an open-source project, either you can save it to a location outside your project's version-controlled directory, or you can add this file to your project’s [.gitignore](https://help.github.com/articles/ignoring-files/) file.
1. Open your project in Xcode. In the project editor, go to the Build Phases tab, then click the + button to add a new Run Script phase to the end.
1. Customize the Run Script build phase to run the following code (replacing `~/.mapbox` or `~/mapbox` with the path to the file you added in step 1):
   ```
   # Look for a global file named 'mapbox' or '.mapbox' within the home directory
   token_file=~/.mapbox
   token_file2=~/mapbox
   token="$(cat $token_file 2>/dev/null || cat $token_file2 2>/dev/null)"
   if [ "$token" ]; then
     plutil -replace MGLMapboxAccessToken -string $token "$TARGET_BUILD_DIR/$INFOPLIST_PATH"
   else
     echo 'warning: Missing Mapbox access token'
     open 'https://account.mapbox.com/access-tokens/'
     echo "warning: Get an access token from <https://account.mapbox.com/access-tokens/>, then create a new file at $token_file or $token_file2 that contains the access token."
   fi
   ```
1. Add `$(TARGET_BUILD_DIR)/$(INFOPLIST_PATH)` to the build phase’s Input Files section. Otherwise, the access token may be overridden during incremental builds. Optionally, you can also add `~/.mapbox` or `~/mapbox` to this section, so that Xcode will automatically update Info.plist after you change your access token.

When building the project in Xcode, the access token will be inserted into the Info.plist inside your built app, but not into the Info.plist that you’d commit.


## Android

### Git-based option

Please be aware that to enable continuous integration builds with the following approach, you can take advantage of [a Gradle script that the Mapbox Android team uses itself](https://github.com/mapbox/mapbox-gl-native-android/blob/master/gradle/gradle-config.gradle).

1. [Create a local `.gitignore` file in your repository folder](https://help.github.com/articles/ignoring-files/). If the folder already has a `.gitignore` file, locate and open it.
2. Add the following line to the `.gitignore` file : `YOUR_APP_MODULE_NAME/src/main/res/values/developer-config.xml`. This will tell the Git system to ignore the XML values file that you will create in the next step.
3. Navigate to your project's `src/main/res/values` folder and make a new file titled `developer-config.xml`.
4. Create an `access_token` String resource and paste your access token into it:
```
<string name="access_token">PASTE_YOUR_TOKEN_HERE</string>
```
5. At this point, the `R.string.access_token` string resource should be discoverable wherever you deliver the access token to the `Mapbox` class such as: `Mapbox.getInstance(context, getString(R.string.access_token));`
6. Because of step #3 above, the Git system shouldn't be tracking the `developer-config.xml` file at all.
7. You're all set! You can use and change the Mapbox access token locally on your machine without the chance of committing and pushing it to a public platform such as GitHub!

### Non-Git option

1. Find or create a `gradle.properties` file in your Gradle user home folder. The folder can be found at `«USER_HOME»/.gradle`. Once the file is created, its path should be `«USER_HOME»/.gradle/gradle.properties`. [More information about Gradle properties](https://docs.gradle.org/current/userguide/build_environment.html#sec:gradle_configuration_properties).
2. Add a key-value pair to the `gradle.properties` file: `MAPBOX_ACCESS_TOKEN="PASTE_YOUR_TOKEN_HERE";`
3. Open your app-level `build.gradle` file. This file is usually the one where you define specific dependencies for your app, such as the Mapbox Maps SDK for Android.
4. Add `MAPBOX_ACCESS_TOKEN` as a `buildConfigField` entry to whichever buildTypes your app has:

```groovy
android {
	buildTypes {
	  debug {
	    ...
	    buildConfigField 'String', "MapboxAccessToken", MAPBOX_ACCESS_TOKEN
	    ...
	  }
	  release {
	  ...
	    buildConfigField 'String', "MapboxAccessToken", MAPBOX_ACCESS_TOKEN
	  ...
	  }
	}
}
```

5. Because your Gradle files have changed, make sure to sync the project with the latest Gradle files.
6. Now you can access your Mapbox access token in your app to initialize the Mapbox Maps SDK for Android: `Mapbox.getInstance(context, BuildConfig.MapboxAccessToken);`
