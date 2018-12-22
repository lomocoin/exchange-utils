"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var range_1 = tslib_1.__importDefault(require("./range"));
/**
 * Round up a number
 * (0.123, 2) => 0.13
 */
exports.default = (function (value, precision) {
    if (precision === void 0) { precision = 0; }
    if (value === undefined || value === null) {
        return '0';
    }
    var _a = String(value).split('.'), decimal = _a[1];
    if (!decimal || precision === 0) {
        return value.toFixed(precision);
    }
    if (decimal && decimal.length === precision) {
        return value.toFixed(precision);
    }
    return (value +
        Number("0." + range_1.default(0, precision)
            .map(function () { return 0; })
            .join('') + "5")).toFixed(precision);
});
//# sourceMappingURL=ceil.js.map