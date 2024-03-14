const { Teacher, Directors, createStudent, StudentClass } = require('./main');

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Create a student using createStudent function
const student = createStudent(StudentClass, 'John', 'Doe');

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Call methods of the student object
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
