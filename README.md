# Odin Project – Recursion

Practice project from [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursion) focused on solving classic computer science problems using recursion.

## About

Two classic problems solved with a recursive approach: the Fibonacci sequence and Merge Sort.

## Tech Stack

- JavaScript (ES6+)
- [Jest](https://jestjs.io/) — test runner
- [Babel](https://babeljs.io/) — enables ES6 `import`/`export` syntax with Jest

## Project Structure

```
├── src/
│   ├── fibonacci.js
│   └── mergeSort.js
├── tests/
│   ├── fibonacci.test.js
│   └── mergeSort.test.js
├── babel.config.js
└── package.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

## Functions

### `fibs(n)`

Iterative approach. Returns an array containing the first `n` numbers of the Fibonacci sequence.

```js
fibs(8) // [0, 1, 1, 2, 3, 5, 8, 13]
```

### `fibsRec(n)`

Recursive approach. Solves the same problem by calling itself with `n - 1` and appending the next value.

```js
fibsRec(8) // [0, 1, 1, 2, 3, 5, 8, 13]
```

### `mergeSort(array)`

Recursive merge sort implementation. Divides the array in half until each sub-array has a single element (already sorted), then merges them back together in sorted order.

```js
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) // [0, 1, 1, 2, 3, 5, 8, 13]
mergeSort([105, 79, 100, 110])        // [79, 100, 105, 110]
```

## Concepts

### Recursion
A function is recursive when it calls itself to solve a smaller version of the same problem. Every recursive function needs:
- A **base case** — the condition that stops the recursion
- A **recursive case** — where the function calls itself with a smaller input

### Divide and Conquer
Merge sort is a classic example of this strategy: break the problem into smaller sub-problems, solve each one, then combine the results. This gives merge sort a time complexity of **O(n log n)**, much better than simpler algorithms like bubble sort's **O(n²)**.