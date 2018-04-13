import { Oauth2Error } from '../oauth2_error';
export declare class UnauthorizedClient extends Oauth2Error {
    constructor(description?: string, uri?: string);
}
