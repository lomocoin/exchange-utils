import floor from './floor';
import divide from './divide';
import multiply from './multiply';
declare const _default: {
    ceil: (value: number, precision?: number) => string;
    floor: typeof floor;
    range: (start: number | undefined, end: number, step?: number) => number[];
    divide: typeof divide;
    multiply: typeof multiply;
    getUnit: (num: number | undefined, precision: number, unit?: number) => string | undefined;
    getFixedValue: (value: import("big.js").BigSource, precision: number, trimZeros?: boolean) => string;
};
export default _default;
