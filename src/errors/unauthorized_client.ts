import { Oauth2Error, oauthParams } from '../oauth2_error'

export class UnauthorizedClient extends Oauth2Error {
  constructor (params: oauthParams = {}) {
    super({
      error: 'unauthorized_client',
      error_description: params.description,
      error_uri: params.uri
    })
  }
}
