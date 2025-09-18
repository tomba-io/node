import { Source } from "./source";
/**
 * The response object returned by DomainSearch.searchDomain.
 *
 * @public
 */
export interface DomainSearchResponse {
    data?: DataDomainSearch;
    meta?: SearchMeta;
}

export interface DataDomainSearch {
    organization?: Organization;
    emails?: EmailDomainSearch[];
}

export interface EmailDomainSearch {
    email?: string;
    first_name?: null | string;
    last_name?: null | string;
    full_name?: null | string;
    gender?: null | string;
    phone_number?: boolean;
    type?: Type;
    country?: null;
    position?: null | string;
    department?: string;
    seniority?: null | string;
    twitter?: null | string;
    linkedin?: null | string;
    score?: number;
    verification?: Verification;
    sources?: Source[];
}

export enum Type {
    Generic = "generic",
    Personal = "personal",
}

export interface Verification {
    date?: Date | null;
    status?: null | string;
}

export interface Organization {
    location?: Location;
    social_links?: SocialLinks;
    disposable?: boolean;
    webmail?: boolean;
    website_url?: string;
    phone_number?: string;
    industries?: string;
    founded?: string;
    company_size?: string;
    last_updated?: Date;
    accept_all?: boolean;
    description?: string;
    revenue?: string;
    pattern?: string;
    total_similar?: number;
    organization?: string;
    company_type?: string;
    whois?: Whois;
}

export interface Location {
    country?: string;
    city?: string;
    state?: string;
    street_address?: string;
    postal_code?: string;
}

export interface SocialLinks {
    twitter_url?: string;
    facebook_url?: string;
    linkedin_url?: string;
}

export interface Whois {
    registrar_name?: string;
    created_date?: Date;
    referral_url?: string;
}

export interface SearchMeta {
    total?: number;
    pageSize?: number;
    current?: number;
    total_pages?: number;
    params?: Params;
}

export interface Params {
    domain?: string;
    page?: number;
    limit?: number;
    department?: string;
    type?: string;
}
