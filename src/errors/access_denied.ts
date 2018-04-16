import { Oauth2Error, oauthParams } from '../oauth2_error'

export class AccessDenied extends Oauth2Error {
  constructor (params: oauthParams = {}) {
    super({
      error: 'access_denied',
      error_description: params.description,
      error_uri: params.uri
    })
  }
}
