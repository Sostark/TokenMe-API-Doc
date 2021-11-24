# TokenMe Data Structures

All TTL data is stored in a central database, and this data can be accessed in several formats by calling several API-endpoints.

The actual data in the report, anchor, token, and timestamp records is the same, only the presentation or 'view' is different.

- **Report** <br> Each Anchor periodically sends a 'list of Tokens' that are in range of that Anchor, and optionally the measured distance from some Tokens to that Anchor. All these 'reports' are stored unmodified in the local database, and also that information is used to calculate the information of the other records (anchor, token, timestamp).
- **Anchor** <br> gets for each Anchor which Area they represent, and a list of 'latest_fixes", where a "fix" is jargon for a certain location at a certain time. This will only give the latest reported fix, for a history of fixes use the timestamp feed.
- **Tokens** <br> gets for each Token what was their latest fix: time and location, where location is either 'presence-based', which means that some Anchor has detected their presence somehwere within their area (within range), or location could be a distance measurement by 3 or more Anchors, and then the position of the Token is calculated (triangulation).
- **Timestamps** <br> get for each reported time (Timestamp in seconds) the list of latest fixes (Token-ID and Location). Use this data record or 'feed' to retrieve the history of Token-Locations.

**API Data-record Endpoints**

- <span class="mono">/api/reports</span>
- <span class="mono">/api/anchors</span>
- <span class="mono">/api/tokens</span>
- <span class="mono">/api/timestamps</span>

## Report

API-endpoint = <span class="mono">/api/reports</span>

```js
// pseudo-JSON:
{
  "reports": [
    { 
      "(anchor-id)",
      "(current-time)",
      "(list-of-tokens-in-range)"
    },
    ...(more alike)
  ],
}
```

## Anchor

API-endpoint = <span class="mono">/api/anchors</span>

```js
// pseudo-JSON:
{
  "anchors": [
    { 
      "(anchor-id)",
      "(area)",
      "latest_fixes": [
        { 
          "(time)", 
          "(list-of-tokens)"
        },
      ...(more alike)
      ]
    },
    ...(more alike)
  ],
}
```

## Token

API-endpoint = <span class="mono">/api/tokens</span>

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
    ...(more alike)
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

API-endpoint = <span class="mono">/api/timestamps</span>

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
        ...(more alike)
      ],
    },
    ...(more alike)
  ],
}
```
