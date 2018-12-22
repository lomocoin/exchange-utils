import ceil from './ceil';
import floor from './floor';
import range from './range';
import divide from './divide';
import multiply from './multiply';
import getUnit from './getUnit';
import getFixedValue from './getFixedValue';

export enum PrecisionType {
  TokenPrice = 8,
  FiatPrice = 2,
  Increase = 3,
}

export { ceil, floor, range, divide, multiply, getUnit, getFixedValue };
