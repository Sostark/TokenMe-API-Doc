# Area Specification

The before mentioned locations of Tokens at a certain time ('a fix'), need to be defined in some coordinate system, and with some metrics:

- In some scenarios it is preferred to use 'local metrics', so a 3D-coordinate of 'x', 'y', and 'z' in meters (or centimers) is practical, which is a '*Cartesian coordinate system*',
- But in other scenarios one could prefer to use 'global metrics', so then we need the '*Geographic coordinate system*' using 'latitude' and 'longitude' (in 'Decimal Degrees'), and 'altitude' in meters (or centimeters).

## Automatic Area and Location calculations

For these calculation we have defined a separate endpoint:

<span class="mono">https://cloud.sostark.nl/wtc-nd-test/api/areas</span>

Which is using this internal data structure:

```js
// pseudo-JSON:
{
  "areas": [
    { 
      "(area--such-as-floor)",
      "(parent-area--such-as-building)",
      "(origin--in-Cartesian-coordinates-x-y-z-or-Geographic-coordinates-lat-long-alt)",
      "(translate--vector-from-parent-origin-to-this-area-origin)", 
      "(rotate--optional-if-this-area-not-level-to-parent-area)",
      "(anchor-location-within-this-area-coordinate-system)",
      "(path-of-area--rectangle-or-specific-shape)",
    },
    ...(more alike)
  ],
}
```

Note that the definition of Areas is **hierarchical**, meaning that a Site-area can contain several Building-areas, and each Building can contain several Floor-areas, and each Floor several Anchor-areas.

This hierarchy is depicted in this diagram:

<img src="img/Sostark-TokenMe-API-design-v1.0.svg" /> <br>
View image in separate window: <a href="./img/Sostark-TokenMe-API-design-v1.0.svg" target="_blank">Sostark-TokenMe-API-design-v1.0.svg</a>

