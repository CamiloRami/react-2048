const putRandomValueInMatrix = (matrix, fnValue = Math.random()) => {
  const value = fnValue
  const emptyPosition = matrix.reduce((acc, row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (cell === 0) {
        acc.push({ rowIndex, cellIndex })
      }
    })
    return acc
  }, [])
  const randomPosition = emptyPosition[Math.floor(Math.random() * emptyPosition.length)]
  matrix[randomPosition.rowIndex][randomPosition.cellIndex] = value
}

const moveEveryCellToRight = (matrix) => {
  let newMatrix = matrix.map((row) => {
    let newRow = row.filter((cell) => cell !== 0)
    while (newRow.length < 4) {
      newRow.unshift(0)
    }
    return newRow
  })
  return newMatrix
}

const moveEveryCellToLeft = (matrix) => {
  let newMatrix = matrix.map((row) => {
    let newRow = row.filter((cell) => cell !== 0)
    while (newRow.length < 4) {
      newRow.push(0)
    }
    return newRow
  })
  return newMatrix
}

const moveEveryCellToUp = (matrix) => {
  let newMatrix = matrix.reduce(
    (acc, row) => {
      row.forEach((cell, cellIndex) => {
        let i = 0
        while (i < acc.length) {
          if (acc[i][cellIndex] === 0) {
            acc[i][cellIndex] = cell
            break
          }
          i++
        }
      })
      return acc
    },
    Array(4)
      .fill(0)
      .map(() => Array(4).fill(0))
  )
  return newMatrix
}

const moveEveryCellToDown = (matrix) => {
  let newMatrix = matrix.reverse().reduce(
    (acc, row) => {
      row.forEach((cell, cellIndex) => {
        let i = 3
        while (i >= 0) {
          if (acc[i][cellIndex] === 0) {
            acc[i][cellIndex] = cell
            break
          }
          i--
        }
      })
      return acc
    },
    Array(4)
      .fill(0)
      .map(() => Array(4).fill(0))
  )
  return newMatrix
}

const get2or4 = () => {
  return Math.random() < 0.8 ? 2 : 4
}

const utils = {
  putRandomValueInMatrix,
  moveEveryCellToRight,
  moveEveryCellToLeft,
  moveEveryCellToUp,
  moveEveryCellToDown,
  get2or4,
}

export default utils
