"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var big_js_1 = tslib_1.__importDefault(require("big.js"));
var floor_1 = tslib_1.__importDefault(require("./floor"));
function multiply(valueA, valueB, precision, trimZeros) {
    if (trimZeros === void 0) { trimZeros = false; }
    var bigValueA = new big_js_1.default(valueA);
    var result = bigValueA.mul(valueB);
    return floor_1.default(Number(result.toFixed(precision)), precision, trimZeros);
}
exports.default = multiply;
//# sourceMappingURL=multiply.js.map