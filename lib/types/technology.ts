/**
 * The response object returned by Technology.getTechnology.
 *
 * @public
 */
export interface TechnologyResponse {
    domain?: string;
    name?: string;
    slug?: string;
    data?: TechnologyData[];
}

export interface TechnologyData {
    id?: number;
    slug?: string;
    name?: string;
    icon?: string;
    website?: string;
    website_count?: number;
    categories?: TechnologyCategories;
}

export interface TechnologyCategories {
    id?: number;
    slug?: string;
    name?: string;
}
