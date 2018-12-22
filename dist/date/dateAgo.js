"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("./moment"));
/**
 * From a Timestamp in milliseconds get the date with today and yesterday ad todayText/yesterdayText
 */
exports.default = (function (timestamp, todayText, yesterdayText) {
    var today = moment_1.default();
    var yesterday = moment_1.default().subtract(1, 'day');
    var dateToCompare = new Date(timestamp);
    if (!!todayText && moment_1.default(dateToCompare).isSame(today, 'day')) {
        return todayText;
    }
    else if (yesterdayText && moment_1.default(dateToCompare).isSame(yesterday, 'day')) {
        return yesterdayText;
    }
    return dateToCompare.toLocaleDateString();
});
//# sourceMappingURL=dateAgo.js.map