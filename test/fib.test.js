'use strict';

/**
 * Tests for lib/fib.js — run directly with: node test/fib.test.js
 * Uses the built-in node:test runner (Node.js >= 18) and node:assert.
 */

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fib = require('../lib/fib');

// Known values: https://oeis.org/A000045
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

test('base cases: fib(0) = 0, fib(1) = 1', () => {
  assert.equal(fib(0), 0);
  assert.equal(fib(1), 1);
});

test('first 13 Fibonacci numbers (OEIS A000045)', () => {
  const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  const actual = expected.map((_, i) => fib(i));
  assert.deepEqual(actual, expected);
});

test('recurrence: fib(n) = fib(n-1) + fib(n-2)', () => {
  for (let n = 2; n <= 30; n += 1) {
    assert.equal(fib(n), fib(n - 1) + fib(n - 2));
  }
});

test('larger exact values', () => {
  assert.equal(fib(20), 6765);
  assert.equal(fib(50), 12586269025);
  assert.equal(fib(70), 190392490709135);
});

test('rejects negative input', () => {
  assert.throws(() => fib(-1), RangeError);
});

test('rejects non-integer input', () => {
  assert.throws(() => fib(2.5), TypeError);
  assert.throws(() => fib('3'), TypeError);
  assert.throws(() => fib(NaN), TypeError);
});
