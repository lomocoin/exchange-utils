"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// check password format
var checkPassword = function (str) {
    //const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d*]{8,}/;
    var regexp = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d*]{8,20}$/;
    return regexp.test(str);
};
exports.checkPassword = checkPassword;
// check email format
var checkEmail = function (str) {
    var regexp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/i;
    return regexp.test(str);
};
exports.checkEmail = checkEmail;
// check capital password
var checkCapital = function (str) {
    var regexp = /^[a-zA-Z0-9]{8,20}$/;
    return regexp.test(str);
};
exports.checkCapital = checkCapital;
var checkMatch = function (str1, str2) {
    var match = typeof str1 == 'string' && typeof str2 == 'string' && str1 === str2
        ? true
        : false;
    return match;
};
exports.checkMatch = checkMatch;
var hasChinese = function (str) {
    var regexp = /[\u4e00-\u9fa5]/;
    return regexp.test(str);
};
exports.hasChinese = hasChinese;
//# sourceMappingURL=stringValid.js.map