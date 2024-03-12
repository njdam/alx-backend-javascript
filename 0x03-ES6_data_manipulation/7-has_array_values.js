/* More set data structure - A function that returns a boolean
 * if all the elements in the array exist within the set
 */
export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new TypeError('First Argument must be a set');
  } else if (!Array.isArray(array)) {
    throw new TypeError('Second Argument must be an array');
  }

  return array.every((element) => set.has(element));
}
