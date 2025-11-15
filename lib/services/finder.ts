import { Service } from "../service";
import { TombaException } from "../exception";
import type { FinderResponse } from "../types/finder";

/**
 * Finder Service
 * @see {@link https://docs.tomba.io/api/finder}
 */
export class Finder extends Service {
    /**
     * Email Finder
     *
     * generates or retrieves the most likely email address from a domain name, a
     * first name and a last name.
     *
     * @param {string} domain
     * @param {string} firstName
     * @param {string} lastName
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/finder#email-finder}
     * @returns {Promise<FinderResponse>}
     */
    async emailFinder(
        domain: string,
        firstName: string,
        lastName: string
    ): Promise<FinderResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        if (typeof firstName === "undefined") {
            throw new TombaException('Missing required parameter: "firstName"');
        }

        if (typeof lastName === "undefined") {
            throw new TombaException('Missing required parameter: "lastName"');
        }

        let path = "/email-finder";
        let payload: Record<string, string> = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        if (typeof firstName !== "undefined") {
            payload["first_name"] = firstName;
        }

        if (typeof lastName !== "undefined") {
            payload["last_name"] = lastName;
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

    /**
     * Author Finder
     *
     * Finds author information by article URL.
     *
     * @param {string} url
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/finder#author-finder}
     * @returns {Promise}
     */
    async authorFinder(url: string): Promise<FinderResponse> {
        if (typeof url === "undefined") {
            throw new TombaException('Missing required parameter: "url"');
        }
        let path = "/author-finder";
        let payload: Record<string, string> = {};

        if (typeof url !== "undefined") {
            payload["url"] = url;
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

    /**
     * Linkedin Finder
     *
     * Finds email address by Linkedin URL.
     *
     * @param {string} url
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/finder#linkedin-finder}
     * @returns {Promise}
     */
    async linkedinFinder(url: string): Promise<FinderResponse> {
        if (typeof url === "undefined") {
            throw new TombaException('Missing required parameter: "url"');
        }
        let path = "/linkedin";
        let payload: Record<string, string> = {};

        if (typeof url !== "undefined") {
            payload["url"] = url;
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

    /**
     * Email Enrichment
     *
     * Enriches an email address with additional information.
     *
     * @param {string} email
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/finder#email-enrichment}
     * @returns {Promise}
     */
    async emailEnrichment(email: string): Promise<FinderResponse> {
        if (typeof email === "undefined") {
            throw new TombaException('Missing required parameter: "email"');
        }
        let path = "/enrich";
        let payload: Record<string, string> = {};
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
