// A Subject class in the same namespace named Subjects
namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
