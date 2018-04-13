import { Oauth2Error, oauthParams } from '../oauth2_error'

export class InvalidGrant extends Oauth2Error {
  constructor (params: oauthParams = {}) {
    super({
      error: 'invalid_grant',
      error_description: params.description,
      error_uri: params.uri
    })
  }
}
