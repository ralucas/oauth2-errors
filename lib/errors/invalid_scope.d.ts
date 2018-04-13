import { Oauth2Error } from '../oauth2_error';
export declare class InvalidScope extends Oauth2Error {
    constructor(description?: string, uri?: string);
}
