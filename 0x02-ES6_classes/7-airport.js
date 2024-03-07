// Airport - Implementation of a class Airport
export default class Airport {
  constructor(name, code) {
    this._name = ''; // Initialisation with empty string
    this._code = ''; // Initialisation with empty string

    // Setters for verifications
    this.name = name;
    this.code = code;
  }

  // Name Getter
  get name() {
    return this._name;
  }

  // Name Setter
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Code Getter
  get code() {
    return this._code;
  }

  // code Setter
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Default string description of the class should return the airport code
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
