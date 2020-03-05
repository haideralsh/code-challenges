/*
	Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
	Return the number of negative numbers in grid.

  Leetcode output:
  Runtime: 72 ms, faster than 8.60% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
  Memory Usage: 41.4 MB, less than 100.00% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.

  See solution.best.js for the a better performing algorithm
*/

const countNegativesInMatrix = matrix => {
  if (matrix.length === 0) return 0;

  for (arr of matrix)
    return countNegative(arr) + countNegativesInMatrix(matrix.slice(1));
};

const countNegative = sortedArr => {
  if (sortedArr.length === 0 || sortedArr[sortedArr.length - 1] >= 0) return 0;

  return 1 + countNegative(sortedArr.slice(0, sortedArr.length - 1));
};

module.exports = {
  countNegativesInMatrix
};
