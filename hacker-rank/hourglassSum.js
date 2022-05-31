// https://www.hackerrank.com/challenges/2d-array/problem

let rawInput = `1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 9 2 -4 -4 0
0 0 0 -2 0 0
0 0 -1 -2 -4 0`

function hourglassSum(arr) {
  let sums = []

  for (let i = 0; i <= arr.length / 2; i++) {
    for (let j = 0; j <= arr.length / 2; j++) {
      
      let hourGlass = [
        arr[i][j],
        arr[i][j + 1],
        arr[i][j + 2],
        arr[i + 1][j + 1],
        arr[i + 2][j],
        arr[i + 2][j + 1],
        arr[i + 2][j + 2],
      ]
      
      let sum = hourGlass.reduce((acc, value) => acc + value, 0)

      sums.push(sum)
    }
  }

  let [highest] = sums.sort((x, y) => y - x)

  return highest
}

let arr = rawInput.split("\n").map(row => row.split(" ").map(Number))
