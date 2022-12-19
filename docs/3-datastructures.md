# TokenMe Data Structures

All TTL data is stored in a central database, and this data can be accessed in several formats, by calling several API-endpoints.

The actual data in the report, anchor, token, and timepoint records is the same, only the presentation or 'view' is different.

- **Report** <br> Each Anchor periodically sends a 'list of Tokens' that are in range of that Anchor, and optionally the measured distance from some Tokens to that Anchor. All these 'reports' are stored unmodified in the local database, and also that information is used to calculate the information of the other records (anchor, token, timepoint).
- **Anchor** <br> gets for each Anchor which Area they represent, and a list of 'latest fixes", where a [position fix](https://en.wikipedia.org/wiki/Geopositioning#Background) is jargon for a certain location at a certain time. This will only give the latest reported fix, for a history of fixes use the timepoint feed.
- **Tokens** <br> gets for each Token what was their latest fix: time and location, where location is either 'presence-based', which means that some Anchor has detected their presence somehwere within their area (within range), or location could be a distance measurement by 3 or more Anchors, and then the position of the Token is calculated ([triangulation](https://en.wikipedia.org/wiki/Triangulation)).
- **Timepoint** <br> get for each reported time (Timepoint in seconds) the list of latest fixes (Token-ID and Location). Use this data record to retrieve the history of Token-Locations.

**API Data-record Endpoints**

- <span class="mono">/api/v3/anchor</span>
- <span class="mono">/api/v3/token</span>

## Anchor

API-endpoint = <span class="mono">/api/v3/anchor</span>

https://demo.tcs.sostark.nl/api/v3/anchor

```js

```

## Token

API-endpoint = <span class="mono">/api/v3/token</span>

https://demo.tcs.sostark.nl/api/v3/token

```js

```

<!-- api_ley_tcs21 -->
<!-- NNSXS.DR2HGRTTCN7DH7RUFVWJKU5LOI2AEQX6JAROEDQ.ZGUINROLZRP6LYZN2DUWCN3A4YSKRYGXMALK3ZCO2PSPJL36U5YA -->
