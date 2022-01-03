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
    },
    {
      "anchor_id": "92",
      "cloud_time": 1618599937,
      "presence_tlist": [
        "14"
      ],
      "distance_tlist": [],
    },
    {
      "anchor_id": "93",
      "cloud_time": 1618599937,
      "presence_tlist": [],
      "distance_tlist": [],
    }
  ],
  "meta": {
    "server_name": "wtc-nd-test",
    "environment": "test",
    "api_version": "2.0.0",
    "query_method_path": "GET /api/reports?last=3",
    "endpoint": "/api/reports",
    "server_time": 1641187002,
    "query_count": 16,
    "status_code": 200
  }
}
```

## Anchor

API-endpoint = <span class="mono">/api/anchors</span>

```js
{
  "anchors": [
    {
      "anchor_id": "91",
      "time": 1618599942,
      "presence_tlist": [],
      "map_id": "Map-A91",
      "anchor_loc": {
        "type": "x-y",
        "x": 1,
        "y": 7.5,
        "presence_alist": [],
        "distance_alist": []
      },
      "distance_tlist": [],
    },
    {
      "anchor_id": "92",
      "time": 1618599942,
      "presence_tlist": [
        "14"
      ],
      "map_id": "Map-A92",
      "anchor_loc": {
        "type": "x-y",
        "x": 1,
        "y": 7.5,
        "presence_alist": [],
        "distance_alist": []
      },
      "distance_tlist": [],
    },
    {
      "anchor_id": "93",
      "time": 1618599942,
      "presence_tlist": [],
      "map_id": "Map-A93",
      "anchor_loc": {
        "type": "x-y",
        "x": 1,
        "y": 7.5,
        "presence_alist": [],
        "distance_alist": []
      },
      "distance_tlist": [],
    }
  ],
  "meta": {
    "server_name": "wtc-nd-test",
    "environment": "test",
    "api_version": "2.0.0",
    "query_method_path": "GET /api/anchors?last=3",
    "endpoint": "/api/anchors",
    "server_time": 1641232316,
    "query_count": 1,
    "status_code": 200
  }
}
```

## Token

API-endpoint = <span class="mono">/api/tokens</span>

```js
{
  "tokens": [
    {
      "token_id": "11",
      "time": 1618599941,
      "location": {
        "type": "presence_alist",
        "presence_alist": [
          {
            "anchor_id": "91",
            "time": 1618599939,
          },
          {
            "anchor_id": "92",
            "time": 1618599940,
          },
          {
            "anchor_id": "93",
            "time": 1618599941,
          }
        ],
        "distance_alist": [],
      },
    },
    {
      "token_id": "12",
      "time": 1618599941,
      "location": {
        "type": "presence_alist",
        "presence_alist": [
          {
            "anchor_id": "94",
            "time": 1618599939,
          },
          {
            "anchor_id": "95",
            "time": 1618599940,
          },
          {
            "anchor_id": "96",
            "time": 1618599941,
          }
        ],
        "distance_alist": [],
      },
    },
    {
      "token_id": "13",
      "time": 1618599942,
      "location": {
        "type": "presence_alist",
        "presence_alist": [
          {
            "anchor_id": "96",
            "time": 1618599942,
          },
          {
            "anchor_id": "95",
            "time": 1618599940,
          },
          {
            "anchor_id": "94",
            "time": 1618599939,
          }
        ],
        "distance_alist": [],
      },
    }
  ],
  "meta": {
    "server_name": "wtc-nd-test",
    "environment": "test",
    "api_version": "2.0.0",
    "query_method_path": "GET /api/tokens?last=3",
    "endpoint": "/api/tokens",
    "server_time": 1641187186,
    "query_count": 1,
    "status_code": 200
  }
}
```

## Timepoint

API-endpoint = <span class="mono">/api/timepoints</span>

```js
{
  "timepoints": [
    {
      "time": 1618599937,
      "fixes": [
        {
          "token_id": "11",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "91",
                "time": 1618599937,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "16",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "91",
                "time": 1618599937,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "14",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "92",
                "time": 1618599937,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "12",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "94",
                "time": 1618599937,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "15",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "94",
                "time": 1618599937,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "13",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "96",
                "time": 1618599937,
              }
            ],
            "distance_alist": [],
          },
        }
      ],
    },
    {
      "time": 1618599938,
      "fixes": [
        {
          "token_id": "11",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "91",
                "time": 1618599938,
              },
              {
                "anchor_id": "92",
                "time": 1618599938,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "16",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "91",
                "time": 1618599937,
              },
              {
                "anchor_id": "94",
                "time": 1618599938,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "14",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "92",
                "time": 1618599938,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "12",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "94",
                "time": 1618599938,
              },
              {
                "anchor_id": "95",
                "time": 1618599938,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "15",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "94",
                "time": 1618599938,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "13",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "96",
                "time": 1618599937,
              },
              {
                "anchor_id": "95",
                "time": 1618599938,
              }
            ],
            "distance_alist": [],
          },
        }
      ],
    },
    {
      "time": 1618599939,
      "fixes": [
        {
          "token_id": "11",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "91",
                "time": 1618599939,
              },
              {
                "anchor_id": "92",
                "time": 1618599939,
              },
              {
                "anchor_id": "93",
                "time": 1618599939,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "16",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "91",
                "time": 1618599937,
              },
              {
                "anchor_id": "94",
                "time": 1618599938,
              },
              {
                "anchor_id": "92",
                "time": 1618599939,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "14",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "92",
                "time": 1618599938,
              },
              {
                "anchor_id": "93",
                "time": 1618599939,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "12",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "94",
                "time": 1618599939,
              },
              {
                "anchor_id": "95",
                "time": 1618599939,
              },
              {
                "anchor_id": "96",
                "time": 1618599939,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "15",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "94",
                "time": 1618599938,
              },
              {
                "anchor_id": "95",
                "time": 1618599939,
              }
            ],
            "distance_alist": [],
          },
        },
        {
          "token_id": "13",
          "location": {
            "type": "presence_alist",
            "presence_alist": [
              {
                "anchor_id": "96",
                "time": 1618599937,
              },
              {
                "anchor_id": "95",
                "time": 1618599938,
              },
              {
                "anchor_id": "94",
                "time": 1618599939,
              }
            ],
            "distance_alist": [],
          },
        }
      ],
    }
  ],
  "meta": {
    "server_name": "wtc-nd-test",
    "environment": "test",
    "api_version": "2.0.0",
    "query_method_path": "GET /api/timepoints?last=3",
    "endpoint": "/api/timepoints",
    "server_time": 1641187211,
    "query_count": 1,
    "status_code": 200
  }
}
```
