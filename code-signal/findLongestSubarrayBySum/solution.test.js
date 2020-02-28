const assert = require("assert").strict;
const { longestSubarrayBySum } = require("./solution");

assert.deepStrictEqual(
  longestSubarrayBySum([1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10], 15),
  [0, 7]
);
