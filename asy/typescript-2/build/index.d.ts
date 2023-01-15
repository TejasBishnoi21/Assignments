type InterFace = {
    id: number;
    title: string;
    status: boolean;
};
declare let objInterFace: InterFace;
declare function getName(firstName: string, lastName?: string): string;
type Address = {
    houseNumber: number;
    street: (number | string);
    city: string;
    state: string;
    postalCode: (string | number);
    country: string;
};
declare let addressObj: Address;
type PersonDetails = {
    Prefix?: string;
    phones: number[];
    address: (number | string)[];
    email?: string;
    firstName: string;
    lastName: string;
    middleName?: string;
};
declare let personDetails: PersonDetails;
type PersonDetails2 = {};
declare function phoneBook(): void;
