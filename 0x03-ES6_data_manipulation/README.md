# 0x03. ES6 Data Manipulation

Welcome to the 0x03 ES6 Data Manipulation project! This project covers various aspects of data manipulation using ECMAScript 6 (ES6), also known as ECMAScript 2015. ES6 introduces several new features and syntax improvements that make JavaScript more powerful and easier to work with, especially when dealing with data.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
   - [Arrow Functions](#arrow-functions)
   - [Template Literals](#template-literals)
   - [Destructuring](#destructuring)
   - [Spread Operator](#spread-operator)
   - [Rest Parameters](#rest-parameters)
   - [Default Parameters](#default-parameters)
   - [Enhanced Object Literals](#enhanced-object-literals)
   - [Modules](#modules)
3. [Usage](#usage)
4. [Examples](#examples)
5. [Conclusion](#conclusion)

## Introduction

ECMAScript 6 (ES6) is a major update to JavaScript that includes dozens of new features and enhancements. This README provides an overview of some of the most important features related to data manipulation, which will help you write cleaner, more efficient, and more maintainable code.

## Features

### Arrow Functions

Arrow functions provide a shorter syntax for writing function expressions. They also lexically bind the `this` value, making them particularly useful for writing concise and readable code.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

### Template Literals

Template literals allow for easier string interpolation and multi-line strings. They are enclosed by backticks (`` ` ``) instead of single or double quotes.

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
```

### Destructuring

Destructuring allows you to extract values from arrays or properties from objects into distinct variables.

```javascript
const person = { name: "Jane", age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Jane 30
```

### Spread Operator

The spread operator (`...`) allows you to expand elements of an array or object.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

### Rest Parameters

Rest parameters allow you to represent an indefinite number of arguments as an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

### Default Parameters

Default parameters allow you to set default values for function parameters.

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
```

### Enhanced Object Literals

Enhanced object literals provide shorthand syntax for defining object properties and methods.

```javascript
const name = "Alice";
const person = {
    name,
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
person.greet(); // Output: Hello, Alice!
```

### Modules

ES6 modules allow you to organize your code into separate files and use `import` and `export` statements to share code between them.

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math.js';
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
```

## Usage

To use ES6 features, ensure your development environment supports ES6. Most modern browsers and Node.js versions support ES6. For older environments, you may need to use a transpiler like Babel.

## Examples

Here are some practical examples of using ES6 for data manipulation:

1. **Filtering and Mapping an Array:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2).filter(num => num > 5);
console.log(doubled); // Output: [6, 8, 10]
```

2. **Merging Objects:**

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 3, c: 4 }
```

3. **Using Destructuring and Default Parameters:**

```javascript
const displayPerson = ({ name, age } = { name: "Unknown", age: 0 }) => {
    console.log(`Name: ${name}, Age: ${age}`);
};
displayPerson({ name: "Bob", age: 25 }); // Output: Name: Bob, Age: 25
displayPerson(); // Output: Name: Unknown, Age: 0
```

## Conclusion

ES6 introduces a wealth of features that simplify and enhance JavaScript development, especially for data manipulation tasks. By leveraging these features, you can write more concise, readable, and maintainable code.
