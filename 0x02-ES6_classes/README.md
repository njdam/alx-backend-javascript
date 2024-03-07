# ES6 Classes

## Overview

This project focuses on understanding and implementing ES6 classes in JavaScript. It covers fundamental concepts of Object-Oriented Programming (OOP), highlighting ES6 features such as class declaration, constructor, methods, inheritance, and static methods.

**Author:** Johann Kerbrat, Engineering Manager at Uber Works  
**Weight:** 1  
**Project Duration:** March 7, 2024, 6:00 AM, to March 8, 2024, 6:00 AM  
**Checker Release:** March 7, 2024, 12:00 PM  
**Auto Review:** An auto review will be launched at the deadline.

## Resources

Read or watch:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming)

## Learning Objectives

By the end of this project, you are expected to be able to explain to anyone, without the help of Google:

1. How to define a Class
2. How to add methods to a class
3. Why and how to add a static method to a class
4. How to extend a class from another
5. Metaprogramming and symbols

## Examples

### 1. Class Declaration:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

// Usage
const myAnimal = new Animal("Tom");
console.log(myAnimal.name); // Output: Tom
myAnimal.makeSound(); // Output: Generic animal sound
```


### 2. Class Constructor:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Usage
const john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John and I am 30 years old.
```


### 3. Class Methods:

```javascript
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

// Usage
const myCalc = new Calculator();
console.log(myCalc.add(5, 3)); // Output: 8
console.log(myCalc.subtract(8, 3)); // Output: 5
```


### 4. Inheritance:

```javascript
class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  makeSound() {
    console.log("Meow!");
  }
}

// Usage
const myCat = new Cat("Whiskers", "Gray");
console.log(myCat.name); // Output: Whiskers
myCat.makeSound(); // Output: Meow!
```


### 5. Static Methods:

```javascript
class MathUtils {
  static square(x) {
    return x * x;
  }
}

// Usage
console.log(MathUtils.square(4)); // Output: 16
```


### Conclusion

ES6 classes provide a more structured and familiar syntax for creating object-oriented code in JavaScript. They offer a way to organize code, promote code reusability through inheritance, and improve the overall readability of your programs.
