// check password format
const checkPassword = (str: string) => {
  //const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d*]{8,}/;
  const regexp = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d*]{8,20}$/;
  return regexp.test(str);
};

// check email format
const checkEmail = (str: string) => {
  const regexp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/i;
  return regexp.test(str);
};
// check capital password
const checkCapital = (str: string) => {
  const regexp = /^[a-zA-Z0-9]{8,20}$/;
  return regexp.test(str);
};

const checkMatch = (str1: string, str2: string) => {
  const match =
    typeof str1 == 'string' && typeof str2 == 'string' && str1 === str2
      ? true
      : false;
  return match;
};

const hasChinese = (str: string) => {
  const regexp = /[\u4e00-\u9fa5]/;
  return regexp.test(str);
};

export { checkPassword, checkEmail, checkCapital, checkMatch, hasChinese };
