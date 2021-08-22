import { Oauth2Error, oauthParams } from '../oauth2_error'

export class InsufficientScope extends Oauth2Error {
    constructor (params: oauthParams = {}) {
        super({
            error: 'insufficient_scope',
            error_description: params.description,
            error_uri: params.uri,
            statusCode: 403
        })
    }
}
