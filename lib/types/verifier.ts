import { Source } from "./source";
/**
 * The response object returned by Verifier.verifyEmail.
 *
 * @public
 */
export interface VerifierResponse {
    data?: VerifierData;
}

export interface VerifierData {
    email?: VerifierEmail;
    sources?: Source[];
}

export interface VerifierEmail {
    email?: string;
    mx_check?: boolean;
    smtp_server?: boolean;
    smtp_check?: boolean;
    accept_all?: boolean;
    block?: boolean;
    mx?: MX;
    smtp_provider?: string;
    gibberish?: boolean;
    disposable?: boolean;
    webmail?: boolean;
    result?: string;
    status?: string;
    score?: number;
    regex?: boolean;
    greylisted?: boolean;
    whois?: VerifierEmailWhois;
}
export interface MX {
    records?: string[];
}

export interface VerifierEmailWhois {
    registrar_name?: string;
    referral_url?: string;
    created_date?: Date;
}
