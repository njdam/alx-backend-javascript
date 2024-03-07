// A Building by Implementation of a class named Building
export default class Building {
  constructor(sqft) {
    this._sqft = 0; // Initialisation with 0

    // Setter for felification
    this.sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  // sqft Getter
  get sqft() {
    return this._sqft;
  }

  // sqft Setter
  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }
}
