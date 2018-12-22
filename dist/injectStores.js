"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.default = (function (inject) { return function () {
    var storeNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        storeNames[_i] = arguments[_i];
    }
    return inject(function (_a) {
        var store = _a.store;
        return storeNames.reduce(function (s, name) {
            var _a;
            return (tslib_1.__assign({}, s, (_a = {},
                _a[name] = store[name],
                _a)));
        }, {
            store: store,
        });
    });
}; });
//# sourceMappingURL=injectStores.js.map