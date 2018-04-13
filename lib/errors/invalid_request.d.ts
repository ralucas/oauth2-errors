import { Oauth2Error } from '../oauth2_error';
export declare class InvalidRequest extends Oauth2Error {
    constructor(description?: string, uri?: string);
}
