const generateParenthesis = num => {
  const arr = [];
  backtrack(arr, num, 0, 0, "");
  return arr;
};

const backtrack = (arr, max, open, close, currentString) => {
  // [], 3, 0, 0, ""
  console.log(
    "array: ",
    arr,
    "max: ",
    max,
    "open: ",
    open,
    "close: ",
    close,
    "currentString: ",
    currentString
  );
  if (currentString.length === max * 2) arr.push(currentString);

  if (open < max) backtrack(arr, max, open + 1, close, currentString + "(");
  if (close < open) backtrack(arr, max, open, close + 1, currentString + ")");
};

module.exports = { generateParenthesis };
