export default (timestamp: number, hasTime: boolean = true) => {
  const newDate = new Date();
  newDate.setTime(timestamp);

  const month = newDate.getMonth() + 1;
  let hour = newDate.getHours().toString();
  if (hour.length === 1) {
    hour = `0${hour}`;
  }
  let min = newDate.getMinutes().toString();
  if (min.length === 1) {
    min = `0${min}`;
  }
  const timeString = hasTime
    ? `${month}-${newDate.getDate()} ${hour}:${min}`
    : `${month}-${newDate.getDate()}`;

  return timeString;
};
