'use strict';

/**
 * Reverse a string.
 *
 * @param {string} s - The string to reverse.
 * @returns {string} The reversed string.
 * @throws {TypeError} If `s` is not a string.
 */
function reverseString(s) {
  if (typeof s !== 'string') {
    throw new TypeError(`reverseString expects a string, got ${typeof s}`);
  }
  // Spread into code points first so surrogate pairs (e.g. emoji) stay intact.
  return [...s].reverse().join('');
}

module.exports = { reverseString };
