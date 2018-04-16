import { Oauth2Error, oauthParams } from '../oauth2_error'

export class TemporarilyUnavailable extends Oauth2Error {
  constructor (params: oauthParams = {}) {
    super({
      error: 'invalid_client',
      error_description: params.description,
      error_uri: params.uri
    })
  }
}
