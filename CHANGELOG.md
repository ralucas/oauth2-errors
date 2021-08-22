# oauth2-errors Changelog

## 2.0.0

### Changed
- **BREAKING**: Change HTTP response status codes (were previously all 400), see 
  PR https://github.com/ralucas/oauth2-errors/pull/2 discussion for details. Specifically:
  * `invalid_client` - change from 400 to 401 status code.
  * `access_denied` - changed from 400 to 403
  * `server_error` - changed from 400 to 500
  * `temporarily_unavailable` - changed from 400 to 503

### Added
- Add new errors from [(RFC6750) The OAuth 2.0 Authorization Framework: Bearer Token Usage](https://datatracker.ietf.org/doc/html/rfc6750):
  * `invalid_token` - with http status code 401.
  * `insufficient_scope` - with http status code 403.

## <= 1.0.3

See Github commit history for details.
