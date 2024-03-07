// EVCar - Implementation of a class named EVCar that extends the Car class
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // When cloneCar is called on a EVCar object, the object returned
  // should be an instance of Car instead of EVCar.
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
