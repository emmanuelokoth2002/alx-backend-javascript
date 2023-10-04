interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  // Get the first letter of the firstName
  const firstLetter = firstName.charAt(0);

  // Combine the first letter, a dot, and the full lastName
  const result = `${firstLetter}. ${lastName}`;

  return result;
}
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}
class StudentClass implements StudentClassConstructor {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
