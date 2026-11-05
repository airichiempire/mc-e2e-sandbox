'use strict';

/**
 * Compute the n-th Fibonacci number, with F(0) = 0 and F(1) = 1.
 *
 * Iterative implementation: O(n) time, O(1) space.
 * Results are exact for 0 <= n <= 78; beyond that F(n) exceeds
 * Number.MAX_SAFE_INTEGER and the returned Number loses precision.
 *
 * @param {number} n - non-negative integer index into the sequence
 * @returns {number} the n-th Fibonacci number
 * @throws {TypeError} if n is not an integer
 * @throws {RangeError} if n is negative
 */
function fib(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('fib(n): n must be an integer');
  }
  if (n < 0) {
    throw new RangeError('fib(n): n must be >= 0');
  }

  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i += 1) {
    const next = a + b;
    a = b;
    b = next;
  }
  return a;
}

module.exports = fib;
// FORGE E2E v2 — verified
