import { Oauth2Error, oauthParams } from '../oauth2_error';
export declare class UnsupportedResponseType extends Oauth2Error {
    constructor(params?: oauthParams);
}
