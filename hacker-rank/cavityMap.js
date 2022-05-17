function cavityMap(grid) {
  const g = grid.map(row => Array.from(row).map(Number))
  let cavities = []

  for (let row = 0; row < g.length; row++) {
    cavities.push([])

    for (let col = 0; col < g[row].length; col++) {
      const neighbors = [g[row - 1]?.[col], g[row + 1]?.[col], g[row]?.[col + 1], g[row]?.[col - 1]]

      if (neighbors.every(neighbor => neighbor < g[row][col])) {
        cavities[row].push("X")
      } else {
        cavities[row].push(g[row][col])
      }
    }
  }

  return cavities
}
