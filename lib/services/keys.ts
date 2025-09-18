import { Service } from "../service";
import { TombaException } from "../exception";
import { NewResponse } from "../types/new";

export class Keys extends Service {
    /**
     * Get your keys.
     *
     * Returns a list of your keys.
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
    async getKeys() {
        let path = "/keys/{id}";
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

    /**
     * Delete key
     *
     * Delete key
     *
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async deleteKey(id: string) {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        let path = "/keys/{id}".replace("{id}", id);
        let payload = {};

        return await this.client.call(
            "delete",
            path,
            {
                "content-type": "application/json",
            },
            payload
        );
    }

    /**
     * Create Key
     *
     * Create a new Key.
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
    async createKey(): Promise<NewResponse> {
        let path = "/keys/{id}";
        let payload = {};

        return await this.client.call(
            "post",
            path,
            {
                "content-type": "application/json",
            },
            payload
        );
    }

    /**
     * Reset a key
     *
     * Rest your key.
     *
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async resetKey(id: string) {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        let path = "/keys/{id}".replace("{id}", id);
        let payload = {};

        return await this.client.call(
            "put",
            path,
            {
                "content-type": "application/json",
            },
            payload
        );
    }
}
