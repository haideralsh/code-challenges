const assert = require("assert").strict
const {countNegatives} = require("./solution")

assert.deepStrictEqual(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]), 8)
assert.deepStrictEqual(countNegatives([[3,2],[1,0]]), 0)
assert.deepStrictEqual(countNegatives([[1,-1],[-1,-1]]), 3)
assert.deepStrictEqual(countNegatives([[-1]]), 1)
