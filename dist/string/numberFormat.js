"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var trim_1 = tslib_1.__importDefault(require("./trim"));
var floor_1 = tslib_1.__importDefault(require("../number/floor"));
var NumberFormatType;
(function (NumberFormatType) {
    NumberFormatType[NumberFormatType["Price"] = 0] = "Price";
    NumberFormatType[NumberFormatType["Quantity"] = 1] = "Quantity";
})(NumberFormatType = exports.NumberFormatType || (exports.NumberFormatType = {}));
/**
 * Return a input number formatted,
 * Return False if is not a valid number
 */
exports.default = (function (value, fixed, type) {
    if (typeof value === 'string' && trim_1.default(value) === '') {
        return '';
    }
    // Check if is a valid positive number
    if (!/^\d*$/.test(value.replace('.', ''))) {
        return false;
    }
    var valueString = (typeof value === 'string'
        ? value
        : floor_1.default(value, 14)).split('.');
    var integer = valueString[0];
    var decimal = valueString[1];
    if (Number.parseInt(integer, 10) < 0) {
        return '0';
    }
    // TODO: here maybe we should just truncate the max value
    if (type === NumberFormatType.Price &&
        Number.parseInt(integer, 10) >= Math.pow(10, 8)) {
        return '99999999';
    }
    if (type === NumberFormatType.Price &&
        Number.parseInt(integer, 10) >= Math.pow(10, 10)) {
        return '9999999999';
    }
    if (decimal && decimal.length > fixed) {
        return floor_1.default(Number.parseFloat(integer + "." + decimal), fixed);
    }
    if (typeof decimal !== 'undefined') {
        return integer + "." + decimal;
    }
    return Number.parseFloat(value).toString();
});
//# sourceMappingURL=numberFormat.js.map