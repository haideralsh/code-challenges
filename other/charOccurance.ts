// Given a string that contains a sequence of characters, return the number of
// occurances of each character in a sequence. If a character sequence repeats
// more than once, then return each sequence seperatly.

// input:  "aaabbcca"
// output: [{a: 3}, {b: 2}, {c: 2}, {a: 1}]

import assert from "assert";

function charOccurance(str: string) {
  const chars = str.split("");

  let res = [];
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) count++;

    if (chars[i] !== chars[i + 1]) {
      res.push({ [chars[i]]: count });
      count = 1;
    }
  }

  return res;
}

assert.deepStrictEqual(charOccurance("aaabbcca"), [
  { a: 3 },
  { b: 2 },
  { c: 2 },
  { a: 1 },
]);

assert.deepStrictEqual(charOccurance(""), []);
assert.deepStrictEqual(charOccurance("a"), [{ a: 1 }]);
