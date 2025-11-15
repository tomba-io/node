/**
 * Filter represents include/exclude filter options
 */
export interface Filter {
    include?: string[];
    exclude?: string[];
}

/**
 * CompanyFilters contains all available filter types
 */
export interface CompanyFilters {
    company?: Filter;
    location_country?: Filter;
    location_city?: Filter;
    location_state?: Filter;
    industry?: Filter;
    size?: Filter;
    type?: Filter;
    keywords?: Filter;
    founded?: Filter;
    technologies?: Filter;
    similar?: Filter;
    revenue?: Filter;
    sic?: Filter;
    naics?: Filter;
}

/**
 * CompaniesSearchRequest represents the main search request structure
 */
export interface CompaniesSearchRequest {
    query?: string;
    filters?: CompanyFilters;
    _source?: string[];
    page?: number;
    // limit?: number;
}

/**
 * Company represents the response company structure
 */
export interface Company {
    name: string;
    description: string;
    country: string;
    state: string;
    street_address: string;
    postal_code: string;
    industry: string;
    company_size: string;
    type: string;
    founded: string;
    city: string;
    website_url: string;
    total_emails: number;
    revenue: string;
    phone_number: string;
    linkedin_url: string;
    facebook_url: string;
    twitter_url: string;
    total_similar: number;
}

/**
 * CompaniesData contains the paginated results
 */
export interface CompaniesData {
    companies: Company[];
}

/**
 * CompaniesMeta contains pagination and filter metadata
 */
export interface CompaniesMeta {
    total: number;
    page: number;
    limit: number;
    pages: number;
    filters?: CompanyFilters;
}

/**
 * CompaniesSearchResponse represents the API response
 */
export interface CompaniesSearchResponse {
    success: boolean;
    data: CompaniesData;
    meta: CompaniesMeta;
    message?: string;
}
