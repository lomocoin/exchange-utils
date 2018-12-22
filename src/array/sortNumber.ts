import { SortDirection } from './';

interface IInput {
  [key: string]: any;
}

export default (
  fieldName: string,
  direction: SortDirection = SortDirection.Asc,
) => (itemA: IInput, itemB: IInput) => {
  if (direction === SortDirection.Asc) {
    return itemA[fieldName] - itemB[fieldName]; // For ascending sort
  }
  return itemB[fieldName] - itemA[fieldName]; // For descending sort
};
