/**
 * The response object returned by EmailCount.getEmailCount.
 *
 * @public
 */
export interface EmailCountResponse {
    data?: DataEmailCount;
}

export interface DataEmailCount {
    total?: number;
    personal_emails?: number;
    generic_emails?: number;
    department?: Department;
    seniority?: Seniority;
}

export interface Department {
    engineering?: number;
    finance?: number;
    hr?: number;
    it?: number;
    marketing?: number;
    operations?: number;
    management?: number;
    sales?: number;
    legal?: number;
    support?: number;
    communication?: number;
    executive?: number;
    security?: number;
    accounting?: number;
    administrative?: number;
    diversity?: number;
    facilities?: number;
    pr?: number;
    software?: number;
    warehouse?: number;
}

export interface Seniority {
    junior?: number;
    senior?: number;
    executive?: number;
}
