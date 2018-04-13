import { Oauth2Error, oauthParams } from '../oauth2_error'

export class InvalidRequest extends Oauth2Error {
  constructor (params: oauthParams = {}) {
    super({
      error: 'invalid_request',
      error_description: params.description,
      error_uri: params.uri
    })
  }
}
