/* Clean set - A function that returns a string of all the set values
 * that start with a specific string (startString)
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || set.size === 0) {
    throw new TypeError('First argument must be a non-empty set');
  } else if (typeof startString !== 'string') {
    throw new TypeError('Second argument must be a string');
  } else if (startString === '') {
    return '';
  }

  const filteredValues = Array.from(set).map((value) => value.startsWith(startString) ? value.slice(startString.length) : '');
  const resultString = filteredValues.filter(value => value !== '').join('-');

  return resultString;
}
