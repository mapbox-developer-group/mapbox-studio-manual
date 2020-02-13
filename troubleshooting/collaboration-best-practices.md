---
title: Collaboration best practices
description: Learn best practices for setting up an account and collaborating on projects.
topics:
- access tokens
- map design
- data
contentType: troubleshooting
---

<!--copyeditor disable best-->

This guide outlines best practices for setting up an account so that necessary stakeholders can access it. We also highlight [recommendations for multiple collaborators](#collaborating-on-projects) working together on a project.

*If you are locked out of an account and need to regain access, please see the [guide for regaining access to your account](https://docs.mapbox.com/help/troubleshooting/account-lockout/) or [contact support](https://www.mapbox.com/contact/support/#account).*

## Best practices for setting up an account

There are a few guidelines you can follow to set your account up well for collaboration from the beginning.

### Setting up an account for a team

- **Account setup.** Once an account is created, the account ID cannot be changed, so consider using an ID like `Company-Project` or `Project-Production` that will be suitable for multiple collaborators. Note that the email address registered to the account receives all important notifications for the account and is considered to be the account owner. When you create your Mapbox account credentials, store them in a shared-secure location, like a [1Password](https://1password.com/) vault and/or [Okta](https://www.okta.com/). This will help keep your password safe and available when you or your teammates need it. Even if your account has SAML SSO enabled, there will be a password associated with the account. Save this password in a secure location with limited access. 

- **Authentication management.** If your organization uses an identity provider (IdP) like Okta that supports the SAML2.0 protocol, consider [enabling SAML Single-sign on](https://docs.mapbox.com/accounts/overview/settings/#single-sign-on-authentication-sso). By using the organization's IdP for authentication to Mapbox from the beginning, you will not need to worry about sharing a password to an account or needing to change the password when a teammate departs. You'll also be able to assign [user roles](https://docs.mapbox.com/accounts/overview/settings/#configuring-user-roles-in-your-identity-provider) with specific permissions with SSO. Further, your organization's IT department can help troubleshoot if you are locked out of the account or need to provision access to a new teammate or collaborator. 

- **Notification management.** Accounts only support a single [registered email address](https://docs.mapbox.com/accounts/overview/settings/#change-your-email-address). Consider setting forwarding rules in your email client so that stakeholders in your company receive important emails. For example, if you'd like your billing department to receive billing emails like payment receipts, set any email from `billing@mapbox.com` to automatically forward to them.

- **Access token management.** Generally we recommend using distinct access tokens for each of your applications. By using a distinct token for each application, API and SDK usage can be monitored on a per app basis with the [Statistics page](https://docs.mapbox.com/accounts/overview/statistics/). Using designated tokens for development, staging, QA, and production is also recommended for granular Statistics tracking. If you're working with developers that do not need full access to the account, consider creating a token for them with the minimum [scopes](https://docs.mapbox.com/accounts/overview/tokens/) their work requires, and including an identifier like their name, initials, or project in the token's name for usage tracking. Tokens can be created and deleted with the [Access Tokens page](https://account.mapbox.com/access-tokens/) or the [Tokens API](https://docs.mapbox.com/api/accounts/#tokens) on the command line. With [scoped tokens](https://docs.mapbox.com/accounts/overview/tokens/#scopes), developers can read, write, and upload data without needing to log into your Mapbox account. 


### Setting up an account for a client

- **Account setup.** When using Mapbox in a project that might have another longterm owner, start by setting up a new account in the organization’s name, like `CompanyName` or `Company-Project`. This is an important step because [account IDs cannot be changed](https://docs.mapbox.com/accounts/overview/settings/#profile) and access tokens are non-transferable between accounts, so if someone else might need to take the account owner it should be setup for this from the beginning.

- **Account management.** If you are building projects for **multiple clients**, it might be best to set up unique Mapbox accounts for each of them. This 1:1 setup enables your client to assume ownership of their account in the future, access usage statistics for their projects, pay the invoices directly, and receive the [free tier of API calls](https://www.mapbox.com/pricing/) each month for no charge. 

- **Authentication methods.** If your client uses an identity provider (IdP) like Okta that supports the SAML2.0 protocol, consider [enabling SAML Single-sign on](/accounts/overview/settings/#single-sign-on-authentication-sso). By using the organization's IdP for authentication to Mapbox from the beginning, you will not need to worry about transferring ownership of the account over to the client in the future. Additionally, [user roles](https://docs.mapbox.com/accounts/overview/settings/#configuring-user-roles-in-your-identity-provider) with specific permissions for each role can be used with SSO. Further, passwords will not need to be shared for the account.

- **Notification management.** Accounts only support a single [registered email address](https://docs.mapbox.com/accounts/overview/settings/#change-your-email-address). Consider setting forwarding rules in your email client so that stakeholders in your company receive important emails. For example, if you'd like your billing department to receive billing emails like payment receipts, set any email from `billing@mapbox.com` to automatically forward to them.

- **Access token management.** If you are managing multiple clients' projects from one Mapbox account, use a unique named token for each project. Be cautious about using your own access tokens while developing for an organization, since their maps & billing will be tied to your account. When the time comes to hand off the account, [rotate tokens](https://docs.mapbox.com/accounts/overview/tokens/#creating-and-managing-access-tokens) so that your client's maps are tied to their own access tokens. Take extra care not to delete an access token that is in production for a project you collaborated on before.

- **Ownership management.** When it's time to transition the client into the account owner role, you might need to share the account credentials with the organization so the owners can [change the email](https://docs.mapbox.com/accounts/overview/settings/#profile) and [change the password](https://docs.mapbox.com/accounts/overview/settings/#password) to assume full ownership of the account. Encourage the organization to use an email address [multiple people have access to](#developers-designers-and-consultants) and to save their new password in a shared password manager, like [1Password](https://1password.com/). [Contact support](https://support.mapbox.com/hc/en-us/requests/new?ticket_form_id=360000279191) with questions about transferring ownership of an account or [regaining access to an account](https://docs.mapbox.com/help/troubleshooting/account-lockout).

## Inheriting an account from a developer, designer, or consultant

If someone else has created the Mapbox account that your application is using and is handing it off to you, we recommend the steps below for a thorough change of ownership.

- **Account credentials.** When changing ownership of the account to yourself or current organization, encourage the owner to [change the registered email address](https://docs.mapbox.com/accounts/overview/settings/#change-your-email-address) to a shared email like `mapbox@yourcompany.com`. This will allow stakeholders to log in to the account to [change the password](https://docs.mapbox.com/accounts/overview/settings/#change-your-password) as well as receive invoices, notifications, and password reset emails.

- **Authentication methods.** Consider [using SAML Single-sign on](https://docs.mapbox.com/accounts/overview/settings/#single-sign-on-authentication-sso) as the primary authentication method for the account if your team has access to an identity provider that supports the SAML2.0 protocol, like Okta. With SSO, your users can also be assigned [user roles](https://docs.mapbox.com/accounts/overview/settings/#configuring-user-roles-in-your-identity-provider) with specific permissions for each role. With SSO enabled, your team will not need to share a password for the account.

- **Password management.** When you receive and/or create your Mapbox account credentials, store them in a shared-secure location, like a [1Password](https://1password.com/) vault and/or [Okta](https://www.okta.com/). This will help keep your password safe and available when you or your teammates need it. Even if your account has SAML SSO enabled, there will be a password associated with the account. Save this password in a secure location with limited access.

- **Access token management.** Taking care to [rotate your access tokens](https://docs.mapbox.com/accounts/overview/tokens/#creating-and-managing-access-tokens) upon receiving the account allows you to limit the risk of a consulting developer or former teammate deleting an access token that is used by a production application. Make sure that the location services for your applications are tied to your account, using distinct access tokens for granular statistics & billing.

## Best practices for collaborating on projects

- **Authentication methods.** If your organization uses an identity provider (IdP) like Okta that supports the SAML2.0 protocol, consider [enabling SAML Single-sign on](https://docs.mapbox.com/accounts/overview/settings/#single-sign-on-authentication-sso). By using the organization's IdP for authentication to Mapbox from the beginning, you will not need to worry about sharing a password to an account or needing to change the password when a teammate departs. You'll also be able to assign [user roles](https://docs.mapbox.com/accounts/overview/settings/#configuring-user-roles-in-your-identity-provider) with specific permissions with SSO. Further, your organization's IT department can help troubleshoot if you are locked out of the account or need to provision access to a new teammate or collaborator. 

- **Access token management.** Tokens can be created and deleted with the [Access Tokens page](https://account.mapbox.com/access-tokens/) or the [Tokens API](https://docs.mapbox.com/api/accounts/#tokens) on the command line. With [scoped tokens](https://docs.mapbox.com/accounts/overview/tokens/#scopes), developers can read, write, and upload data without needing to log into your Mapbox account. If your organization already has an existing Mapbox account and/or you hire developers (independently, or through our [Developer Network](https://www.mapbox.com/developer-network/developers/)), consider administering the developers access tokens with [limited scopes](/help/troubleshooting/how-to-use-mapbox-securely/#access-tokens). Access tokens cannot be transferred between accounts. Access token deletions are final. 

- **Resource management.** [Tilesets](https://docs.mapbox.com/studio-manual/reference/tilesets/) cannot be exported from one account and transferred to another. Styles can be [downloaded from one account and re-uploaded](https://docs.mapbox.com/help/troubleshooting/transfer-styles-between-accounts/) to another account. If the style uses any custom fonts or icons, they will need to be added back manually. There is no programmatic way to move resources from one account to another - [contact us](https://support.mapbox.com/hc/en-us/requests/new?ticket_form_id=360000279191) with questions. 

- **Sharing resources for review.** Throughout the project you can share your work with your [Map Style's Share URL](https://docs.mapbox.com/studio-manual/overview/publish-your-style/#share--use) or by setting up a small example application with [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/example/simple-map/). If collaboration on editing a style is required, but you don't share access to the same Mapbox account, follow the [guide to transferring styles between accounts](/help/troubleshooting/transfer-styles-between-accounts/) and send the resources to your collaborator so they can upload to their own account. 

Still have questions? Explore our [Account documentation](https://docs.mapbox.com/accounts/overview/) or [send us a note](https://support.mapbox.com/hc/en-us/requests/new?ticket_form_id=360000279191). We're here to help.
