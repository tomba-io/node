/**
 * The response object returned by Leads.exist and Leads.getLeads.
 *
 * @public
 */
export interface LeadsExistResponse {
    data?: DataLeadsExist;
}

export interface DataLeadsExist {
    id?: number;
}

export interface Leads {
    data?: DataLeads;
}

export interface DataLeads {
    leads?: Lead[];
    meta?: LeadMeta;
}

export interface Lead {
    id?: number;
    user_id?: number;
    email?: string;
    list_id?: number | null;
    first_name?: null | string;
    last_name?: null | string;
    country?: null | string;
    website_url?: null | string;
    position?: null | string;
    twitter?: null | string;
    linkedin?: null | string;
    phone_number?: null | any;
    company?: string;
    notes?: any;
    lead_source?: null | string;
    score?: number | null;
    sync_status?: null | boolean;
    sync_airtable?: null | boolean;
    sync_hubspot?: null | boolean;
    sync_mailchimp?: null | boolean;
    sync_pipedrive?: null | boolean;
    created_at?: Date;
    updated_at?: Date;
    leads_list?: LeadsList;
    attributes?: LeadAttributes;
}

export interface LeadAttributes {
    [data: string]: any;
}

export interface LeadsList {
    list_id?: number | null;
    size?: number | null;
    name?: null | string;
}

export interface LeadMeta {
    current?: number;
    pageSize?: number;
    total?: number;
    total_pages?: number;
}
