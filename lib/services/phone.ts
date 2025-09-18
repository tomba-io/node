import { Service } from "../service";
import { TombaException } from "../exception";
import { PhoneResponse } from "../types/phone";

/**
 * Phone Service
 *
 * @see {@link https://docs.tomba.io/api/phone}
 */
export class Phone extends Service {
    /**
     * Phone Finder
     * Search for phone numbers based on email, domain, or LinkedIn URL.
     * @param {Object} params - { email, domain, linkedin }
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/phone#phone-finder}
     * @returns {Promise<PhoneResponse>} API response
     */
    async finder(params: {
        email?: string;
        domain?: string;
        linkedin?: string;
    }): Promise<PhoneResponse> {
        if (!params.email && !params.domain && !params.linkedin) {
            throw new TombaException(
                "At least one of email, domain, or linkedin must be provided."
            );
        }
        return await this.client.call(
            "GET",
            "/phone-finder",
            { "content-type": "application/json" },
            params
        );
    }

    /**
     * Phone Validator
     * Validate a phone number and retrieve its associated information.
     * @param {string} phone - The phone number to validate
     * @param {string} [country_code] - Optional country code
     * @throws {TombaException}
     * @see {@link https://docs.tomba.io/api/phone#phone-validator}
     * @returns {Promise<Object>} API response
     */
    async validator(phone: string, country_code?: string) {
        if (!phone) {
            throw new TombaException("Phone number is required.");
        }
        const params: any = { phone };
        if (country_code) params.country_code = country_code;
        return await this.client.call(
            "GET",
            "/phone-validator",
            { "content-type": "application/json" },
            params
        );
    }
}
