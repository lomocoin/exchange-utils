import { getDecimals, getNumberFromString, isEqualString } from '../';

describe('String', () => {
  test('getDecimals: get Decimals of a numric string', () => {
    expect(getDecimals('1.0', 1));
    expect(getDecimals('1.01', 2));
    expect(getDecimals('1.', 0));
    expect(getDecimals('1100', 0));
  });

  describe('GetNumberFromString: Safely get a number out of a input string', () => {
    test('Invalid number (word, negative numbers, etc)', () => {
      expect(getNumberFromString('hello')).toBe(-1);
      expect(getNumberFromString('1.23dddd')).toBe(-1);
      expect(getNumberFromString('-200')).toBe(-1);
      expect(getNumberFromString('-1')).toBe(-1);
    });
    test('European separator', () => {
      expect(getNumberFromString('1,10')).toBe(1.1);
      expect(getNumberFromString('1000,00')).toBe(1000);
    });
    test('Inputs numbers', () => {
      expect(getNumberFromString('200')).toBe(200);
      expect(getNumberFromString('1.')).toBe(1);
      expect(getNumberFromString('1.000011100101')).toBe(1.000011100101);
      expect(getNumberFromString('12131.21312991200000')).toBe(12131.213129912);
    });
  });

  describe('isEqualString: ', () => {
    test('return false if one of argument is null or undefinded', () => {
      expect(isEqualString('aaa', null)).toBe(false);
      expect(isEqualString(null, 'bbb')).toBe(false);
      expect(isEqualString(null, null)).toBe(false);
    });

    test('return the string if two args are equal', () => {
      expect(isEqualString('aaa', 'bbb').toBe(false));
      expect(isEqualString('aaa', 'aaa').toBe(true));
      expect(isEqualString('111', 111).toBe(true));
      expect(isEqualString('222', 111).toBe(false));
    });
  });
});
