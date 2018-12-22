import moment from './moment';

/**
 * From a Timestamp in milliseconds get the date with today and yesterday ad todayText/yesterdayText
 */
export default (
  timestamp: number,
  todayText?: string,
  yesterdayText?: string,
) => {
  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  const dateToCompare = new Date(timestamp);

  if (!!todayText && moment(dateToCompare).isSame(today, 'day')) {
    return todayText;
  } else if (yesterdayText && moment(dateToCompare).isSame(yesterday, 'day')) {
    return yesterdayText;
  }
  return dateToCompare.toLocaleDateString();
};
