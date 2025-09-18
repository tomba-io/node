import { Service } from "../service";
import { TombaException } from "../exception";
import { Source } from "../types/source";

/**
 * Sources Service
 *
 * @see {@link https://docs.tomba.io/api/~endpoints#email-sources}
 */
export class Sources extends Service {
    /**
     * Email Sources
     *
     * Find email address source somewhere on the web.
     *
     * @param {string} email
     * @throws {TombaException}
     * @returns {Promise<{ data?: Source[], email: string }> }
     */
    async emailSources(
        email: string
    ): Promise<{ data?: Source[]; email: string }> {
        if (typeof email === "undefined") {
            throw new TombaException('Missing required parameter: "email"');
        }

        let path = "/email-sources/";
        let payload: { email?: string } = {};
        if (typeof email !== "undefined") {
            payload["email"] = email;
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
