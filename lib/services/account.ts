import { Service } from "../service";
import { TombaException } from "../exception";
import { TombaAccountResponse } from "../types/account";

/**
 * Account Service
 *
 * @see {@link https://docs.tomba.io/api/account#get-account}
 */
export class Account extends Service {
    /**
     * Get Account
     *
     * Returns information about the current account.
     *
     * @throws {TombaException}
     * @returns {Promise<TombaAccountResponse>} The account response object.
     */
    async getAccount(): Promise<TombaAccountResponse> {
        const path = "/me";
        const payload = {};
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
