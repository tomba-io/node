export interface UsageResponse {
    data?: DataUsage[];
    total?: UsageTotal;
}

export interface DataUsage {
    id?: number;
    user_id?: number;
    search?: number;
    verifier?: number;
    phones?: number;
    sources?: number;
    similar?: number;
    technologies?: number;
    email_count?: number;
    export?: number;
    source_website?: number;
    source_bulk?: number;
    source_extension?: number;
    source_api?: number;
    source_sheets?: number;
    created_at?: Date;
}

export interface UsageTotal {
    export?: number;
    search?: number;
    source_api?: number;
    source_bulk?: number;
    source_extension?: number;
    source_sheets?: number;
    source_website?: number;
    sources?: number;
    verifier?: number;
}
