---
title: Working with firewalls
description: General troubleshooting tips and some configuration guidance for working with Mapbox behind a firewall.
topics:
- web apps
contentType: troubleshooting
---

If you're interacting with the Mapbox REST APIs behind a firewall and having trouble getting a response, you can try adding the domain `api.mapbox.com` to an allow list (sometimes called a _whitelist_). Mapbox uses distributed and dynamically-allocated servers rather than a fixed set of IP addresses. Normally you can add `mapbox.com` to an allow list, but in some cases you may also need to add specific domains including:

- `mapbox.com`
- `www.mapbox.com`
- `api.mapbox.com`
- `api.tiles.mapbox.com`
- `a.tiles.mapbox.com`
- `b.tiles.mapbox.com`
- `c.tiles.mapbox.com`
- `d.tiles.mapbox.com`
