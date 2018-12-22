"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var time_1 = tslib_1.__importDefault(require("./time"));
var date_1 = tslib_1.__importDefault(require("./date"));
/**
 * From a Timestamp in milliseconds get the date with time
 */
exports.default = (function (timestamp) {
    // TODO: handle given format 'YYYY-MM-DD HH:mm'
    return date_1.default(timestamp) + " " + time_1.default(timestamp, 'HH:mm:ss');
});
//# sourceMappingURL=datetime.js.map