// 1-get_list_student_ids.js

// Create a function that takes an array of objects as an argument
export default function getListStudentIds(listStudents) {
  if (Array.isArray(listStudents)) {
    return listStudents.map((student) => student.id);
  }
  return [];
}
