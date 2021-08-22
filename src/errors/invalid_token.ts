import { Oauth2Error, oauthParams } from '../oauth2_error'

export class InvalidToken extends Oauth2Error {
    constructor (params: oauthParams = {}) {
        super({
            error: 'invalid_token',
            error_description: params.description,
            error_uri: params.uri,
            statusCode: 401
        })
    }
}
