import { Verification } from "./domain-search";
import { Source } from "./source";
/**
 * The response object returned by Finder.findEmail.
 *
 * @public
 */
export interface FinderResponse {
    data?: DataFinder;
}

export interface DataFinder {
    website_url?: string;
    accept_all?: null;
    email?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    country?: null;
    gender?: string;
    phone_number?: boolean;
    position?: string;
    twitter?: null;
    linkedin?: string;
    disposable?: boolean;
    webmail?: boolean;
    company?: string;
    score?: number;
    verification?: Verification;
    sources?: Source[];
    info?: AuthorInfo;
}

export interface AuthorInfo {
    url?: string;
    title?: string;
    og_image?: string;
    description?: string;
    full_name?: string;
    first_name?: string;
    last_name?: string;
    article_domain?: string;
    same_as_domain?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
    image?: string;
    gravatar?: boolean;
    emails?: string[];
    author_score?: null;
}
