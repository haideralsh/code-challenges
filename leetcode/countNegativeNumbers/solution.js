/*
	Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
	Return the number of negative numbers in grid.

*/

const countNegatives = matrix => {
	if (matrix.length === 0) return 0

	for (arr of matrix) 
		return countNegativeNumbers(arr) + countNegatives(matrix.slice(1))
}

const countNegativeNumbers = sortedArr => {
    if (sortedArr.length === 0 || sortedArr[sortedArr.length - 1] >= 0) return 0
        
	return 1 + countNegativeNumbers(sortedArr.slice(0, sortedArr.length - 1))
}

module.exports = {
	countNegatives
}