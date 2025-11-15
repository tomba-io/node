import { TombaClient } from "../TombaClient";
import {
    CompaniesSearchRequest,
    CompaniesSearchResponse,
} from "../types/companies-search";

/**
 * Reveal Service
 *
 * Find relevant companies at scale
 *
 * @public
 */
export class Reveal {
    client: TombaClient;

    constructor(client: TombaClient) {
        this.client = client;
    }

    /**
     * Companies Search
     *
     * Find relevant companies at scale with advanced filtering options
     *
     * @param {CompaniesSearchRequest} params - The search parameters
     * @see {@link https://docs.tomba.io/api/reveal#search-companies}
     * @returns {Promise<CompaniesSearchResponse>}
     * @throws {TombaException}
     */
    async companiesSearch(
        params: CompaniesSearchRequest
    ): Promise<CompaniesSearchResponse> {
        const path = "/reveal/search";

        return await this.client.call("POST", path, {}, params);
    }
}
