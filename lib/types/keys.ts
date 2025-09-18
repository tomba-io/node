/**
 * The response object returned by Keys.getKeys.
 *
 * @public
 */
export interface KeysResponse {
    data?: DataKeys;
}

export interface DataKeys {
    keys?: Key[];
}

export interface Key {
    id?: number | string;
    user_id?: number;
    key?: string;
    ip?: string;
    created_at?: Date;
    updated_at?: Date;
}
