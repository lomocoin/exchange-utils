export default <T>(array: T[]) => [...Array.of(new Set<T>(array))];
