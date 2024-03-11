/* TypeArrays - A function that returns a new ArrayBuffer
 * with an Int8 value at a specific position
 */
export default function createInt8TypedArray(length, position, value) {
  // Handlering the index error
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Creating New Array buffer
  const buffer = new ArrayBuffer(length);
  // Setting buffer as an Int8 array and assign it to a value
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;

  return new DataView(buffer);
}
