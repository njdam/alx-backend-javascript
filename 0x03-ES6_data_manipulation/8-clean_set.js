/* Clean set - A function that returns a string of all the set values
 * that start with a specific string (startString)
 */
export default function cleanSet(set, startString) {
  const filteredValues = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.slice(startString.length);
      if (valueSubStr && valueSubStr !== value) {
        filteredValues.push(valueSubStr);
      }
    }
  }

  const resultString = filteredValues.join('-');

  return resultString;
}
