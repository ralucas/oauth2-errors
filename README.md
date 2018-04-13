# Oauth2-Errors [![Build Status](https://secure.travis-ci.org/ralucas/oauth2-errors.png?branch=master)](http://travis-ci.org/ralucas/oauth2-errors)

## Introduction
Error classes and handler for Oauth 2.0 spec errors.  Was patterned after the well-known [http-errors](https://npmjs.com/http-errors) lib.

## Getting Started
Install the module with: `npm install oauth2-errors`

```js
const OauthErrors = require('oauth2-errors');
```

## Errors
Follows the [Oauth 2.0 Spec](https://tools.ietf.org/html/rfc6749) for errors, see [here](https://tools.ietf.org/html/rfc6749#section-5.2)

- `InvalidClient` - invalid_client
- `InvalidGrant` - invalid_grant
- `InvalidRequest` - invalid_request
- `InvalidScope` - invalid_scope
- `UnauthorizedClient` - unauthorized_client
- `UnauthorizedGrantType` - unauthorized_grant_type

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

const invalidGrant = new OauthErrors.InvalidGrant()

// Using the respond convenience fn
function authorize(req, res, next) {

  if (invalidClient()) {
    const invalidClientErr = new OauthErrors.InvalidClient()
    invalidClientErr.respond(res)
  }
}
```

## Release History
* v1.0.0 - Initial Release - April 13, 2018

## License
Copyright (c) 2018 Richard Lucas. Licensed under the MIT license.
