import { Service } from "../service";
import { TombaException } from "../exception";
import { DomainSearchResponse } from "../types/domain-search";
export class Domain extends Service {
    /**
     * Domain Search
     *
     * You can use this endpoint to show different browser icons to your users.
     * The code argument receives the browser code as it appears in your user
     * /account/sessions endpoint. Use width, height and quality arguments to
     * change the output settings.
     *
     * @param {string} domain
     * @param {string} page
     * @param {string} limit
     * @param {string} department
     * @param {string} country
     * @throws {TombaException}
     * @returns {Promise<DomainSearchResponse>}
     */
    async domainSearch(
        domain: string,
        page?: string,
        limit?: string,
        department?: string,
        country?: string
    ): Promise<DomainSearchResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        let path = "/domain-search";
        let payload: Record<string, string> = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }
        if (typeof page !== "undefined") {
            payload["page"] = page;
        }

        if (typeof limit !== "undefined") {
            payload["limit"] = limit;
        }

        if (typeof department !== "undefined") {
            payload["department"] = department;
        }

        if (typeof country !== "undefined") {
            payload["country"] = country;
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
