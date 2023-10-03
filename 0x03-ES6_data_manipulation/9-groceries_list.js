// 9-groceries_list.js

// Create a function that returns a Map of groceries with items and quantities
function groceriesList() {
  // Create a new Map
  const groceryMap = new Map();

  // Add items and quantities to the Map
  groceryMap.set('Apples', 10);
  groceryMap.set('Tomatoes', 10);
  groceryMap.set('Pasta', 1);
  groceryMap.set('Rice', 1);
  groceryMap.set('Banana', 5);

  return groceryMap;
}

// Export the function
export default groceriesList;
