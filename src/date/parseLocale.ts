export default (deviceLocale: string) => {
  switch (deviceLocale) {
    // USA
    case 'en-US':
      return 'en'; // American: month-day-year (default in Moment)
    case 'zh':
    case 'zh-CN':
    case 'zh-TW':
    case 'zh-hans-tw':
    case 'zh-hans':
    case 'zh-Hans-CN':
    case 'zh-Hans-US':
    case 'zh-Hant-MO':
    case 'zh-Hant-US':
    case 'zh-Hant-TW':
    case 'zh-Hant-HK':
      return 'zh-cn';
    // 日语
    case 'ja-JP':
    case 'ja-US':
    case 'ja-CN':
      return 'ja';
    // 韩语
    case 'ko-KR':
    case 'ko-US':
    case 'ko-CN':
      return 'ko';
    // Europe
    default:
      return 'en-gb'; // British: day-month-year (used in Europe and Middle East)
  }
};
