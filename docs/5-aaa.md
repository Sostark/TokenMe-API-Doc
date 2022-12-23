# API Access and Security

At the moment of this API version (v3.1.0), there is not yet a 'proper' authentication scheme implemented. <br>
This is acceptable for now, because the current system is still in development and testing at both TokenMe and our partner systems.

In the next version (v3.2) we will introduce an authentication system, where the API-clients needs to login to receive a [JWT token](https://en.wikipedia.org/wiki/JSON_Web_Token). This JWT token can then be used to access the API, where in each HTML call the JWT token is included in the header.
