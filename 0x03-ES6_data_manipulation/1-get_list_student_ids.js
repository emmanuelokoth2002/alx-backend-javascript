// 1-get_list_student_ids.js

// Create a function that takes an array of objects as an argument
function getListStudentIds(studentList) {
  // Check if the argument is an array
  if (!Array.isArray(studentList)) {
    return [];
  }

  // Use the map function to extract the 'id' property from each object
  const ids = studentList.map(student => student.id);

  return ids;
}

// Export the function
export default getListStudentIds;
