---
title: Troubleshooting App Store submission with the Mapbox Maps SDK for iOS
description: Learn how to troubleshoot frequently seen issues when submitting applications built with the Mapbox Maps SDK for iOS to the App Store.
topics:
- mobile apps
contentType: troubleshooting
---

## Framework errors

If you have installed the Mapbox Maps SDK for iOS manually, you may see an [App Store bug](http://www.openradar.me/radar?id=6409498411401216) that results in the following error when submitting your application to the App Store:

> _ERROR ITMS-90087: Unsupported Architectures. The executable for `YourApp.app/Frameworks/Mapbox.framework` contains unsupported architectures '[x86_64, i386]'_

To avoid this, you'll need to add the following script in the Build Phases tab of your project. This script will remove architectures for simulators, which is not necessary for App Store submission.

```bash
"${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/Mapbox.framework/strip-frameworks.sh"
```

If you have installed the Mapbox framework with CocoaPods or Carthage, adding this script is not necessary.

If you're still running into issues working with the Mapbox Maps SDK for iOS, reach out to our [support team](https://www.mapbox.com/contact), providing as much detail as possible so we can help better understand your issue.
