// A Course, Getters, and Setters in Implementation of a class
// named HolbertonCourse.
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = ''; // Initialize with an empty string
    this._length = 0; // Initialize with 0
    this._students = []; // Initialize with an empty array

    // Setters with type verification
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Name Getter
  get name() {
    return this._name;
  }

  // Name Setter
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Length Getter
  get length() {
    return this._length;
  }

  // Length Setter
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a string');
    }
  }

  // Students Getter
  get students() {
    return this._students;
  }

  // Students Setter
  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
