---
title: How to use Mapbox securely
description: Learn how to use Mapbox securely.
topics:
- data
- map design
- web apps
- access tokens
- mobile apps
prependJs:
  - "import ChevronousText from '@mapbox/mr-ui/chevronous-text';"
contentType: troubleshooting
---

Mapbox is critical infrastructure for our customers. We work hard to protect the security of your account, your data, and your users. This guide contains recommendations and resources for building secure applications, keeping your account secure, and where to go to learn more about security at Mapbox.

## Build secure applications

There are a few guidelines you can follow to build more secure applications with Mapbox.

### Access tokens

<!--copyeditor disable best-->

**Manage scopes.** Each access token you create will have a set of permissions that allow you to make certain types of requests to Mapbox APIs &mdash; these are called **scopes**. Here are some best practices for [access token scopes](/help/how-mapbox-works/access-tokens/#access-token-scopes):

- A client application (for example, a web application running in your browser) should only use a token with public scopes. Public tokens have read-only access rights to styles.
- Make all requests requiring a token with secret scopes on a server. *Secret token API requests should never be exposed to the client.*
- If you need to do potentially sensitive operations in the client (for example, uploading new data or deleting styles) use the [Mapbox Tokens API](https://docs.mapbox.com/api/accounts/#tokens) to generate a temporary token for the specific workload.
- To protect your account and your data, do not grant more scopes than necessary to each token. For example, if you are creating a token to upload data to Mapbox with the [Mapbox Uploads API](https://docs.mapbox.com/api/maps/#uploads), you will want to make sure you select the `uploads:write` and `uploads:read` scopes. To display a map in a web or mobile application, you should create a separate access token that does not include the secret uploads-related scopes, but does include the public `styles:read` and `fonts:read` scopes.

**Enable URL restrictions.** You can make access tokens in your web applications more secure by [adding URL restrictions](/help/how-mapbox-works/access-tokens/#url-restrictions). When you add a URL restriction to a token, that token will only work for requests that originate from the URLs you specify. Tokens without restrictions will work for requests originating from any URL. This feature is compatible with versions of [Mapbox GL JS 0.53.1 and greater](https://github.com/mapbox/mapbox-gl-js/blob/master/CHANGELOG.md#053).

**Rotate tokens.** Any public access tokens you include in a webpage will be visible to anyone who makes an effort to look for it. Access tokens can be deleted and rotated at any time if you suspect misuse. Here are some tips for managing and rotating access tokens:

- Store tokens in environment variables or application configurations on your server.
- Generate separate tokens for each application you build. This will make it easier to track usage and identify unexpected activity.
- Use the [Mapbox Tokens API](https://docs.mapbox.com/api/accounts/#tokens) to rotate tokens on a schedule.

**Keep tokens private.** In open source iOS and Android applications, access tokens can be further protected to prevent abuse by other developers:

-  Avoid having access tokens in your open source iOS project's GitHub repository by [making them private using Xcode](/help/troubleshooting/private-access-token-android-and-ios/#ios).
- Avoid having access tokens in your open source Android project's GitHub repository by [using a Gradle script](/help/troubleshooting/private-access-token-android-and-ios/#android).

**Token analytics.** Keeping track of token-specific analytics will help you identify any unexpected usage. Here are some suggestions for tracking usage by access token:

- Use the [Statistics page](https://account.mapbox.com/statistics) to browse account usage or usage for a specific access token for a week, month, year, or custom date range.
- Deploy distinct tokens for each of your applications, which enables you to isolate statistics by tokens for more granular usage tracking.  

### Data security

There are different privacy and security settings for different assets within your Mapbox account. Understanding privacy details will help you make the right decision for your situation.

**Tilesets.** You can make tilesets public or private. When you create a tileset, it is private by default. Here are some details about public and private tilesets:

- **Public tilesets**: Public tilesets can be used by any Mapbox user's access token. But another user will need the tileset ID for your tileset to use it with their access token. No central, publicly accessible repository of tilesets exists. If you expose a tileset ID for a public tileset in your client-side code, another Mapbox user could use your tileset, but they would not be able to edit it.
- **Private tilesets**: If a tileset is private, the tileset ID can only be used with an access token from the owner's account. This means that other users cannot use _their_ access tokens to access _your_ tilesets.

**Styles.** You can make styles public or private. When you create a style, it is private by default. Here are some details about public and private styles:

- **Public styles**: If a style is public, the style URL can be used by _any_ Mapbox user with their access token. But only the owner of a style can make changes or delete a style, even if it's public.
- **Private styles**: If a style is private, the style URL can only be used with an access token from the owner's account.


### CSP Directives

As a mitigation for Cross-Site Scripting and other types of web security vulnerabilities, you may use a [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) to specify security policies for your website. If you do and you are using Mapbox GL JS, use the CSP directives listed in the [Mapbox GL JS documentation](https://docs.mapbox.com/mapbox-gl-js/overview/#csp-directives). 

### Mapbox GL JS popups

Developers shouldn't allow users to provide arbitrary data (or "untrusted content") to popups using [`setHTML`](https://docs.mapbox.com/mapbox-gl-js/api/#popup#sethtml). This method does not include HTML filtering or sanitization, and must be used only with trusted content. Use [`setText`](https://docs.mapbox.com/mapbox-gl-js/api/#popup#settext) instead for security against XSS if the popup content is user-provided.

### API requests

When [retrieving TileJSON metadata with the Tilesets API](https://docs.mapbox.com/api/maps/##retrieve-tilejson-metadata), use the `?secure` parameter to request resources in the response as HTTPS endpoints.

### Review security bulletins

For recent security issues related to all Mapbox products, please see our [Security bulletins page](https://www.mapbox.com/security-bulletins/).


## Keep your account secure

Keep your Mapbox account secure to protect your data, billing information, and other profile information.

### Strong passwords

Use a strong password to keep your account secure. Keep passwords secret, don't reuse passwords between accounts, and use complex passwords. Consider using a password manager for your Mapbox account.

### Two-factor authentication

You can also set up two-factor authentication for your Mapbox account. **Two-factor authentication**, also known as multi-factor authentication (MFA) or two-step authentication, provides an optional, but recommended, layer of security to your account. Once enabled, you'll be prompted to enter your password as well as a security code generated by an authentication app on your mobile device whenever you log in. We recommend using Google Authenticator, which is free and available for [iOS](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8) and [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2). For a Windows phone, use the [Authenticator](https://www.microsoft.com/en-us/account/authenticator?cmp=h66ftb_42hbak) app.

To learn how to enable two-factor authentication for your account, see the [security section of our Account documentation](https://docs.mapbox.com/accounts/overview/settings/#security).

A recovery code is a single-use code that lets you sign in without your two-factor device. This code will help you gain access to your account in the event that you lose or replace your two-factor device. To use the code, you’ll need your username or email and your password. Find instructions for using a recovery code in our [Account documentation](https://docs.mapbox.com/accounts/overview/settings/#security)


## Learn about our bug bounty program

Mapbox appreciates the effort of software security researchers who work to make the Internet more secure. Our security vulnerability coordination and bug bounty program exist to reward the work of security researchers who find issues with our software and web services.

<a href="https://www.mapbox.com/platform/disclosure/" className="txt-bold">{{<ChevronousText text="Learn about or report a security issue to our bug bounty program" />}}</a>
