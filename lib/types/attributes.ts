/**
 * The response object returned by Attributes.getAttributes.
 *
 * @public
 */
export interface Attributes {
    data?: AttributesData;
}

export interface AttributesData {
    attributes?: Attribute[];
}

export interface Attribute {
    id?: number;
    name?: string;
    identifier?: string;
    type?: string;
    date_created?: Date;
    date_modified?: Date;
}
