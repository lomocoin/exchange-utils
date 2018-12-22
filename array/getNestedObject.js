"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNestedObject(nestedObj, path) {
    return path
        .split('.')
        .reduce(function (obj, key) { return (obj && obj[key] !== 'undefined' ? obj[key] : undefined); }, nestedObj);
}
exports.default = getNestedObject;
//# sourceMappingURL=getNestedObject.js.map