// Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

/**
 * Weak link data structure - A function which track within the weakMap
 * the number of times queryAPI is called for each endpoint
 *
 * @param {
 *   protocol: 'http',
 *   name: 'getUsers',
 * } endpoint - an endpoint argument
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, count + 1);
    }
  }
}
