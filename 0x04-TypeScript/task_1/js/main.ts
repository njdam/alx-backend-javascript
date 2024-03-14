// 1. Let's build a Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional `?`
  location: string;
  [index:string]: any; // Allow any additional attribute
}

// 2. Extending the Teacher class
export interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. Interface for printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 3. Function printTeacher
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// 4. Writing a class named StudentClass

// Interface for the constructor of StudentClass
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class StudentClass
export class StudentClass implements StudentClassInterface {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

// Creation of Student through constructor `ctor`
export function createStudent(ctor: StudentClassConstructor, firstName: string, lastName: string): StudentClassInterface {
  return new ctor(firstName, lastName);
}
