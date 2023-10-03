// 10-update_uniq_items.js

// Create a function that updates the quantity of unique items in a map
function updateUniqueItems(groceryMap) {
  // Check if the argument is a map
  if (!(groceryMap instanceof Map)) {
    throw new Error("Cannot process");
  }

  // Iterate through the map and update quantities for items with an initial quantity of 1
  groceryMap.forEach((quantity, item) => {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  });
}

// Export the function
export default updateUniqueItems;
