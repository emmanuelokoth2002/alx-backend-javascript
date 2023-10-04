import { Subjects } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create and export constants
export const cpp = new Subjects.Cpp();
export const java = new Java();
export const react = new React();

// Create a Teacher object with experienceTeachingC
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Set cTeacher as the teacher for Cpp subject
cpp.setTeacher(cTeacher);

// Log and call methods for Cpp subject
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Set cTeacher as the teacher for Java subject
java.setTeacher(cTeacher);

// Log and call methods for Java subject
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Set cTeacher as the teacher for React subject
react.setTeacher(cTeacher);

// Log and call methods for React subject
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
