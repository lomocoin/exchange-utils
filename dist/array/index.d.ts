import unique from './unique';
import getNestedObject from './getNestedObject';
import sortNumber from './sortNumber';
import sortString from './sortString';
export declare enum SortDirection {
    Asc = 0,
    Desc = 1
}
export interface IInput {
    [key: string]: any;
}
export { unique, getNestedObject, sortNumber, sortString };
