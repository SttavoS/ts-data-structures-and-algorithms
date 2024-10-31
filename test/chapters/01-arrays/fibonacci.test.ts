import { describe, expect, test } from 'vitest';
import { getFibonacci } from '../../../src/chapters/01-arrays/fibonacci';

describe('Fibonacci', () => {
  test('return 20 first numbers', () => {
    expect(getFibonacci()).toStrictEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
    ]);
  });
});
