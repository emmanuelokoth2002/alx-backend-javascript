import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  set range(value) {
    this._range = value;
  }

  get range() {
    return this.range;
  }

  cloneCar() {
    const Clone = super.constructor[Symbol.species];
    return new Clone();
  }
}
