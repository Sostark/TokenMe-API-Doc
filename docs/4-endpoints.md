# Endpoints

All TTL and sensor information is exposed by just 2 API Endpoints: `Anchor` and `Token`.

Public information on Endpoints: https://en.wikipedia.org/wiki/Web_API#Endpoints

## Anchor

API-endpoint = <span class="mono">/api/anchors</span>

Live demo: https://demo.tcs.sostark.nl/api/anchors

## Token

API-endpoint = <span class="mono">/api/tokens</span>

Live demo: https://demo.tcs.sostark.nl/api/tokens

## Query Parameters

Both Anchor and Token Endpoints respond to the same (set of) query parameters.

<table>
<tr>
<th>Parameter</th><th>Effect-on</th><th>Example</th><th>Description</th><th>Default</th>
</tr>
<tr>
<td>`tpid`</td><td>cTTL</td><td>`?tpid=A-0010` or <br/>`?tpid=T-52`</td><td>lookup only one cTTL object</td><td>&nbsp;</td>
</tr>
<tr>
<td>`select`</td><td>cTTL</td><td>`?select=tpid,time,time_str`</td><td>return only selected keys in each cTTL object</td><td>&nbsp;</td>
</tr>
<tr>
<td>`show_recent`</td><td>cTTL</td><td>`?show_recent`</td><td>lookup only cTTL objects that are recently updated by live-data (2 x max_age)</td><td>&nbsp;</td>
</tr>
<tr>
<td>`cttl_limit`</td><td>cTTL</td><td>`?cttl_limit=2000`</td><td>return a maximum limit of cTTL objects</td><td>100</td>
</tr>
<tr>
<td>`from`</td><td>iTTL</td><td>`?from=2022-12-23T13:46:36` or <br/> `?from=1671799596`</td><td>return a list of iTTL objects from this time</td><td>'now' minus 'duration'</td>
</tr>
<tr>
<td>`until`</td><td>iTTL</td><td>`?until=2022-12-23T13:49:27` or <br/> `?until=1671799767`</td><td>return a list of iTTL objects until this time</td><td>'from' plus 'duration'</td>
</tr>
<tr>
<td>`duration`</td><td>iTTL</td><td>`?duration=10s` or <br/>`?duration=2m` or <br/>`?duration=4h` or <br/>`?duration=1D` or <br/>`?duration=1W` or <br/>`?duration=3M` or <br/>`?duration=1Y` or <br/></td><td>return a list of iTTL objects within this duration of time</td><td>(no default) note that if used without 'from' or 'until', it means from 'now' back to 'duration' history</td>
</tr>
<tr>
<td>`ittl_limit`</td><td>iTTL</td><td>`?ittl_limit=12000`</td><td>return a maximum limit of iTTL objects</td><td>1000</td>
</tr>
</table>
