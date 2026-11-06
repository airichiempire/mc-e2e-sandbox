'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');

const { reverseString } = require('./reverse');

test('reverses a basic string', () => {
  assert.equal(reverseString('hello'), 'olleh');
});

test('reverses an empty string', () => {
  assert.equal(reverseString(''), '');
});

test('reverses a single character', () => {
  assert.equal(reverseString('a'), 'a');
});

test('palindrome is unchanged', () => {
  assert.equal(reverseString('racecar'), 'racecar');
});

test('handles unicode code points without breaking surrogate pairs', () => {
  assert.equal(reverseString('a😀b'), 'b😀a');
});

test('throws TypeError on non-string input', () => {
  assert.throws(() => reverseString(123), TypeError);
  assert.throws(() => reverseString(null), TypeError);
  assert.throws(() => reverseString(undefined), TypeError);
  assert.throws(() => reverseString(true), TypeError);
  assert.throws(() => reverseString({}), TypeError);
  assert.throws(() => reverseString(['a', 'b']), TypeError);
});
