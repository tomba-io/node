/**
 * Information about the source where the email was found.
 *
 * @public
 */
export interface Source {
    uri?: string;
    website_url?: string;
    extracted_on?: Date;
    last_seen_on?: Date;
    still_on_page?: boolean;
}
