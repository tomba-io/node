/**
 * The response object returned by Account.getAccount.
 *
 * @public
 */
export interface TombaAccount {
    data?: TombaAccountResponse;
}
export interface TombaAccountResponse {
    user_id?: number;
    secret_token?: string;
    role?: number;
    confirmed?: boolean;
    blocked?: boolean;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    image?: string;
    deleted?: boolean;
    provider?: string;
    timezone?: string;
    newsletter?: boolean;
    activity?: boolean;
    title?: string;
    country?: string;
    created_at?: Date;
    ip?: string;
    has_password?: boolean;
    issued?: Date;
    expired?: Date;
    expired_subscription?: Date;
    pricing?: AuthPricing;
    teams?: AuthTeams;
    requests?: AuthRequests;
}

export interface AuthPricing {
    name?: string;
    pricing_id?: number;
    available_searches?: number;
    available_verifications?: number;
    available_phones?: number;
    available_leads?: number;
    available_list?: number;
    available_similar?: number;
    available_technologies?: number;
    available_attr?: number;
    available_keys?: number;
    available_teams?: number;
    available_sources?: number;
    available_email_count?: number;
    frequency?: string;
    price_monthly?: string;
    price_yearly?: string;
    update_url?: null;
    cancel_url?: null;
}

export interface AuthRequests {
    domains?: AuthCount;
    verifications?: AuthCount;
    phones?: AuthCount;
    count?: AuthCount;
    similar?: AuthCount;
    technologies?: AuthCount;
}

export interface AuthCount {
    available?: number;
    used?: number;
}

export interface AuthTeams {
    team_id?: number;
    role?: string;
    workspace?: boolean;
    export?: boolean;
    bulks?: boolean;
    limit?: AuthLimit;
    owner?: AuthOwner;
}

export interface AuthLimit {
    search?: null | number;
    verifier?: null | number;
}

export interface AuthOwner {
    name?: null;
    available_teams?: null | number;
    available_searches?: null | number;
    available_verifications?: null | number;
    usage?: AuthLimit;
}
