# Oauth2-Errors [![Build Status](https://secure.travis-ci.org/ralucas/oauth2-errors.png?branch=master)](http://travis-ci.org/ralucas/oauth2-errors)

## Introduction
Error classes and handler for Oauth 2.0 spec errors.  Was patterned after the well-known [http-errors](https://npmjs.com/http-errors) lib.

## Getting Started
Install the module with: `npm install oauth2-errors`

```js
const OauthErrors = require('oauth2-errors');
```

## Errors
Follows the [Oauth 2.0 Spec](https://tools.ietf.org/html/rfc6749) for errors, see [here](https://tools.ietf.org/html/rfc6749#section-5.2).
All errors have HTTP response status code of 400, except as noted.

- `InvalidClient` - invalid_client (HTTP 401)
- `InvalidGrant` - invalid_grant
- `InvalidRequest` - invalid_request
- `InvalidScope` - invalid_scope
- `UnauthorizedClient` - unauthorized_client
- `UnauthorizedGrantType` - unauthorized_grant_type

And Authorization Errors:

- `AccessDenied` - access_denied (HTTP 403)
- `UnsupportedResponseType` - unsupported_response_type
- `ServerError` - server_error (HTTP 500)
- `TemporarilyUnavailable` - temporarily_unavailable (HTTP 503)

Extension errors from [(RFC6750) OAuth 2.0 Bearer Token Usage](https://datatracker.ietf.org/doc/html/rfc6750)

- `InvalidToken` - invalid_token (HTTP 401)
- `InsufficientScope` - insufficient_scope (HTTP 403)

## Usage
Each error is a class, so can be instantiated by calling `new`.

```js
const invalidGrantError = new OauthErrors.InvalidGrant()
``` 

Each class can optionally take a `params` argument with 2 optional properties:
- `description` - error_description
- `uri` - error_uri

```js
const invalidRequestError = new OauthErrors.InvalidRequest({
  description: 'more description this bad request', 
  uri: 'https://mydomain.com/invalid_request'
})
```

## Methods

- `toString`
  - Creates a JSON string with the following properties:
    - `error`
    - `error_description` - [optional]
    - `error_uri` - [optional]

- `respond`
  - ExpressJS convenience response handler
  - Takes the ExpressJS `response` as the sole argument

## Examples

```js
const OauthErrors = require('oauth2-errors');
...

// Using the respond convenience fn
function authorize(req, res, next) {

  if (invalidClient()) {
    const invalidClientErr = new OauthErrors.InvalidClient()
    return invalidClientErr.respond(res)
  }
}
```

## Release History
* v1.0.0 - Initial Release - April 13, 2018
* v1.0.1 - Update compilation - April 13, 2018
* v1.0.2 - Improve tests - April 13, 2018
* v1.0.3 - Add authorization errors - April 14, 2018

## License
Copyright (c) 2018 Richard Lucas. Licensed under the MIT license.
