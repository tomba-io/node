import { Service } from "../service";
import { TombaException } from "../exception";
import { EmailCountResponse } from "../types/email-count";

/**
 * Count Service
 * @see {@link https://docs.tomba.io/api/finder#email-count}
 */
export class Count extends Service {
    /**
     * get Email Count
     *
     * Domain name from which you want to find the email addresses.
     *
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
    async emailCount(domain: string): Promise<EmailCountResponse> {
        if (!domain) {
            throw new TombaException('Missing required parameter: "domain"');
        }
        const path = "/email-count";
        const payload: Record<string, any> = { domain };
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
