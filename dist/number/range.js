"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (start, end, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    if (Number.isNaN(start) || Number.isNaN(end) || Number.isNaN(step)) {
        throw Error('Range: Argument Error!');
    }
    return Array.apply(void 0, Array(Math.max(end, 0))).map(function (_, i) { return i * step; })
        .filter(function (i) { return i >= Math.max(start, 0); });
});
//# sourceMappingURL=range.js.map