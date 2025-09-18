/**
 * Custom exception class for Tomba-related errors.
 *
 * @public
 */
export class TombaException extends Error {
    code: any;
    response: any;
    constructor(message: string, code?: any, response?: any) {
        super(message);
        this.code = code;
        this.response = response;
    }
}
