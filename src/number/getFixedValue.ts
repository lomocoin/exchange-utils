import Big, { BigSource } from 'big.js';

Big.RM = 0;

/**
 * Same as floor but using big.js
 * @param trimZeros if true, remove not meaningful zeros from the result (Default: false)
 */
export default (value: BigSource, precision: number, trimZeros = false) => {
  const bigValue = new Big(value);

  return !trimZeros
    ? bigValue.toFixed(precision)
    : bigValue.round(precision).toString();
};
