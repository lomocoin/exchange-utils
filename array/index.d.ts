import getNestedObject from './getNestedObject';
export declare enum SortDirection {
    Asc = 0,
    Desc = 1
}
export interface IInput {
    [key: string]: any;
}
declare const _default: {
    unique: (array: any[]) => Set<any>[];
    getNestedObject: typeof getNestedObject;
    sortNumber: (fieldName: string, direction?: SortDirection) => (itemA: IInput, itemB: IInput) => number;
    sortString: (fieldName: string, direction?: SortDirection) => (itemA: IInput, itemB: IInput) => any;
};
export default _default;
