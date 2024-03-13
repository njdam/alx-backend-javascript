// Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

/**
 * Weak link data structure - A function which track within the weakMap
 * the number of times queryAPI is called for each endpoint
 *
 * @param {{
 *   protocol: 'http',
 *   name: 'getUsers',
 * }} endpoint - an endpoint argument
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
