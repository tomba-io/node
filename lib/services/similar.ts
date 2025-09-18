import { Service } from "../service";
import { TombaException } from "../exception";
import { SimilarResponse } from "../types/similar";

/**
 * Similar Service
 *
 */
export class Similar extends Service {
    /**
     * Similar Finder
     * retrieve similar domains based by a specific domain
     * @param {string} domain
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/~endpoints#similar}
     * @returns {Promise<SimilarResponse>} API response
     */
    async websites(websites: string): Promise<SimilarResponse> {
        if (!websites) {
            throw new TombaException("Websites is required.");
        }
        return await this.client.call(
            "GET",
            "/similar",
            { "content-type": "application/json" },
            { websites }
        );
    }
}
