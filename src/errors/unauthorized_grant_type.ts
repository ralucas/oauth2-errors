import { Oauth2Error, oauthParams } from '../oauth2_error'

export class UnauthorizedGrantType extends Oauth2Error {
  constructor (params: oauthParams = {}) {
    super({
      error: 'unauthorized_grant_type',
      error_description: params.description,
      error_uri: params.uri
    })
  }
}
