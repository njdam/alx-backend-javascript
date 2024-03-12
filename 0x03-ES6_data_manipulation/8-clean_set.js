/* Clean set - A function that returns a string of all the set values
 * that start with a specific string (startString)
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = Array.from(set).map((value) => (
    value.startsWith(startString) ? value.slice(startString.length) : ''
  ));

  const resultString = filteredValues.filter((value) => value !== '').join('-');

  return resultString;
}
