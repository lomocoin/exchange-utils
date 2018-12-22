import moment from './moment';

/**
 * From a Timestamp in milliseconds get the time
 */
export default (timestamp: number, timeFormat: string = 'HH:mm:ss') => {
  const dateToCompare = new Date(timestamp);

  return moment(dateToCompare).format(timeFormat);
};
