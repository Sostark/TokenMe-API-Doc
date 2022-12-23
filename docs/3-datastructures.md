# TokenMe Data Structures

As discussed before, the TokenMe TCS server provides all TTL data in 2 views: `Anchor` and `Token`. For this reason, we provide 2 different API Endpoints, and 2 different cTTL and iTTL datastructures.

## TPID

Each Anchor and each Token have a unique identifier, that we call Type-Prefix-ID or `TPID`.

- Anchor TPID starts with the letter `A`, so hexadecimal "serial" number `1234` becomes: `A-1234`
- Token TPID starts with the letter `T`, so hexadecimal "serial" number `78` becomes: `T-78`

Note that the next version of the API, will also feature Groups:

- Anchor Group TPID starts with `AG`, e.g. `AG-5020` could have members: `A-0001`, `A-0002`, `A-0003`
- Token Group TPID starts with `TG`, e.g. `TG-2133` could have members: `T-72`, `T-12`, `T-63`, `T-81`

## About: Time

All time in the TCS system is stored and presented in `Unix Time` (https://en.wikipedia.org/wiki/Unix_time), which is the number of seconds that have elapsed since 00:00:00 UTC on 1 January 1970. This is sometimes called `Epoch seconds`.

In practise, in the coming years, this is a 10-digit decimal number (fun-fact: unix:1.000.000.000 = 2001-09-09T03:46:40, unix:9.999.999.999 = 2286-11-20T18:46:39).

Note that Unix Time also means `UTC` (Coordinated Universal Time, https://en.wikipedia.org/wiki/Coordinated_Universal_Time), so there are no Time-Zone adjustments in Unix-Time.

As a convinience, the cTTL datastructures provide an extra field `time_str`, which is the same Unix-Time but now converted to a time-string in `Local-Time` format: `YYYY-MM-DD[T]hh:mm:ss`

## Anchor Datastructures

### Anchor API response

Depending on the query (e.g. `?tpid=A-0010` or `?show_recent`) this Endpoint will provide one or more `Anchor_cTTL` datastructures. Note that the key of the Anchor-list is always `anchors`, regardless of the list being empty, or the list contains one item.

```js
{
  "anchors": [
    <Anchor_cTTL>
    <Anchor_cTTL>
    <Anchor_cTTL>
  ],
  "meta": {
    "server_name": "tcs90-api-server",
    "environment": "production",
    "api_version": "3.1.0",
    "db_connected": true,
    "query_method_path": "GET /api/anchors?tpid=A-0010&duration=1m",
    "endpoint": "/api/anchors",
    "server_time": 1671797325,
    "query_count": 26561,
    "query_params": {
      "tpid": "A-0010",
      "duration": "1m"
    },
    "query_calc": {
      "duration_secs": 60
    },
    "status_code": 200
  }
}
```

### Anchor cTTL

The `Anchor_cTTL` data-structure also provides a list of `Anchor_iTTL` objects under the `time_objects` key. When no iTTL-query is used (from/until/duration), the iTTL object is returned with the same time as the cTTL object (so the latest object). When some iTTL-query is used, this list can be more that 1 item.

Note that the TTL information is under the `tokens` key, and each TTL-item has a unique `time`, which is of course the consolidation nature of cTTL.

```js
<Anchor_cTTL> =
{
  "id": "63a2b15a1f99b487169f1f04",
  "tpid": "A-0010",
  "display_name": "A-0010 (autogen)",
  "member_of": [],
  "time": 1671797317,
  "time_str": "2022-12-23 13:08:37",
  "repstring": "76050010884e5250",
  "repstring_punc": "76:05:0010:88::4e5250.",
  "rep_obj": { ... },
  "tokens": {
    "T-88": {
      "time": 1671797317
    },
    "T-87": {
      "time": 1671797202
    },
    "T-52": {
      "time": 1671797317
    },
    "T-89": {
      "time": 1671794296
    }
  },
  "sensors": {
    "transport": { ... },
      "time": 1671797317
    },
    "lw": {
      "value": { ... },
      "time": 1671797317
    }
  "time_objects": [
    <Anchor_iTTL>
    <Anchor_iTTL>
    <Anchor_iTTL>
  ]
}
```

### Anchor iTTL

Note that the TTL is provided under the `ad_tokens_j` key, and no `time` is provided, which is of course the nature of iTTL.

```js
<Anchor_iTTL> =
{
  "ad_tpid_s": "A-0010",
  "ad_time_t": 1671797317,
  "ad_repstring_s": "76050010884e5250",
  "ad_tokens_j": {
    "tokens": [
      "T-88",
      "T-52"
    ]
  },
  "ad_aux_j": {
    "lw": {
      "topic": "v3/office@token/devices/anchorv2-a010/up",
      "f_port": 8,
      "dev_eui": "2cf7f1203230f891",
      "dev_addr": "26089511",
      "gateways": [
        {
          "eui": "A84041FFFF203D74",
          "snr": 13.2,
          "rssi": -63,
          "gateway_id": "dragino-203d74"
        },
        {
          "snr": 2.8,
          "rssi": -97,
          "gateway_id": "packetbroker"
        }
      ],
      "bandwidth": 125000,
      "device_id": "anchorv2-a010",
      "frequency": "868300000",
      "time_prev": 1671797308,
      "f_cnt_prev": 34762,
      "framecount": 34763,
      "coding_rate": "",
      "received_at": "2022-12-23T12:08:37.401790852Z",
      "message_size": 3404,
      "application_id": "office",
      "spreading_factor": 12
    },
    "transport": {
      "uplink_prov": "TTN_things",
      "uplink_tech": "lorawan"
    }
  },
  "ad_cdf_j": {}
}
```

## Token Datastructures

### Token API response

Depending on the query (e.g. `?tpid=T-52` or `?show_recent`) this Endpoint will provide one or more `Token_cTTL` datastructures. Note that the key of the Token-list is always `tokens`, regardless of the list being empty, or the list contains one item.

```js
{
  "tokens": [
    <Token_cTTL>
    <Token_cTTL>
    <Token_cTTL>
  ],
  "meta": {
    "server_name": "tcs90-api-server",
    "environment": "production",
    "api_version": "3.1.0",
    "db_connected": true,
    "query_method_path": "GET /api/tokens?tpid=T-52&duration=1m",
    "endpoint": "/api/tokens",
    "server_time": 1671797887,
    "query_count": 13069,
    "query_params": {
      "tpid": "T-52",
      "duration": "1m"
    },
    "query_calc": {
      "duration_secs": 60
    },
    "status_code": 200
  }
}
```

### Token cTTL

The `Token_cTTL` data-structure also provides a list of `Token_iTTL` objects under the `time_objects` key. When no iTTL-query is used (from/until/duration), the iTTL object is returned with the same time as the cTTL object (so the latest object). When some iTTL-query is used, this list can be more that 1 item.

Note that the TTL information is under the `anchors` key, and each TTL-item has a unique `time`, which is of course the consolidation nature of cTTL.

```js
<Token_cTTL> =
{
  "id": "63a2b3f81f99b487169f323c",
  "tpid": "T-52",
  "display_name": "T-52 (autogen)",
  "member_of": [],
  "time": 1671797877,
  "time_str": "2022-12-23 13:17:57",
  "anchors": {
    "A-0012": {
      "time": 1671797877
    }
  },
  "sensors": {
    "pts": {
      "value": "10111111",
      "time": 1671797877
    }
  },
  "time_objects": [
    <Token_iTTL>
    <Token_iTTL>
    <Token_iTTL>
  ]
}
```

### Token iTTL

Note that the TTL is provided under the `td_anchors_j` key, and no `time` is provided, which is of course the nature of iTTL.

```js
<Token_iTTL> =
{
  "td_tpid_s": "T-52",
  "td_time_t": 1671797877,
  "td_version_n": 2,
  "td_anchors_j": {
    "anchor": "A-0012"
  },
  "td_aux_j": {
    "pts": "00000011"
  },
  "td_cdf_j": {}
}
```

## Postgres Database schemas

We show the internal PostgreSQL database schemas, because the iTTL data-structures return the fields of these:

```sql
CREATE TABLE tbl_anchordata (
  ad_tpid_s varchar(8) NOT NULL default '',
  ad_time_t integer NOT NULL default 0,
  ad_repstring_s varchar(256) NOT NULL default '',
  ad_tokens_j jsonb NOT NULL default '{}',
  ad_aux_j jsonb NOT NULL default '{}',
  ad_cdf_j jsonb NOT NULL default '{}',
  PRIMARY KEY (ad_tpid_s, ad_time_t)
);
```

```sql
CREATE TABLE tbl_tokendata (
  td_tpid_s varchar(8) NOT NULL default '',
  td_time_t integer NOT NULL default 0,
  td_version_n integer NOT NULL default 1,
  td_anchors_j jsonb NOT NULL default '{}',
  td_aux_j jsonb NOT NULL default '{}',
  td_cdf_j jsonb NOT NULL default '{}',
  PRIMARY KEY (td_tpid_s, td_time_t, td_version_n)
);
```
