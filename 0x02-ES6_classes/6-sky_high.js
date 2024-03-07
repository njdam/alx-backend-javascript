// Inheritance: Implementation of a class named SkyHighBuilding
// that extends from Building.
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = 0; // Initialisation with 0

    // Setter for verification
    this._floors = floors;
  }

  // Floors Getter
  get floors() {
    return this._floors;
  }

  // Floors Setter
  set floors(value) {
    if (typeof value === 'number') {
      this._floors = value;
    } else {
      throw new TypeError('Floors must be a number');
    }
  }

  evacuationWarningMessage() {
    const NUMBER_OF_FLOORS = this._floors;
    return (`Evacuate slowly the ${NUMBER_OF_FLOORS} floors`);
  }
}
