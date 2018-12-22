const stringToBool = (val: string | number) => {
  var result;
  if (val === 'false' || val === 'f' || val === '0' || val === 0) {
    result = false;
  } else if (val === 'true' || val === 't' || val === '1' || val === 1) {
    result = true;
  } else {
    result = null;
  }
  return result;
};

export { stringToBool };
