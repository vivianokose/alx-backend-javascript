# 0x00-ES6_basic

Welcome to the **0x00-ES6_basic** repository! This project is part of the ALX backend curriculum and is designed to introduce you to the fundamental concepts of ECMAScript 6 (ES6), the sixth edition of the ECMAScript standard, which is the specification that JavaScript is based on. ES6 introduced many new features and syntax improvements that make writing JavaScript more efficient and powerful.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Learning Objectives](#learning-objectives)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Tasks](#tasks)

## Project Overview

The **0x00-ES6_basic** project covers the basics of ES6, focusing on key features such as block-scoped variables, arrow functions, template literals, destructuring, default parameters, and more. These features help in writing cleaner, more readable, and maintainable JavaScript code.

## Learning Objectives

By completing this project, you should be able to:

- Understand the differences between `var`, `let`, and `const`.
- Use arrow functions and understand their lexical scoping.
- Utilize template literals for string interpolation.
- Apply destructuring to extract values from arrays and objects.
- Use the spread and rest operators.
- Create concise object literal syntax.
- Use default function parameters.
- Understand and use ES6 classes.
- Use ES6 modules to organize your code.

## Prerequisites

Before starting this project, you should have:

- Basic understanding of JavaScript (variables, functions, arrays, and objects).
- Node.js installed on your machine (version 12.x or higher recommended).
- npm (Node Package Manager) or yarn installed.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vivianokose/0x00-ES6_basic.git
   cd 0x00-ES6_basic
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   Or

   ```bash
   yarn install
   ```

## Project Structure

The project is organized into several directories and files, each serving a specific purpose:

```
0x00-ES6_basic/
├── src/                    # Source files
│   ├── 0-constants.js      # Example file for let and const
│   ├── 1-block-scoped.js   # Example file for block-scoped variables
│   ├── 2-arrow-functions.js # Example file for arrow functions
│   ├── 3-default-parameter.js # Example file for default parameters
│   ├── 4-rest-parameter.js # Example file for rest parameters
│   ├── 5-spread-operator.js # Example file for spread operator
│   ├── 6-template-literals.js # Example file for template literals
│   ├── 7-object-literals.js # Example file for object literals
│   ├── 8-destructuring.js # Example file for destructuring
│   ├── 9-classes.js # Example file for classes
│   ├── 10-modules.js # Example file for modules
├── tests/                  # Test files
│   ├── 0-constants.test.js # Test file for constants
│   ├── ...                 # Other test files
├── .babelrc                # Babel configuration file
├── .gitignore              # Git ignore file
├── README.md               # Project README file
├── package.json            # Project metadata and dependencies
└── yarn.lock               # Yarn lockfile (if using yarn)
```

## Usage

To run and test the ES6 features in this project, follow these steps:

1. **Run the examples:**

   Each example file in the `src` directory contains code demonstrating a specific ES6 feature. You can run these files using Node.js:

   ```bash
   node src/0-constants.js
   ```

   Replace `0-constants.js` with the name of the file you want to run.

2. **Run the tests:**

   If the project includes tests, you can run them using a test runner like Jest. Make sure you have Jest installed:

   ```bash
   npm install jest --global
   ```

   Then, run the tests:

   ```bash
   jest
   ```

## Tasks

Below are the tasks you need to complete for this project. Each task focuses on a specific ES6 feature.

1. **Constants**: Understand the usage of `let` and `const`.
2. **Block-scoped variables**: Learn about block-scoped variables with `let`.
3. **Arrow functions**: Understand how to use arrow functions.
4. **Default parameters**: Use default parameters in functions.
5. **Rest parameter**: Understand the rest parameter syntax.
6. **Spread operator**: Use the spread operator for arrays and objects.
7. **Template literals**: Use template literals for string interpolation.
8. **Object literals**: Create concise and dynamic object literals.
9. **Destructuring**: Use destructuring to extract values from arrays and objects.
10. **Classes**: Understand and create ES6 classes.
11. **Modules**: Use ES6 modules to organize your code.

Each task has a corresponding file in the `src` directory where you can find the example and the code to complete.
