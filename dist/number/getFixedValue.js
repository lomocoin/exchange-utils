"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var big_js_1 = tslib_1.__importDefault(require("big.js"));
big_js_1.default.RM = 0;
/**
 * Same as floor but using big.js
 * @param trimZeros if true, remove not meaningful zeros from the result (Default: false)
 */
exports.default = (function (value, precision, trimZeros) {
    if (trimZeros === void 0) { trimZeros = false; }
    var bigValue = new big_js_1.default(value);
    return !trimZeros
        ? bigValue.toFixed(precision)
        : bigValue.round(precision).toString();
});
//# sourceMappingURL=getFixedValue.js.map