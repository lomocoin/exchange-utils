import trim from './trim';
import floor from '../number/floor';

export enum NumberFormatType {
  Price,
  Quantity,
}

/**
 * Return a input number formatted,
 * Return False if is not a valid number
 */
export default (value: string, fixed: number, type: NumberFormatType) => {
  if (typeof value === 'string' && trim(value) === '') {
    return '';
  }

  // Check if is a valid positive number
  if (!/^\d*$/.test(value.replace('.', ''))) {
    return false;
  }

  const valueString = (typeof value === 'string'
    ? value
    : floor(value, 14)
  ).split('.');

  const integer = valueString[0];
  const decimal = valueString[1];

  if (Number.parseInt(integer, 10) < 0) {
    return '0';
  }

  // TODO: here maybe we should just truncate the max value
  if (
    type === NumberFormatType.Price &&
    Number.parseInt(integer, 10) >= 10 ** 8
  ) {
    return '99999999';
  }

  if (
    type === NumberFormatType.Price &&
    Number.parseInt(integer, 10) >= 10 ** 10
  ) {
    return '9999999999';
  }

  if (decimal && decimal.length > fixed) {
    return floor(Number.parseFloat(`${integer}.${decimal}`), fixed);
  }

  if (typeof decimal !== 'undefined') {
    return `${integer}.${decimal}`;
  }

  return Number.parseFloat(value).toString();
};
