type InputType = number | string | undefined;

/**
 * Convert two value to string and compare it to see if are the same
 */
export default (firstId: InputType, secondId: InputType) =>
  Boolean(firstId && secondId && firstId.toString() === secondId.toString());
