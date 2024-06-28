----
0x02. ES6 Classes

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Project Structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Examples](#examples)
8. [Resources](#resources)

## Introduction

Welcome to the `0x02. ES6 Classes` project! This repository contains a series of tasks and examples to help you understand and master ES6 classes in JavaScript. ES6 classes provide a more declarative and syntactic sugar over JavaScript's existing prototype-based inheritance system.

## Learning Objectives

By the end of this project, you should be able to:
- Understand the syntax and features of ES6 classes.
- Create and use class methods and properties.
- Implement inheritance using ES6 classes.
- Utilize static methods and properties.
- Work with getters and setters.
- Understand and implement class constructors.
- Understand the `super` keyword and its usage in inheritance.

## Project Structure

```plaintext
├── 0x02_es6_classes
|   ├── 0-classroom.js
|   ├── 1-classroom.js
|   ├── 2-student.js
|   ├── 3-student_hogwarts.js
|   ├── 4-immutable_student.js
|   ├── 5-currency.js
|   ├── 6-pricing.js
|   ├── 7-airline.js
|   ├── 8-airline.js
|   ├── README.md
|   └── package.json
```

### File Descriptions

- `0-classroom.js`: Introduction to ES6 classes with a simple example.
- `1-classroom.js`: Extending the classroom example with additional methods.
- `2-student.js`: Creating a Student class with properties and methods.
- `3-student_hogwarts.js`: Demonstrating inheritance by extending the Student class.
- `4-immutable_student.js`: Implementing immutable objects using ES6 classes.
- `5-currency.js`: A class representing currency with static methods.
- `6-pricing.js`: A class for pricing items with a relationship to the Currency class.
- `7-airline.js` and `8-airline.js`: Examples with more complex class interactions and inheritance.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Have [Node.js](https://nodejs.org/) installed.
- Basic understanding of JavaScript, especially ES6 features.

## Installation 

To install the project dependencies, run:

```bash
npm install
```

## Usage

To run any of the JavaScript files, use the following command:

```bash
node <filename>.js
```

For example, to run the `0-classroom.js` file:

```bash
node 0-classroom.js
```

## Examples

Here are some basic examples of ES6 classes covered in this repository:

### Basic Class Structure

```javascript
class Classroom {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    }

    describe() {
        return `${this.name} can accommodate ${this.capacity} students.`;
    }
}

const roomA = new Classroom("Room A", 30);
console.log(roomA.describe()); // Output: Room A can accommodate 30 students.
```

### Inheritance

```javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

class HogwartsStudent extends Student {
    constructor(name, age, house) {
        super(name, age);
        this.house = house;
    }
    
    introduce() {
        return `${super.introduce()} I belong to ${this.house}.`;
    }
}

const harry = new HogwartsStudent("Harry Potter", 11, "Gryffindor");
console.log(harry.introduce()); // Output: Hi, I'm Harry Potter and I'm 11 years old. I belong to Gryffindor.
```

## Resources

Here are some additional resources to help you understand ES6 classes better:
- [MDN Web Docs on Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info on Classes](https://javascript.info/classes)
- [ES6 Classes Tutorial](https://www.tutorialspoint.com/es6/es6_classes.htm)
