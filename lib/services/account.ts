import { Service } from "../service";
import { TombaException } from "../exception";
import { TombaAccount } from "../types/account";

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
     * @returns {Promise<TombaAccount>} The account response object.
     */
    async getAccount(): Promise<TombaAccount> {
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
