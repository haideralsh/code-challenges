const assert = require("assert").strict
const { squaredSortedArray } = require("./solution")

assert.deepStrictEqual(squaredSortedArray([-9, -6, -3, 0, 1, 2, 3]), [0, 1, 4, 9, 9, 36, 81])
