"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var trimZeros_1 = tslib_1.__importDefault(require("../string/trimZeros"));
// import getFixedValue from './getFixedValue';
var parseResult = function (value, trimZeros) {
    return trimZeros ? trimZeros_1.default(value) : value;
};
/**
 * Round down a number
 * @param precision how many decimals to take in consideration (Default: 0)
 * @param trimZeros if true, remove not meaningful zeros from the result (Default: false)
 */
function floor(value, precision, trimZeros) {
    if (precision === void 0) { precision = 0; }
    if (trimZeros === void 0) { trimZeros = false; }
    // NOTE: we return 0 for undefined values,
    // useful for react render template when the data is not yet ready
    if (value === undefined || value === null) {
        return parseResult('0', trimZeros);
    }
    // Using Big.js way
    // NOTE: there is as a problem with bigValue.round when trimZeros=true,
    // return getFixedValue(value, precision, trimZeros);
    // LoMo way
    var needToFixed = value.toString().indexOf('e+') !== -1 ||
        value.toString().indexOf('e-') !== -1;
    var _a = (needToFixed
        ? value.toFixed(20)
        : value.toString()).split('.'), integer = _a[0], decimal = _a[1];
    if (!decimal || Number.parseFloat(decimal) === 0) {
        return parseResult(value.toFixed(precision), trimZeros);
    }
    var decimalPart = Number.parseFloat("0." + decimal.substring(0, decimal.length > 14 ? 14 : decimal.length))
        .toFixed(14)
        .substring(0, precision + 2)
        .split('.')[1];
    if (!decimalPart) {
        return parseResult(integer, trimZeros);
    }
    return parseResult(integer + "." + decimalPart, trimZeros);
}
exports.default = floor;
//# sourceMappingURL=floor.js.map