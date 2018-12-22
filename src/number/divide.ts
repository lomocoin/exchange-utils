import Big, { BigSource } from 'big.js';
import floor from './floor';

export default function divide(
  valueA: BigSource,
  valueB: BigSource,
  precision: number,
  trimZeros = false,
) {
  const bigValueA = new Big(valueA);

  let result = Big(0);

  // Do not divide by zero
  if (Number(valueB) !== 0) {
    result = bigValueA.div(valueB);
  }

  return floor(Number(result.toFixed(precision)), precision, trimZeros);
}
