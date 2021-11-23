# API Access and Security

At the moment of this API version (v2.0.0), there is not yet a 'proper' authentication scheme implemented. <br>
This is acceptable for now, because the current system is still in development and testing at both TokenMe and our partner systems.

In the next version (v2.1) we will introduce an authentication system, where the API-clients needs to login to receive a JWT token. This JWT token can then be used to access the API, where in each HTML call the JWT token is included in the header.

## Mitigation

To mitigate the security risk, we have "hidden" the API using a specific 'code' in the API-endpoiunt URL. <br>
This code is obviously not added in this (public) documentation.

## API Authentication

This will be the API-endpoint that is reachable without a JWT token, and that can be used to login, and acquire a JTW session token:

<span class="mono">POST https://cloud.sostark.nl/wtc-nd-test/api/session</span>
