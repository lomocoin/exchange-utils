"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require("./");
var getNestedObject_1 = tslib_1.__importDefault(require("./getNestedObject"));
exports.default = (function (fieldName, direction) {
    if (direction === void 0) { direction = _1.SortDirection.Asc; }
    return function (itemA, itemB) {
        var fieldA = getNestedObject_1.default(itemA, fieldName);
        var fieldB = getNestedObject_1.default(itemB, fieldName);
        if (direction === _1.SortDirection.Asc) {
            return fieldA.localeCompare(fieldB);
        }
        return fieldB.localeCompare(fieldA);
    };
});
//# sourceMappingURL=sortString.js.map