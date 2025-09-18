import { Service } from "../service";
import { TombaException } from "../exception";

/**
 * Enrichment Service
 *
 * @see {@link https://docs.tomba.io/api/enrichment}
 */
export class Enrichment extends Service {
    /**
     * Person API
     * retrieve person information based on a specific domain
     * @param {string} email
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/enrichment#person-api}
     * @returns {Promise<any>} API response
     */
    async person(email: string): Promise<any> {
        if (!email) {
            throw new TombaException("Email is required.");
        }
        return await this.client.call(
            "GET",
            "/people/find",
            { "content-type": "application/json" },
            { email }
        );
    }
    /**
     * Company API
     * retrieve company information based on a specific domain
     * @param {string} domain
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/enrichment#company-api}
     * @returns {Promise<any>} API response
     */
    async company(domain: string): Promise<any> {
        if (!domain) {
            throw new TombaException("Domain is required.");
        }
        return await this.client.call(
            "GET",
            "/companies/find",
            { "content-type": "application/json" },
            { domain }
        );
    }

    /**
     * Combined Person & Company API
     * retrieve combined person and company information based on a specific email
     * @param {string} email
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/enrichment#combined-api}
     * @returns {Promise<any>} API response
     */
    async combined(email: string): Promise<any> {
        if (!email) {
            throw new TombaException("Email is required.");
        }
        return await this.client.call(
            "GET",
            "/combined/find",
            { "content-type": "application/json" },
            { email }
        );
    }
}
