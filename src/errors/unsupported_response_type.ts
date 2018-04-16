import { Oauth2Error, oauthParams } from '../oauth2_error'

export class UnsupportedResponseType extends Oauth2Error {
  constructor (params: oauthParams = {}) {
    super({
      error: 'unsupported_response_type',
      error_description: params.description,
      error_uri: params.uri
    })
  }
}
