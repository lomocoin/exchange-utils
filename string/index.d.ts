import showPartialPhone from './showPartialPhone';
import showPartialEmail from './showPartialEmail';
declare const _default: {
    getNumberFromString: (numberString: string, defaultIfInvalid?: number) => number;
    getDecimals: (value: string | number) => number;
    parsePrice: (numberString: string, maxDecimals?: number) => string;
    numberFormat: (value: string, fixed: number, type: import("./numberFormat").NumberFormatType) => string | false;
    isEqualString: (firstId: string | number | undefined, secondId: string | number | undefined) => boolean;
    trim: (value: string) => string;
    showPartialPhone: typeof showPartialPhone;
    showPartialEmail: typeof showPartialEmail;
    checkCapital: (str: string) => boolean;
    checkEmail: (str: string) => boolean;
    checkPassword: (str: string) => boolean;
    checkMatch: (str1: string, str2: string) => boolean;
    hasChinese: (str: string) => boolean;
    stringToBool: (val: string | number) => boolean | null;
};
export default _default;
