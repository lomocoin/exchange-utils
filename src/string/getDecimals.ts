/**
 * Get how many decimals this string or number has
 */
export default (value: string | number) => {
  const [, decimal] = String(value).split('.');
  return decimal ? decimal.length : 0;
};
