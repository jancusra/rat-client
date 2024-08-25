export type SelectOption = {
    id: number | string;
    name: string;
};

export type FormEntry = {
    entryType: string;
    excluded: boolean;
    hidden: boolean;
    name: string;
    order: number;
    selectOptions: Array<SelectOption>;
    value: number | string | boolean | Array<number> | Array<string>;
};

export type Language = {
    id: number;
    name: string;
    isActive: boolean;
    itemOrder: number;
    languageCulture: string;
    twoLetterCode: string;
};

export type UserData = {
    email?: string;
    isAdmin?: boolean;
    languages?: Array<Language>
};

export type UserContext = {
    data: UserData;
    getUserData: () => void;
};