import { ExampleConditionals } from '../src/conditionals';

describe('Conditionals', () => {
  describe('invert', () => {
    test.each([
      { expected: 4, x: 3 },
      { expected: 3, x: 5 },
      { expected: 3, x: 1 },
      { expected: 3, x: 4 },
    ])('invert($x)', ({ expected, x }) => {
      expect(expected).toBe(ExampleConditionals.invert(x));
    });
  });

  describe('redundant_else', () => {
    test.each([
      { x: 2, expected: 1 },
      { x: 7, expected: 10 },
      { x: 29, expected: 30 },
      { x: 30, expected: 0 },
    ])('redundant_else($x)', ({ expected, x }) => {
      expect(expected).toBe(ExampleConditionals.redundant_else(x));
    });
  });

  describe('deMorgan', () => {
    test.each([
      { expected: true, x: 5 },
      { expected: true, x: 7 },
      { expected: false, x: 4 },
      { expected: false, x: 8 },
    ])('deMorgan($x)', ({ expected, x }) => {
      expect(expected).toBe(ExampleConditionals.deMorgan(x));
    });
  });

  describe('join_AND', () => {
    test.each([
      { x: 4, y: 3, expected: 0 },
      { x: 7, y: 3, expected: 0 },
      { x: 1, y: 3, expected: 0 },
      { x: 3, y: 4, expected: 7 },
      { x: 3, y: 11, expected: 0 },
    ])('join_AND($x, $y)', ({ x, y, expected }) => {
      expect(expected).toBe(ExampleConditionals.join_AND(x, y));
    });
  });

  describe('split_AND', () => {
    test.each([
      { x: 4, y: 3, expected: 0 },
      { x: 7, y: 3, expected: 0 },
      { x: 1, y: 3, expected: 0 },
      { x: 3, y: 4, expected: 7 },
      { x: 3, y: 11, expected: 0 },
    ])('split_AND($x, $y)', ({ x, y, expected }) => {
      expect(expected).toBe(ExampleConditionals.split_AND(x, y));
    });
  });

  describe('join_OR', () => {
    test.each([
      { x: 0, y: 3, expected: true },
      { x: 3, y: 6, expected: true },
      { x: -1, y: 3, expected: true },
      { x: -1, y: 5, expected: false },
      { x: -1, y: 10, expected: true },
    ])('join_OR($x, $y)', ({ x, y, expected }) => {
      expect(expected).toBe(ExampleConditionals.join_OR(x, y));
    });
  });

  describe('spit_OR', () => {
    test.each([
      { x: 0, y: 3, expected: true },
      { x: 3, y: 6, expected: true },
      { x: -1, y: 3, expected: true },
      { x: -1, y: 5, expected: false },
      { x: -1, y: 10, expected: true },
    ])('split_OR($x, $y)', ({ x, y, expected }) => {
      expect(expected).toBe(ExampleConditionals.split_OR(x, y));
    });
  });

  describe('split_statements', () => {
    test.each([
      { x: 4, y: 3, expected: 36 },
      { x: 7, y: 3, expected: 63 },
      { x: 1, y: 3, expected: 0 },
      { x: 3, y: 4, expected: 0 },
    ])('split_statements($x, $y)', ({ x, y, expected }) => {
      expect(expected).toBe(ExampleConditionals.split_statements(x, y));
    });
  });

  describe('join_statements', () => {
    test.each([
      { x: 4, y: 3, expected: 36 },
      { x: 7, y: 3, expected: 63 },
      { x: 1, y: 3, expected: 0 },
      { x: 3, y: 4, expected: 0 },
    ])('join_statements($x, $y)', ({ x, y, expected }) => {
      expect(expected).toBe(ExampleConditionals.join_statements(x, y));
    });
  });

  describe('normalize', () => {
    test.each([
      { s1: 'foo', s2: 'world', expected: 0 },
      { s1: 'foo', s2: 'bar', expected: 1 },
      { s1: 'bar', s2: 'world', expected: 2 },
      { s1: 'hello', s2: 'bar', expected: 3 },
      { s1: 'hello', s2: 'foo', expected: 4 },
      { s1: 'hello', s2: 'world', expected: 5 },
      { s1: 'bar', s2: 'foo', expected: 6 },
    ])('normalize($s1, $s2)', ({ s1, s2, expected }) => {
      expect(expected).toBe(ExampleConditionals.normalize(s1, s2));
    });
  });
});
