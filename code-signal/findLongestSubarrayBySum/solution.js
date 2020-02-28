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