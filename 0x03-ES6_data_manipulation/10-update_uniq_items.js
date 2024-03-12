/**
 * More map data structure - A function that returns an updated map for all items
 * with initial quantity at 1
 */
export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const key of map.keys()) {
      if (map.get(key) === 1) {
        map.set(key, 100);
      }
    }

    return map;
  }

  throw new Error('Cannot process');
}
