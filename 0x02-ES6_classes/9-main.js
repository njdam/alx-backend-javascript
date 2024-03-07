/* eslint-disable jest/require-hook */

// Dict of listOfStudents require {} to be imported for .map to be used
import { listOfStudents } from './9-hoisting';

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
  (student) => student.fullStudentDescription,
);

console.log(listPrinted);

/* eslint-disable jest/require-hook */
