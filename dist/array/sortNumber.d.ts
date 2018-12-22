import { SortDirection } from './';
interface IInput {
    [key: string]: any;
}
declare const _default: (fieldName: string, direction?: SortDirection) => (itemA: IInput, itemB: IInput) => number;
export default _default;
