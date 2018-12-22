"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ceil_1 = tslib_1.__importDefault(require("./ceil"));
exports.ceil = ceil_1.default;
var floor_1 = tslib_1.__importDefault(require("./floor"));
exports.floor = floor_1.default;
var range_1 = tslib_1.__importDefault(require("./range"));
exports.range = range_1.default;
var divide_1 = tslib_1.__importDefault(require("./divide"));
exports.divide = divide_1.default;
var multiply_1 = tslib_1.__importDefault(require("./multiply"));
exports.multiply = multiply_1.default;
var getUnit_1 = tslib_1.__importDefault(require("./getUnit"));
exports.getUnit = getUnit_1.default;
var getFixedValue_1 = tslib_1.__importDefault(require("./getFixedValue"));
exports.getFixedValue = getFixedValue_1.default;
var PrecisionType;
(function (PrecisionType) {
    PrecisionType[PrecisionType["TokenPrice"] = 8] = "TokenPrice";
    PrecisionType[PrecisionType["FiatPrice"] = 2] = "FiatPrice";
    PrecisionType[PrecisionType["Increase"] = 3] = "Increase";
})(PrecisionType = exports.PrecisionType || (exports.PrecisionType = {}));
//# sourceMappingURL=index.js.map