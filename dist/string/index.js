"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var getNumberFromString_1 = tslib_1.__importDefault(require("./getNumberFromString"));
var getDecimals_1 = tslib_1.__importDefault(require("./getDecimals"));
var numberFormat_1 = tslib_1.__importDefault(require("./numberFormat"));
var parsePrice_1 = tslib_1.__importDefault(require("./parsePrice"));
var isEqualString_1 = tslib_1.__importDefault(require("./isEqualString"));
var trim_1 = tslib_1.__importDefault(require("./trim"));
var showPartialPhone_1 = tslib_1.__importDefault(require("./showPartialPhone"));
var showPartialEmail_1 = tslib_1.__importDefault(require("./showPartialEmail"));
var stringValid_1 = require("./stringValid");
var stringConverter_1 = require("./stringConverter");
exports.default = {
    getNumberFromString: getNumberFromString_1.default,
    getDecimals: getDecimals_1.default,
    parsePrice: parsePrice_1.default,
    numberFormat: numberFormat_1.default,
    isEqualString: isEqualString_1.default,
    trim: trim_1.default,
    showPartialPhone: showPartialPhone_1.default,
    showPartialEmail: showPartialEmail_1.default,
    checkCapital: stringValid_1.checkCapital,
    checkEmail: stringValid_1.checkEmail,
    checkPassword: stringValid_1.checkPassword,
    checkMatch: stringValid_1.checkMatch,
    hasChinese: stringValid_1.hasChinese,
    stringToBool: stringConverter_1.stringToBool,
};
//# sourceMappingURL=index.js.map