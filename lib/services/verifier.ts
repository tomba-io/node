import { Service } from "../service";
import { TombaException } from "../exception";
import { VerifierResponse } from "../types/verifier";

/**
 * Verifier Service
 *
 * @see {@link https://docs.tomba.io/api/verifier#email-verifier}
 */
export class Verifier extends Service {
    /**
     * Email Verifier
     *
     * verify the deliverability of an email address.
     *
     * @param {string} email
     * @throws {TombaException}
     * @returns {Promise<VerifierResponse>}
     */
    async emailVerifier(email: string): Promise<VerifierResponse> {
        if (typeof email === "undefined") {
            throw new TombaException('Missing required parameter: "email"');
        }

        let path = "/email-verifier/{email}".replace("{email}", email);
        let payload = {};

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
