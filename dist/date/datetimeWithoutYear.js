"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (timestamp, hasTime) {
    if (hasTime === void 0) { hasTime = true; }
    var newDate = new Date();
    newDate.setTime(timestamp);
    var month = newDate.getMonth() + 1;
    var hour = newDate.getHours().toString();
    if (hour.length === 1) {
        hour = "0" + hour;
    }
    var min = newDate.getMinutes().toString();
    if (min.length === 1) {
        min = "0" + min;
    }
    var timeString = hasTime
        ? month + "-" + newDate.getDate() + " " + hour + ":" + min
        : month + "-" + newDate.getDate();
    return timeString;
});
//# sourceMappingURL=datetimeWithoutYear.js.map