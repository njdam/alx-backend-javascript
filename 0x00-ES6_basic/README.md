# ES6 Basics

ES6 (ECMAScript 2015) brought significant enhancements to JavaScript, making the language more expressive and powerful.

Here's a brief overview of some key features introduced in ES6:

let and const:

let allows you to declare variables with block scope, replacing var.
const is used to declare constants that cannot be reassigned.
javascript
Copy code
let variable = 10;
const constantValue = 20;
Arrow Functions:

Arrow functions provide a concise syntax for defining functions.
javascript
Copy code
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
Template Literals:

Template literals allow for string interpolation and multiline strings.
javascript
Copy code
const name = 'John';
const greeting = `Hello, ${name}!`;
Destructuring Assignment:

Destructuring enables extracting values from arrays or objects and assigning them to variables.
javascript
Copy code
// Array destructuring
const [a, b] = [1, 2];

// Object destructuring
const { firstName, lastName } = { firstName: 'John', lastName: 'Doe' };
Default Parameters:

Function parameters can have default values.
javascript
Copy code
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
Rest and Spread Operators:

The spread operator (...) is used to spread elements of an array or object.
The rest operator is used in function parameters to collect arguments into an array.
javascript
Copy code
// Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// Rest operator
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
Classes:

ES6 introduced class syntax for creating objects with a more traditional class-based structure.
javascript
Copy code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person('John', 25);
person.sayHello();
Modules:

ES6 supports the import/export syntax for modularizing code.
javascript
Copy code
// Exporting module
export const add = (a, b) => a + b;

// Importing module
import { add } from './math';
Promises:

Promises provide a cleaner way to work with asynchronous operations.
javascript
Copy code
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    if (/* operation successful */) {
      resolve('Data fetched successfully');
    } else {
      reject('Error fetching data');
    }
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
These are just some of the key features introduced in ES6. The enhancements provided by ES6 have become standard practices in modern JavaScript development.
