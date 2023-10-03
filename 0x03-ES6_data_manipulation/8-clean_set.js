// 8-clean_set.js

// Create a function that takes a set and a startString as arguments and returns a string
function cleanSet(set, startString) {
  let result = '';

  // Iterate through the set using the forEach method
  set.forEach(value => {
    // Check if the value starts with the specified startString
    if (value.startsWith(startString)) {
      // Append the rest of the string to the result, separated by '-'
      result += value.substring(startString.length) + '-';
    }
  });

  // Remove the trailing '-' if it exists
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}

// Export the function
export default cleanSet;
