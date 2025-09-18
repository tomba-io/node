import { Service } from "../service";
import { TombaException } from "../exception";

/**
 * Logs Service
 *
 * @see {@link https://docs.tomba.io/api/account#retrieve-api-logs}
 */
export class Logs extends Service {
    /**
     * get Logs
     *
     * Returns a your last 1,000 requests you made during the last 3 months.
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
    async getLogs() {
        let path = "/logs";
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
