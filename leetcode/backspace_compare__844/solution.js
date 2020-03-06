/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Time complexity: O(n)
Runtime: 56 ms, faster than 82.58% of JavaScript online submissions for Backspace String Compare.
Memory Usage: 35.4 MB, less than 33.33% of JavaScript online submissions for Backspace String Compare.

*/

const backspaceCompare = (S, T) => backspace(S) === backspace(T);

const backspace = str => {
  const backspaced = [];

  for (const c of [...str]) {
    c === "#" ? backspaced.pop() : backspaced.push(c);
  }

  return backspaced.join("");
};

module.exports = { backspaceCompare };
