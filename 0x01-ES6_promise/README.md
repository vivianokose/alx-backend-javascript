# README: ES6 Promises

## Table of Contents

1. [Introduction](#introduction)
2. [What is a Promise?](#what-is-a-promise)
3. [States of a Promise](#states-of-a-promise)
4. [Creating a Promise](#creating-a-promise)
5. [Handling Promises](#handling-promises)
    - [then() Method](#then-method)
    - [catch() Method](#catch-method)
    - [finally() Method](#finally-method)
6. [Chaining Promises](#chaining-promises)
7. [Promise Combinators](#promise-combinators)
    - [Promise.all()](#promiseall)
    - [Promise.race()](#promiserace)
    - [Promise.allSettled()](#promiseallsettled)
    - [Promise.any()](#promiseany)
8. [Best Practices](#best-practices)
9. [Common Pitfalls](#common-pitfalls)
10. [Conclusion](#conclusion)
11. [References](#references)

## Introduction

Promises are an essential feature in ES6 (ECMAScript 2015) that simplify working with asynchronous operations in JavaScript. They provide a cleaner, more readable way to handle asynchronous code compared to traditional callback-based approaches.

## What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to attach callbacks for handling the result or error of that operation.

## States of a Promise

A Promise can be in one of three states:

1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

## Creating a Promise

To create a new Promise, you use the `Promise` constructor, which takes a function (executor) with two parameters: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  let success = true; // This could be a result of some async operation

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed.');
  }
});
```

## Handling Promises

### then() Method

The `then()` method is used to handle a fulfilled Promise. It takes two optional arguments: a callback for the fulfilled case and a callback for the rejected case.

```javascript
myPromise.then(
  (successMessage) => {
    console.log(successMessage);
  },
  (errorMessage) => {
    console.log(errorMessage);
  }
);
```

### catch() Method

The `catch()` method is used to handle a rejected Promise. It is a shorthand for `then(null, rejection)`.

```javascript
myPromise.catch((errorMessage) => {
  console.log(errorMessage);
});
```

### finally() Method

The `finally()` method is executed regardless of whether the Promise is fulfilled or rejected.

```javascript
myPromise.finally(() => {
  console.log('Promise is settled (either fulfilled or rejected).');
});
```

## Chaining Promises

Promises can be chained to handle sequences of asynchronous operations. Each `then()` returns a new Promise, allowing further `then()` calls.

```javascript
myPromise
  .then((result) => {
    console.log(result);
    return 'Next step';
  })
  .then((nextResult) => {
    console.log(nextResult);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Promise Combinators

### Promise.all()

`Promise.all()` takes an array of Promises and returns a single Promise that resolves when all of the input Promises have resolved.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
});
```

### Promise.race()

`Promise.race()` returns a Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // 'two'
});
```

### Promise.allSettled()

`Promise.allSettled()` returns a Promise that resolves when all of the input Promises have settled (either resolved or rejected).

```javascript
const promise1 = Promise.resolve('fulfilled');
const promise2 = Promise.reject('rejected');

Promise.allSettled([promise1, promise2]).then((results) => {
  results.forEach((result) => console.log(result.status));
  // "fulfilled"
  // "rejected"
});
```

### Promise.any()

`Promise.any()` returns a Promise that resolves as soon as any of the input Promises resolves. If none of the input Promises resolves, it rejects with an AggregateError.

```javascript
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 200, 'slow'));

Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value); // 'quick'
});
```

## Best Practices

- **Always handle errors**: Use `catch()` to handle errors and avoid unhandled promise rejections.
- **Use `finally()`**: Clean up resources or perform actions irrespective of the Promise outcome.
- **Avoid nesting Promises**: Chain Promises instead to keep code clean and readable.
- **Use combinators wisely**: Leverage `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, and `Promise.any()` to manage multiple Promises effectively.

## Common Pitfalls

- **Forgetting to return Promises**: Ensure that `then()` callbacks return Promises if chaining is intended.
- **Not handling all possible outcomes**: Always provide error handling for potential rejections.
- **Creating unnecessary Promises**: Avoid wrapping synchronous code in Promises; use Promises only for actual asynchronous operations.

## Conclusion

ES6 Promises provide a robust and cleaner way to handle asynchronous operations in JavaScript. Understanding their usage and leveraging combinators effectively can lead to more maintainable and error-free code.

## References

- [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info: Promises](https://javascript.info/promise)
- [ECMAScript 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects)
