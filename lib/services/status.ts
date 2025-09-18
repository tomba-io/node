import { Service } from "../service";
import { TombaException } from "../exception";

/**
 * Status Service
 *
 * @see {@link https://docs.tomba.io/api/~endpoints#domain-status}
 */
export class Status extends Service {
    /**
     * Domain status
     *
     * Returns domain status if is webmail or disposable.
     *
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
    async domainStatus(domain: string) {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        let path = "/domain-status";
        let payload: Record<string, string> = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        return await this.client.call(
            "get",
            path,
            {
                "content-type": "application/json",
            },
            payload
        );
    }

    /**
     * get Company Autocomplete
     *
     * Company Autocomplete is an API that lets you auto-complete company names
     * and retrieve logo and domain information.
     *
     * @param {string} query
     * @throws {TombaException}
     * @returns {Promise}
     */
    async autoComplete(query: string) {
        if (typeof query === "undefined") {
            throw new TombaException('Missing required parameter: "query"');
        }

        let path = "/domains-suggestion";
        let payload: Record<string, string> = {};

        if (typeof query !== "undefined") {
            payload["query"] = query;
        }

        return await this.client.call(
            "get",
            path,
            {
                "content-type": "application/json",
            },
            payload
        );
    }
}
