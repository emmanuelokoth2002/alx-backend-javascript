// 2-get_students_by_loc.js

// Create a function that takes a list of students and a city as parameters
function getStudentsByLocation(studentList, city) {
  // Use the filter function to select students with the specified city
  const studentsInCity = studentList.filter(student => student.location === city);

  return studentsInCity;
}

// Export the function
export default getStudentsByLocation;
