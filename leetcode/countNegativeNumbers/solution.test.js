const assert = require("assert").strict;
const { countNegativesInMatrix } = require("./solution");

assert.deepStrictEqual(
  countNegativesInMatrix([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
  ]),
  8
);
assert.deepStrictEqual(
  countNegativesInMatrix([
    [3, 2],
    [1, 0]
  ]),
  0
);
assert.deepStrictEqual(
  countNegativesInMatrix([
    [1, -1],
    [-1, -1]
  ]),
  3
);
assert.deepStrictEqual(countNegativesInMatrix([[-1]]), 1);
