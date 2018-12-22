export declare enum NumberFormatType {
    Price = 0,
    Quantity = 1
}
declare const _default: (value: string, fixed: number, type: NumberFormatType) => string | false;
/**
 * Return a input number formatted,
 * Return False if is not a valid number
 */
export default _default;
