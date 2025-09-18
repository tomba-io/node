/**
 * The response object returned by Format.getFormat.
 *
 * @public
 */
export interface FormatResponse {
    data?: FormatData[];
}

export interface FormatData {
    format?: string;
    percentage?: number;
}
