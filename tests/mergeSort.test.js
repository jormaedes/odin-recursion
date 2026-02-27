import mergeSort from "../src/mergeSort.js";

test("array vazio retorna array vazio", () => {
  expect(mergeSort([])).toEqual([]);
});

test("array com um elemento retorna o mesmo array", () => {
  expect(mergeSort([73])).toEqual([73]);
});

test("array já ordenado permanece igual", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("array em ordem inversa", () => {
  expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("array desordenado", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("array com números repetidos", () => {
  expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});

test("array com dois elementos", () => {
  expect(mergeSort([2, 1])).toEqual([1, 2]);
});

test("array com números negativos", () => {
  expect(mergeSort([-3, 5, -1, 0, 2])).toEqual([-3, -1, 0, 2, 5]);
});
