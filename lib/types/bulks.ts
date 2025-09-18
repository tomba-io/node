/**
 * The response object returned by Bulks.getBulks.
 *
 * @public
 */
export interface Bulks {
    data?: DataBulks[];
    meta?: BulksMeta;
}

export interface DataBulks {
    bulk_id?: number;
    user_id?: number;
    bulk_type?: string;
    name?: string;
    archived?: boolean;
    deleted?: boolean;
    list?: null;
    maximum?: string;
    email_type?: EmailType;
    department?: any;
    sources?: boolean;
    file_name?: string;
    total?: number;
    total_list?: number;
    status?: boolean;
    chart?: Chart[];
    table?: Table[];
    launched?: boolean;
    time_track?: string;
    progress?: number;
    verify?: boolean;
    verify_cost?: number;
    total_emails?: number;
    upload?: null;
    processed?: number;
    used?: boolean;
    fast_verify?: boolean;
    expired?: boolean;
    expired_at?: Date;
    created_at?: Date;
}

export interface EmailType {
    type?: string;
    priority_type?: string;
}

export interface DepartmentType {
    name?: string;
    priority_type?: string;
}

export interface Chart {
    x?: string;
    e?:
        | "valid"
        | "accept_all"
        | "invalid"
        | "disposable"
        | "unknown"
        | "webmail"
        | "NotFound";
    y?: number;
}

export interface Table {
    email?: string;
    name?: string;
    org?: string;
    score?: number;
    type?: string;
    pattern?: string;
    f_name?: string;
    l_name?: string;
    position?: string;
    department?: string;
    twitter?: string;
    linkedin?: string;
}

export interface BulksMeta {
    current?: number;
    pageSize?: number;
    total?: number;
    total_pages?: number;
}

export interface BulkProgress {
    processed?: number;
    processed_email?: number;
    progress?: number;
    status?: boolean;
}
