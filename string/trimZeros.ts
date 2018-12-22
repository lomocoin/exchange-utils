export default (value: string) => value.replace(/(?=^\d)0+|\.0*$|\.$/g, '');
