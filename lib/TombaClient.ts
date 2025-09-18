import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TombaException } from "./exception";

/**
 * Tomba Client
 *
 * @public
 */
export class TombaClient {
    endpoint: string;
    headers: Record<string, string>;

    constructor() {
        this.endpoint = "https://api.tomba.io/v1";
        this.headers = {
            "x-sdk-version": "tomba:nodejs:v1.0.3",
        };
    }

    /**
     * Set Key
     *
     * Your Key
     *
     * @param {string} key
     *
     */
    setKey(key: string): this {
        this.addHeader("X-Tomba-Key", key);
        return this;
    }

    /**
     * Set Secret
     *
     * Your Secret
     *
     * @param {string} secret
     *
     */
    setSecret(secret: string): this {
        this.addHeader("X-Tomba-Secret", secret);
        return this;
    }

    /**
     * Set endpoint.
     *
     * @param {string} endpoint
     *
     */
    setEndpoint(endpoint: string): this {
        this.endpoint = endpoint;
        return this;
    }

    /**
     * @param {string} key
     * @param {string} value
     */
    addHeader(key: string, value: string): this {
        this.headers[key.toLowerCase()] = value;
        return this;
    }

    async call(
        method: string,
        path: string = "",
        headers: Record<string, string> = {},
        params: Record<string, any> = {},
        responseType: string = "json"
    ): Promise<any> {
        headers = Object.assign({}, this.headers, headers);
        let contentType =
            headers["content-type"]?.toLowerCase() || "application/json";
        let formData = null;
        let options: AxiosRequestConfig = {
            method: method.toUpperCase() as any,
            url: this.endpoint + path,
            params: method.toUpperCase() === "GET" ? params : {},
            headers: headers,
            data:
                method.toUpperCase() === "GET" ||
                contentType.startsWith("multipart/form-data")
                    ? formData
                    : params,
            responseType: responseType as any,
        };
        try {
            let response: AxiosResponse = await axios(options);
            return response.data;
        } catch (error: any) {
            if ("response" in error) {
                if (error.response && "data" in error.response) {
                    if (typeof error.response.data === "string") {
                        throw new TombaException(
                            error.response.data,
                            error.response,
                            error.response.data
                        );
                    } else {
                        throw new TombaException(
                            error.response.data.errors?.message || "Error",
                            error.response,
                            error.response.data
                        );
                    }
                } else {
                    throw new TombaException(
                        error.response,
                        error.response,
                        error.response.data
                    );
                }
            } else {
                throw new TombaException(error.message);
            }
        }
    }
}
