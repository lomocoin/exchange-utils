"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("./moment"));
/**
 * From a Timestamp in milliseconds get the time
 */
exports.default = (function (timestamp, timeFormat) {
    if (timeFormat === void 0) { timeFormat = 'HH:mm:ss'; }
    var dateToCompare = new Date(timestamp);
    return moment_1.default(dateToCompare).format(timeFormat);
});
//# sourceMappingURL=time.js.map