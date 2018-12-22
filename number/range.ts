export default (start = 0, end: number, step = 1) => {
  if (Number.isNaN(start) || Number.isNaN(end) || Number.isNaN(step)) {
    throw Error('Range: Argument Error!');
  }

  return Array(...Array(Math.max(end, 0)))
    .map((_, i) => i * step)
    .filter(i => i >= Math.max(start, 0));
};
