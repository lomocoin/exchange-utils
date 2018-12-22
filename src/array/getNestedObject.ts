export default function getNestedObject(
  nestedObj: { [key: string]: any },
  path: string,
) {
  return path
    .split('.')
    .reduce(
      (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
      nestedObj,
    );
}
