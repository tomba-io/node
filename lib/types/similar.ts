/**
 * Response structure for Similar Service
 *
 * @public
 */
export interface SimilarResponse {
    data?: SimilarData[];
}

export interface SimilarData {
    website_url?: string;
    name?: string;
    industries?: string;
}
