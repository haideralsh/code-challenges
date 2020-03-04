/*
	Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
	Return the number of negative numbers in grid.

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
