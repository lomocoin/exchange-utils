import Big, { BigSource } from 'big.js';
import floor from './floor';

export default function multiply(
  valueA: BigSource,
  valueB: BigSource,
  precision: number,
  trimZeros = false,
) {
  const bigValueA = new Big(valueA);

  const result = bigValueA.mul(valueB);

  return floor(Number(result.toFixed(precision)), precision, trimZeros);
}
