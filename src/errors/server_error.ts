import { Oauth2Error, oauthParams } from '../oauth2_error'

export class ServerError extends Oauth2Error {
  constructor (params: oauthParams = {}) {
    super({
      error: 'server_error',
      error_description: params.description,
      error_uri: params.uri,
      statusCode: 500
    })
  }
}
