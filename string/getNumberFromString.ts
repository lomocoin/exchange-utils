export default (numberString: string, defaultIfInvalid: number = -1) => {
  // If numberString is not defined, return defaultIfInvalid
  if (!numberString) {
    return defaultIfInvalid;
  }

  // Handle European decimal separator
  const value = numberString.replace(/,/g, '.');

  // RegEx Method: If numberString was not a number, return defaultIfInvalid
  if (!/^\d*$/.test(value.replace('.', ''))) {
    return defaultIfInvalid;
  }

  // Number NaN method:
  // if (!isFinite(Number(value))) {
  //   return defaultIfInvalid;
  // }

  return Number(value);
};
