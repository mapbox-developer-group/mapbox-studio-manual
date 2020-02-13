---
title: Address geocoding format guide
description: Follow these best practices when formatting addresses for geocoding.
topics:
  - geocoding
prependJs:
  - "import UserAccessToken from '../../components/user-access-token';"
contentType: troubleshooting
---

[Forward geocoding](https://docs.mapbox.com/api/search/#forward-geocoding) converts location text into geographic coordinates, turning `2 Lincoln Memorial Circle NW` into `-77.050,38.889`. Follow these address formatting guidelines to make sure that your Mapbox Geocoding API requests retrieve the right results:

## Use one building number, not a number range
Use a single building number rather than a range of numbers when constructing a query.

#### Examples
- ✅ `123 Main St`
- ❌ `123-127 Main St`

## Format address components consistently
For addresses in the United States, pass in the address components in the format `{house number} {street} {city} {state} {zip}`.

For geocoding in countries other than the United States, you have a few options. You can either submit the components in the same order as you would use for an address in the United States, or you can follow local address formatting standards for those countries.

If you need to pick one standard order to use for multiple countries, pass the address components to the geocoder in order from most granular to least granular: `{house number} {street} {postcode} {city} {state}`.

#### Examples
- ✅ `123 Main St Boston MA 02111` (US only)
- ✅ `123 Main St Swindon SN2 2DQ` (UK only)
- ✅ `123 Main St 02111 Boston MA` (multiple countries)

## Use the country parameter
If you need to limit results to one country, use the `country` parameter in the API request instead of including the country in the search text. The `country` parameter will limit results to only locations within the specified country.

#### Examples

```
✅  Results will only include locations within the United States
https://api.mapbox.com/geocoding/v5/mapbox.places/123%20Main%20St%20Boston%20MA.json?country=US&access_token={{ <UserAccessToken /> }}

❌ Results could potentially include locations outside of the US
https://api.mapbox.com/geocoding/v5/mapbox.places/123%20Main%20St%20Boston%20MA%20United%20States.json?&access_token={{ <UserAccessToken /> }}`
```

## Zip code formatting
For addresses in the United States, you can use either the five- or the nine-digit zip code. Both zip code formats will return the same coordinate results when used in a forward geocoding query.

 #### Examples
- ✅ `02919`
- ✅ `02919-3232`

## Secondary address information

Secondary address information like apartment or suite number does not influence the coordinate results returned by a forward geocoding query. A query that uses this secondary address information, as well as any associated special characters like commas (`,`) and pound symbols (`#`), will return the same coordinates as a query with this information stripped out.

 #### Examples
- ✅ `123 Main St`
- ✅ `123 Main St #456`
- ✅ `123 Main St, Suite 7`
- ✅ `123 Main St, Building A`
