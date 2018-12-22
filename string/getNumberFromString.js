"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (numberString, defaultIfInvalid) {
    if (defaultIfInvalid === void 0) { defaultIfInvalid = -1; }
    // If numberString is not defined, return defaultIfInvalid
    if (!numberString) {
        return defaultIfInvalid;
    }
    // Handle European decimal separator
    var value = numberString.replace(/,/g, '.');
    // RegEx Method: If numberString was not a number, return defaultIfInvalid
    if (!/^\d*$/.test(value.replace('.', ''))) {
        return defaultIfInvalid;
    }
    // Number NaN method:
    // if (!isFinite(Number(value))) {
    //   return defaultIfInvalid;
    // }
    return Number(value);
});
//# sourceMappingURL=getNumberFromString.js.map