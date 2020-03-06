const assert = require("assert").strict;
const { countNegativesInMatrix } = require("./solution.best");

assert.equal(
  countNegativesInMatrix([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
  ]),
  8
);
assert.equal(
  countNegativesInMatrix([
    [3, 2],
    [1, 0]
  ]),
  0
);
assert.equal(
  countNegativesInMatrix([
    [1, -1],
    [-1, -1]
  ]),
  3
);
assert.equal(countNegativesInMatrix([[-1]]), 1);
