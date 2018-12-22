import moment from './moment';

export default (timestamp: number, dateFormat: string = 'L') => {
  const dateToCompare = new Date(timestamp);

  return moment(dateToCompare).format(dateFormat);
};
