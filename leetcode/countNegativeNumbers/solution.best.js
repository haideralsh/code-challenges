/*
  Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
  Return the number of negative numbers in grid.
  
  Time complexity: O(log(n))
  Uses a binary search algorithm taking advantage of the fact that the array is sorted.
  
  Leetcode output: 
  Runtime: 52 ms, faster than 92.05% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
  Memory Usage: 36.3 MB, less than 100.00% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
*/

const countNegativesInMatrix = matrix => {
  if (matrix.length === 0) return 0;

  for (arr of matrix)
    return countNegative(arr) + countNegativesInMatrix(matrix.slice(1));
};

const countNegative = sortedArr => {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    const midpoint = Math.floor((start + end) / 2);

    if (sortedArr[0] < 0) return sortedArr.length;
    if (sortedArr[sortedArr.length - 1] >= 0) return 0;

    if (sortedArr[midpoint] < 0) {
      if (sortedArr[midpoint - 1] >= 0) return sortedArr.length - midpoint;

      end--;
    } else {
      start++;
    }
  }
};

module.exports = {
  countNegativesInMatrix
};
