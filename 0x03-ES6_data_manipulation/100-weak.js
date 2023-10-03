// 100-weak.js

// Create a WeakMap to track the number of times queryAPI is called for each endpoint
const weakMap = new WeakMap();

// Create a function named queryAPI that accepts an endpoint argument
function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);

    // Increment the count
    weakMap.set(endpoint, count + 1);

    // Check if the count is greater than or equal to 5
    if (count + 1 >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not in the weakMap, initialize it with a count of 1
    weakMap.set(endpoint, 1);
  }
}

// Export the weakMap and the queryAPI function
export { weakMap, queryAPI };
