# TokenMe Data Structures

All TTL data is stored in a central database, and this data can be accessed in several formats, by calling several API-endpoints.

The actual data in the report, anchor, token, and timepoint records is the same, only the presentation or 'view' is different.

- **Report** <br> Each Anchor periodically sends a 'list of Tokens' that are in range of that Anchor, and optionally the measured distance from some Tokens to that Anchor. All these 'reports' are stored unmodified in the local database, and also that information is used to calculate the information of the other records (anchor, token, timepoint).
- **Anchor** <br> gets for each Anchor which Area they represent, and a list of 'latest fixes", where a [position fix](https://en.wikipedia.org/wiki/Geopositioning#Background) is jargon for a certain location at a certain time. This will only give the latest reported fix, for a history of fixes use the timepoint feed.
- **Tokens** <br> gets for each Token what was their latest fix: time and location, where location is either 'presence-based', which means that some Anchor has detected their presence somehwere within their area (within range), or location could be a distance measurement by 3 or more Anchors, and then the position of the Token is calculated ([triangulation](https://en.wikipedia.org/wiki/Triangulation)).
- **Timepoint** <br> get for each reported time (Timepoint in seconds) the list of latest fixes (Token-ID and Location). Use this data record to retrieve the history of Token-Locations.

**API Data-record Endpoints**

- <span class="mono">/api/reports</span>
- <span class="mono">/api/anchors</span>
- <span class="mono">/api/tokens</span>
- <span class="mono">/api/timepoints</span>

## Report

API-endpoint = <span class="mono">/api/reports</span>

```js
{
  "reports": [
    {
      "anchor_id": "91",
      "cloud_time": 1618599937,
      "presence_tlist": [
        "11",
        "16"
      ],
      "distance_tlist": [],
      "_raw_string": "0001:91:6079e001:11,00,00,00:16,00,00,00:00,00,00,00:00,00,00,00:00,00,00,00",
      "id": "61d25d02432bc048da1465b5"
    },
    {
      "anchor_id": "92",
      "cloud_time": 1618599937,
      "presence_tlist": [
        "14"
      ],
      "distance_tlist": [],
      "_raw_string": "0002:92:6079e001:14,00,00,00:00,00,00,00:00,00,00,00:00,00,00,00:00,00,00,00",
      "id": "61d25d02432bc048da1465d0"
    },
    {
      "anchor_id": "93",
      "cloud_time": 1618599937,
      "presence_tlist": [],
      "distance_tlist": [],
      "_raw_string": "0003:93:6079e001:00,00,00,00:00,00,00,00:00,00,00,00:00,00,00,00:00,00,00,00",
      "id": "61d25d02432bc048da1465e7"
    }
  ],
  "meta": {
    "server_name": "wtc-nd-test",
    "environment": "test",
    "api_version": "2.0.0",
    "query_method_path": "GET /api/reports?last=3",
    "endpoint": "/api/reports",
    "server_time": 1641186673,
    "query_count": 14,
    "status_code": 200
  }
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

## Timepoint

API-endpoint = <span class="mono">/api/timepoints</span>

```js
// pseudo-JSON:
{
  "timepoints": [
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
