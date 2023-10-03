// 3-get_ids_sum.js

// Create a function that takes a list of students as a parameter
function getStudentIdsSum(studentList) {
  // Use the reduce function to calculate the sum of all student IDs
  const sum = studentList.reduce((accumulator, student) => accumulator + student.id, 0);

  return sum;
}

// Export the function
export default getStudentIdsSum;
