import { Oauth2Error, oauthParams } from '../oauth2_error';
export declare class InvalidClient extends Oauth2Error {
    constructor(params?: oauthParams);
}
