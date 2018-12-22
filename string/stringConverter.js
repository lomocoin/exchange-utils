"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringToBool = function (val) {
    var result;
    if (val === 'false' || val === 'f' || val === '0' || val === 0) {
        result = false;
    }
    else if (val === 'true' || val === 't' || val === '1' || val === 1) {
        result = true;
    }
    else {
        result = null;
    }
    return result;
};
exports.stringToBool = stringToBool;
//# sourceMappingURL=stringConverter.js.map