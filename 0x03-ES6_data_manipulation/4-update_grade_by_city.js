export default function updateStudentGradeByCity(students, city, newGrades) {
  let studentsAtCity = [];

  if (Array.isArray(students) && city && Array.isArray(newGrades)) {
    studentsAtCity = students
      /* The filter method returns an array containing all elements */
      .filter((student) => student.location === city)
      .map((student) => {
        /* The find method is used, which returns first element in array */
        const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
        return {
          ...student,
          grade: matchingGrade ? matchingGrade.grade : 'N/A',
        };
      });
  }

  return studentsAtCity;
}
