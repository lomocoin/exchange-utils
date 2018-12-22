import time from './time';
import date from './date';

/**
 * From a Timestamp in milliseconds get the date with time
 */
export default (timestamp: number) =>
  // TODO: handle given format 'YYYY-MM-DD HH:mm'
  `${date(timestamp)} ${time(timestamp, 'HH:mm:ss')}`;
