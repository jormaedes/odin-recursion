import { fibs, fibsRec } from "../src/fibonacci.js";

// testa as duas funções com os mesmos casos
const implementations = [
  { name: "fibs (iterativa)", fn: fibs },
  { name: "fibsRec (recursiva)", fn: fibsRec },
];

implementations.forEach(({ name, fn }) => {
  describe(name, () => {
    test("n = 1 retorna [0]", () => {
      expect(fn(1)).toEqual([0]);
    });

    test("n = 2 retorna [0, 1]", () => {
      expect(fn(2)).toEqual([0, 1]);
    });

    test("n = 8 retorna os primeiros 8 números", () => {
      expect(fn(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test("n = 1 retorna array com um único elemento", () => {
      expect(fn(1)).toHaveLength(1);
    });

    test("retorna array com o comprimento correto", () => {
      expect(fn(10)).toHaveLength(10);
    });

    test("n = 0 retorna array vazio", () => {
      expect(fn(0)).toEqual([]);
    });
  });
});