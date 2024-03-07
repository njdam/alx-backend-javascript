// Methods, static methods, computed methods names..... MONEY
export default class Currency {
  constructor(code, name) {
    this._code = ''; // Initialise with Empty String
    this._name = ''; // Initialised with Empty String

    // Setters for verifications
    this.code = code;
    this.name = name;
  }

  // Code Getter
  get code() {
    return this._code;
  }

  // Code Setter
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
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

  // Method to display full currency
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
