"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var floor_1 = tslib_1.__importDefault(require("../number/floor"));
/**
 * Parse a string and return the string to a maxDecimals
 */
exports.default = (function (numberString, maxDecimals) {
    if (maxDecimals === void 0) { maxDecimals = 15; }
    if (!numberString) {
        return '';
    }
    var value = String(numberString).replace(/,/g, '.');
    // If numberString was not a number, return input
    if (!/^\d*$/.test(value.replace('.', ''))) {
        return numberString;
    }
    var _a = value.split('.'), decimal = _a[1];
    if (!decimal || decimal.length === 0) {
        return numberString;
    }
    if (decimal.length > maxDecimals) {
        return floor_1.default(Number(value), maxDecimals).toString();
    }
    return numberString;
});
//# sourceMappingURL=parsePrice.js.map