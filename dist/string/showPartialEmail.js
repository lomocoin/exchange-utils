"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showPartialEmail(value, hideMax) {
    if (hideMax === void 0) { hideMax = 4; }
    if (!value) {
        return '';
    }
    var atPos = value.indexOf('@');
    return (value.slice(0, atPos - hideMax) + '*'.repeat(hideMax) + value.slice(atPos));
}
exports.default = showPartialEmail;
//# sourceMappingURL=showPartialEmail.js.map