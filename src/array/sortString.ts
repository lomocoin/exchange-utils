import { SortDirection } from '../../declares';
import getNestedObject from './getNestedObject';

interface IInput {
  [key: string]: any;
}

export default (
  fieldName: string,
  direction: SortDirection = SortDirection.Asc,
) => (itemA: IInput, itemB: IInput) => {
  const fieldA = getNestedObject(itemA, fieldName);
  const fieldB = getNestedObject(itemB, fieldName);
  if (direction === SortDirection.Asc) {
    return fieldA.localeCompare(fieldB);
  }
  return fieldB.localeCompare(fieldA);
};
