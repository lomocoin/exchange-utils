import moment from './moment';
declare const _default: {
    moment: typeof moment;
    parseLocale: (deviceLocale: string) => "en" | "zh-cn" | "ja" | "ko" | "en-gb";
    date: (timestamp: number, dateFormat?: string) => string;
    dateAgo: (timestamp: number, todayText?: string | undefined, yesterdayText?: string | undefined) => string;
    time: (timestamp: number, timeFormat?: string) => string;
    datetime: (timestamp: number) => string;
    datetimeWithoutYear: (timestamp: number, hasTime?: boolean) => string;
};
export default _default;
