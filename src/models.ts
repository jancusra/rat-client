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