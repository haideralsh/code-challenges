/*
  Given an array of sorted integers, and a sum 
  find the longest subarray in the original array that adds up to the given sum.

  Solution implemented in O(n) using 2 pointers p1 and p2
  iterating forwards creating a "window" that represents the given sum
  
  If the sum of the window is less than the given sum, p2 is incremented by 1 
  else p1 is incremented by 1. When a window adds to the given sum the start and end points are 
  stored only if they are longer than the longest found yet. 
*/

const longestSubarrayBySum = (arr, sum) => {
  let p1 = 0,
    p2 = 0,
    longest = [0, 0],
    wSum = 0;

  while (p2 < arr.length) {
    if (wSum === sum && p2 - p1 >= longest[1] - longest[0])
      longest = [p1 + 1, p2];

    if (wSum > sum) {
      wSum -= arr[p1];
      p1++;
    } else {
      wSum += arr[p2];
      p2++;
    }
  }

  return longest;
};

module.exports = {
  longestSubarrayBySum
};
