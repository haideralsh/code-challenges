/*
  Given an array of sorted integers of x, where -1,000,000 <= x <= 1,000,000
  return a sorted array of the square of each integer.

  Solution implemented in O(n) using 2 pointers 
  one iterating forwards (p1) and the other backwards (p2)
  to fill an initialized array with the same length of the original array
*/
const squaredSortedArray = arr => {
  let result = new Array(arr.length),
    p1 = 0,
    p2 = arr.length - 1;

  while (p1 <= p2) {
    const s1 = square(arr[p1]),
      s2 = square(arr[p2]);

    if (s1 > s2) {
      result[p2 - p1] = s1;
      p1++;
    } else {
      result[p2 - p1] = s2;
      p2--;
    }
  }

  return result;
};

const square = num => num * num;

module.exports = {
  squaredSortedArray
};
