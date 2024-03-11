// Reduce - A function that returns the sum of all the student ids
export default function getStudentIdsSum(studentsInfo) {
  const array = [];

  if (Array.isArray(studentsInfo)) {
    for (const student of studentsInfo) {
      array.push(student.id);
    }
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  return 0;
}
