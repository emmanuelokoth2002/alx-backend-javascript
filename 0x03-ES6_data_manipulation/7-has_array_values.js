// 7-has_array_values.js

// Create a function that takes a set and an array as arguments and returns a boolean
function hasValuesFromArray(set, array) {
  // Use the `every` method to check if all elements in the array exist in the set
  return array.every(element => set.has(element));
}

// Export the function
export default hasValuesFromArray;
