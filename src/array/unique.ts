export default <T>(array: T[]): T[] => [...Array.from(new Set<T>(array))];
