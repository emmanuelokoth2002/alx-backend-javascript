// 2-get_students_by_loc.js

// Create a function that takes a list of students and a city as parameters
export default function getStudentsByLocation(ListStudents, city) {
  if (Array.isArray(ListStudents) && (typeof city === 'string')) {
    return ListStudents.filter((student) => student.location === city);
  }
  return [];
}
