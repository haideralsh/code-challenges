const assert = require("assert").strict;
const { generateParenthesis } = require("./solution");
assert.deepStrictEqual(generateParenthesis(3), [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]);
