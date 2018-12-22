import floor from '../number/floor';

/**
 * Parse a string and return the string to a maxDecimals
 */
export default (numberString: string, maxDecimals: number = 15) => {
  if (!numberString) {
    return '';
  }

  const value = String(numberString).replace(/,/g, '.');

  // If numberString was not a number, return input
  if (!/^\d*$/.test(value.replace('.', ''))) {
    return numberString;
  }

  const [, decimal] = value.split('.');

  if (!decimal || decimal.length === 0) {
    return numberString;
  }

  if (decimal.length > maxDecimals) {
    return floor(Number(value), maxDecimals).toString();
  }

  return numberString;
};
