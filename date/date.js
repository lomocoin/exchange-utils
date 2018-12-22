"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("./moment"));
exports.default = (function (timestamp, dateFormat) {
    if (dateFormat === void 0) { dateFormat = 'L'; }
    var dateToCompare = new Date(timestamp);
    return moment_1.default(dateToCompare).format(dateFormat);
});
//# sourceMappingURL=date.js.map