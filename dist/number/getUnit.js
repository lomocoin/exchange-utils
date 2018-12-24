"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ceil_1 = tslib_1.__importDefault(require("./ceil"));
var units = ['', 'K', 'M', 'B'];
var getUnit = function (num, precision, unit) {
    if (unit === void 0) { unit = 0; }
    if (!num) {
        return undefined;
    }
    else if (unit > units.length) {
        throw new Error("Number: " + num + units[unit] + " out of range.");
    }
    else if (num >= 1000) {
        return getUnit(num / 1000, precision, unit + 1);
    }
    else if (unit === 0) {
        return "" + ceil_1.default(num, precision);
    }
    return "" + ceil_1.default(num, 3) + units[unit];
};
exports.default = getUnit;
//# sourceMappingURL=getUnit.js.map