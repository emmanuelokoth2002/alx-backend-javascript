// 5-building.js

class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for 'sqft'
  get sqft() {
    return this._sqft;
  }

  // Declare an abstract method
  evacuationWarningMessage() {
    throw new Error('Method evacuationWarningMessage must be implemented.');
  }
}

export default Building;
