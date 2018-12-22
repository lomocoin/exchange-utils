import { BigSource } from 'big.js';
declare const _default: (value: BigSource, precision: number, trimZeros?: boolean) => string;
/**
 * Same as floor but using big.js
 * @param trimZeros if true, remove not meaningful zeros from the result (Default: false)
 */
export default _default;
