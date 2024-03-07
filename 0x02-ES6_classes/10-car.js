// Vroom - Implementation of a class named Car
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Static Getter `Symbol.species` used when creating a new instance of an object
  static get [Symbol.species]() {
    return this;
  }

  // Clone Car method creates a new instance of the class specified
  // by Symbol.species using new Species()
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
