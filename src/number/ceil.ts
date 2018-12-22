import range from './range';

/**
 * Round up a number
 * (0.123, 2) => 0.13
 */
export default (value: number, precision: number = 0) => {
  if (value === undefined || value === null) {
    return '0';
  }
  const [, decimal] = String(value).split('.');
  if (!decimal || precision === 0) {
    return value.toFixed(precision);
  }
  if (decimal && decimal.length === precision) {
    return value.toFixed(precision);
  }
  return (
    value +
    Number(
      `0.${range(0, precision)
        .map(() => 0)
        .join('')}5`,
    )
  ).toFixed(precision);
};
