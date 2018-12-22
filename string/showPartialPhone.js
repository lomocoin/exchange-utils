"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showPartialPhone(value, showFrom, showEnd) {
    if (showFrom === void 0) { showFrom = 8; }
    if (showEnd === void 0) { showEnd = 5; }
    if (!value) {
        return '';
    }
    return (value.slice(0, showFrom) +
        '*'.repeat(value.length - showEnd - showFrom) +
        value.slice(-showEnd));
}
exports.default = showPartialPhone;
//# sourceMappingURL=showPartialPhone.js.map