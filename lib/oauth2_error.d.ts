export declare type oauthParams = {
    description?: string;
    uri?: string;
};
export declare class Oauth2Error extends Error {
    error: string;
    error_description: string;
    error_uri: string;
    private statusCode;
    constructor(params: any);
    respond(res: any): any;
    toString(): string;
}
