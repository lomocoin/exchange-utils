"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get how many decimals this string or number has
 */
exports.default = (function (value) {
    var _a = String(value).split('.'), decimal = _a[1];
    return decimal ? decimal.length : 0;
});
//# sourceMappingURL=getDecimals.js.map