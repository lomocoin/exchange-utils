"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("./moment"));
var parseLocale_1 = tslib_1.__importDefault(require("./parseLocale"));
var date_1 = tslib_1.__importDefault(require("./date"));
var dateAgo_1 = tslib_1.__importDefault(require("./dateAgo"));
var time_1 = tslib_1.__importDefault(require("./time"));
var datetime_1 = tslib_1.__importDefault(require("./datetime"));
var datetimeWithoutYear_1 = tslib_1.__importDefault(require("./datetimeWithoutYear"));
exports.default = {
    moment: moment_1.default,
    parseLocale: parseLocale_1.default,
    date: date_1.default,
    dateAgo: dateAgo_1.default,
    time: time_1.default,
    datetime: datetime_1.default,
    datetimeWithoutYear: datetimeWithoutYear_1.default,
};
//# sourceMappingURL=index.js.map