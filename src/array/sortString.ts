import { SortDirection, IInput } from './';
import getNestedObject from './getNestedObject';

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
