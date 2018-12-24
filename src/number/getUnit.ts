import ceil from './ceil';

const units = ['', 'K', 'M', 'B'];

const getUnit = (
  num: number | undefined,
  precision: number,
  unit: number = 0,
): string | undefined => {
  if (!num) {
    return undefined;
  } else if (unit > units.length) {
    throw new Error(`Number: ${num}${units[unit]} out of range.`);
  } else if (num >= 1000) {
    return getUnit(num / 1000, precision, unit + 1);
  } else if (unit === 0) {
    return `${ceil(num, precision)}`;
  }
  return `${ceil(num, 3)}${units[unit]}`;
};

export default getUnit;
