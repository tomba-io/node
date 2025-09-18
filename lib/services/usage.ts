import { Service } from "../service";
import { TombaException } from "../exception";
import { UsageResponse } from "../types/usage";

export class Usage extends Service {
    /**
     * get Usage
     *
     * Returns a your monthly requests
     *
     * @throws {TombaException}
     * @returns {Promise<UsageResponse>}
     */
    async getUsage(): Promise<UsageResponse> {
        let path = "/usage";
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
