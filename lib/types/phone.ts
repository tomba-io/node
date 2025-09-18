/**
 * The response object returned by Phone.getPhone.
 *
 * @public
 */
export interface PhoneResponse {
    data?: PhoneData;
}

export interface PhoneData {
    email?: string;
    domain?: string;
    linkedin?: string;
    valid?: boolean;
    local_format?: string;
    intl_format?: string;
    e164_format?: string;
    rfc3966_format?: string;
    country_code?: string;
    line_type?: string;
    carrier?: string;
    timezones?: string[];
}
