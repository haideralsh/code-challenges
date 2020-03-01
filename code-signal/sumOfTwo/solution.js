/*
	Given two arrays of integers A and B and a integer value V, 
	if a pair of integers from array A and another from array B add up to become V return true.

	Solution sacrifices space complexity for a better time complexity by using a Hashset.
	The solution is implemented in O(n) taking advantage of the fact that
	HashSets have a constant lookup time.
*/

const sumOfTwo = (A, B, V) => {
	const complements = new Set()

	A.map(number => complements.add(V - number))

	for (number of B)
		if (complements.has(number))
			return true

	return false
}

module.exports = {
	sumOfTwo
}