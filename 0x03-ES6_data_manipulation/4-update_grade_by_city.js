// 4-update_grade_by_city.js

// Create a function that takes a list of students, a city, and newGrades as parameters
function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to select students in the specified city
  const studentsInCity = studentList.filter(student => student.location === city);

  // Use map to update their grades
  const updatedStudents = studentsInCity.map(student => {
    // Find the corresponding grade object in newGrades, or use 'N/A' if not found
    const gradeObject = newGrades.find(grade => grade.studentId === student.id);
    const grade = gradeObject ? gradeObject.grade : 'N/A';

    // Create a new object with updated grade
    return {
      ...student,
      grade,
    };
  });

  return updatedStudents;
}

// Export the function
export default updateStudentGradeByCity;
