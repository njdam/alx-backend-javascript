// Primitive - Holberton Class
export default class HolbertonClass {
  constructor(size, location) {
    this._size = 0; // Initialisation with 0
    this._location = ''; // Initialisation with Empty string

    // Setters for verifications
    this.size = size;
    this.location = location;
  }

  // Size Getter
  get size() {
    return this._size;
  }

  // Size Setter
  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  // Location Getter
  get location() {
    return this._location;
  }

  // Location Setter
  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  // Return size by a cast into a number and return location by string cast
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }

    if (hint === 'string') {
      return this._location;
    }

    return this;
  }
}
