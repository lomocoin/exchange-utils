import unique from './unique';
import getNestedObject from './getNestedObject';
import sortNumber from './sortNumber';
import sortString from './sortString';

export enum SortDirection {
  Asc,
  Desc,
}

export interface IInput {
  [key: string]: any;
}

export { unique, getNestedObject, sortNumber, sortString };
