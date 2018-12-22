export default (array: any[]) => [...Array.of(new Set<any>(array))];
