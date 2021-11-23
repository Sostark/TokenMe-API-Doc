# TokenMe API Data Structures

All TTL data is stored in a central database, and this data can be accessed in several formats by calling several API-endpoints.

The actual data in the report, anchor, token, and timestamp records is the same, only the presentation of 'view' is different.

- report => the 'list of tokens in rage' from a certain anchor at a certain time
- anchor => ..

## API Endpoints

- <span class="mono">https://cloud.sostark.nl/wtc-nd-test/.../api/reports</span>
- <span class="mono">https://cloud.sostark.nl/wtc-nd-test/.../api/anchors</span>
- <span class="mono">https://cloud.sostark.nl/wtc-nd-test/.../api/tokens</span>
- <span class="mono">https://cloud.sostark.nl/wtc-nd-test/.../api/timestamps</span>
- <span class="mono">https://cloud.sostark.nl/wtc-nd-test/.../api/areas</span>

## Report

```js
// pseudo-JSON:
{
  "reports": [
    { 
      "(per-anchor)",
      "(current time)",
      "(list-of-tokens-in-range)"
    },
    ...
  ],
}
```

## Anchor

```js
// pseudo-JSON:
{
  "anchors": [
    { 
      "(anchor)",
      "(area)",
      "latest_fixes": [
        { 
          "(time)", 
          "(list-of-tokens)",
        },
        ...
      ]
    },
    ...
  ],
}
```

## Token

```js
// pseudo-JSON:
{
  "tokens": [
    { 
      "(token)",
      "latest_fix": {
        "(time)",
        "(location)", 
      },
    },
    ...
  ],
}
```

```js
{
  "tokens": [
    {
      "t_id": "A001",
      "latest_fix": {
        "time_epoch": 160121314,
        "location": {
          "anchors": [
            "B001"
          ]
        }
      }
    },
    {
      "t_id": "A002",
      "latest_fix": {
        "time_epoch": 160121314,
        "location": {
          "anchors": [
            "B001",
            "B002",
            "B003"
          ]
        }
      }
    },
    {
      "t_id": "A003",
      "latest_fix": {
        "time_epoch": 160121314,
        "location": {
          "x": 50.5,
          "y": 20,
          "z": 3.5
        }
      }
    },
    {
      "t_id": "A004",
      "latest_fix": {
        "time_epoch": 160121314,
        "location": {
          "lat": 52.0156,
          "long": 13.0556,
          "alt": 3.5
        }
      }
    }
  ],
  "meta": {
    "endpoint_name": "wtc-nd-test",
    "api_version": "v2.0.0",
    "query_method_path": "GET /api/tokens"
  }
}
```

## Timestamp

```js
// pseudo-JSON:
{
  "timestamps": [
    { 
      "(time)",
      "latest_fixes": [
        { 
          "(token)",
          "(location)"
        },
        ...
      ],
    },
    ...
  ],
}
```

## Area

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
    ...
  ],
}
```

<img src="img/Sostark-TokenMe-API-design-v1.0.svg" /> <br>
View image in seperate window: <a href="./img/Sostark-TokenMe-API-design-v1.0.svg" target="_blank">Sostark-TokenMe-API-design-v1.0.svg</a>

