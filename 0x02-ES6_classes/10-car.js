const CAR_ATTRIBUTES = Symbol("CarAttributes");

export default class Car {
  constructor(brand, motor, color) {
    this[CAR_ATTRIBUTES] = {
      brand,
      motor,
      color,
    };
  }

  cloneCar() {
    const { brand, motor, color } = this[CAR_ATTRIBUTES];
    return new this.constructor(brand, motor, color);
  }
}
