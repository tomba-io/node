/**
 * The response object returned by LeadsLists.getLists.
 *
 * @public
 */
export interface ListsResponse {
    data?: ListsData;
}

export interface ListsData {
    list_leads?: ListLead[];
}

export interface ListLead {
    id?: number;
    name?: string;
    favorite?: boolean;
    type?: string;
    size?: number;
    created_at?: Date;
    updated_at?: Date;
}
