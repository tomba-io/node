import { Service } from "../service";
import { TombaException } from "../exception";
import { TechnologyResponse } from "../types/technology";

/**
 * Technology Service
 *
 */
export class Technology extends Service {
    /**
     * Technology Finder
     * retrieve the technologies used by a specific domain
     * @param {string} domain
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/~endpoints#technology}
     * @returns {Promise<TechnologyResponse>} API response
     */
    async list(domain: string): Promise<TechnologyResponse> {
        if (!domain) {
            throw new TombaException("Domain is required.");
        }
        return await this.client.call(
            "GET",
            "/technology",
            { "content-type": "application/json" },
            { domain }
        );
    }
}
