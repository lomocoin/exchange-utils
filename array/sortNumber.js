"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
exports.default = (function (fieldName, direction) {
    if (direction === void 0) { direction = _1.SortDirection.Asc; }
    return function (itemA, itemB) {
        if (direction === _1.SortDirection.Asc) {
            return itemA[fieldName] - itemB[fieldName]; // For ascending sort
        }
        return itemB[fieldName] - itemA[fieldName]; // For descending sort
    };
});
//# sourceMappingURL=sortNumber.js.map