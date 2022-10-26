const putRandomValueInMatrix = (matrix, fnValue = Math.random()) => {
  const value = fnValue
  const deepCopyMatrix = JSON.parse(JSON.stringify(matrix))
  const emptyPosition = deepCopyMatrix.reduce((acc, row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (cell === 0) {
        acc.push({ rowIndex, cellIndex })
      }
    })
    return acc
  }, [])
  const randomPosition = emptyPosition[Math.floor(Math.random() * emptyPosition.length)]
  deepCopyMatrix[randomPosition.rowIndex][randomPosition.cellIndex] = value
  return deepCopyMatrix
}

const rotateMatrix = (matrix, direction) => {
  const deepCopyMatrix = JSON.parse(JSON.stringify(matrix))
  const rotatedMatrix = deepCopyMatrix.map((row, rowIndex) =>
    row.map((cell, cellIndex) => deepCopyMatrix[cellIndex][rowIndex])
  )
  if (direction === 'right') {
    return rotatedMatrix.map((row) => row.reverse())
  }
  if (direction === 'left') {
    return rotatedMatrix.reverse()
  }
  if (direction === 'down') {
    return rotatedMatrix.reverse().map((row) => row.reverse())
  }
  return rotatedMatrix
}

const get2or4 = () => {
  return Math.random() < 0.8 ? 2 : 4
}

const initializeBoard = () => {
  const board = Array(4)
    .fill(0)
    .map(() => Array(4).fill(0))
  const matrixA = putRandomValueInMatrix(board, get2or4())
  const matrixB = putRandomValueInMatrix(matrixA, get2or4())
  return matrixB
}

const getMatrixToRight = (matrix) => {
  const stepsToMoveToRight = []
  const deepCopyMatrix = JSON.parse(JSON.stringify(matrix))
  deepCopyMatrix.forEach((row, rowIndex) => {
    const steps = Array(4).fill(0)
    for (let i = row.length - 1; i >= 0; i--) {
      const prevArr = matrix[rowIndex]
      let prev
      for (let j = i + 1; j < prevArr.length; j++) {
        if (prevArr[j] !== 0) {
          prev = prevArr[j]
          break
        }
      }
      if (row[i] === 0 || i === row.length - 1) continue
      for (let j = 1; j <= row.length - 1 - i; j++) {
        if (row[i + j] === 0) {
          row[i + j] = row[i + j] + row[i + j - 1]
          row[i + j - 1] = 0
          steps[i]++
        }
        if (row[i + j] === row[i + j - 1] && prev === prevArr[i]) {
          row[i + j] = row[i + j] + row[i + j - 1]
          row[i + j - 1] = 0
          steps[i]++
          break
        }
      }
    }
    stepsToMoveToRight.push(steps)
  })
  return [deepCopyMatrix, stepsToMoveToRight]
}

const getMatrixToLeft = (matrix) => {
  const stepsToMoveToLeft = []
  const deepCopyMatrix = JSON.parse(JSON.stringify(matrix))
  deepCopyMatrix.forEach((row, rowIndex) => {
    const steps = Array(4).fill(0)
    for (let i = 0; i < row.length; i++) {
      const prevArr = matrix[rowIndex]
      let prev
      for (let j = i - 1; j >= 0; j--) {
        if (prevArr[j] !== 0) {
          prev = prevArr[j]
          break
        }
      }
      if (row[i] === 0 || i === 0) continue
      for (let j = 1; j <= i; j++) {
        if (row[i - j] === 0) {
          row[i - j] = row[i - j] + row[i - j + 1]
          row[i - j + 1] = 0
          steps[i]++
        }
        if (row[i - j] === row[i - j + 1] && prev === prevArr[i]) {
          row[i - j] = row[i - j] + row[i - j + 1]
          row[i - j + 1] = 0
          steps[i]++
          break
        }
      }
    }
    stepsToMoveToLeft.push(steps)
  })
  return [deepCopyMatrix, stepsToMoveToLeft]
}

const getMatrixToUp = (matrix) => {
  const rotatedMatrixR = rotateMatrix(matrix, 'right')
  const [newMatrix, steps] = getMatrixToRight(rotatedMatrixR)
  const rotatedMatrixL = rotateMatrix(newMatrix, 'left')
  const stepsToMoveToUp = rotateMatrix(steps, 'left')
  return [rotatedMatrixL, stepsToMoveToUp]
}

const getMatrixToDown = (matrix) => {
  const rotatedMatrixL = rotateMatrix(matrix, 'left')
  const [newMatrix, steps] = getMatrixToRight(rotatedMatrixL)
  const rotatedMatrixR = rotateMatrix(newMatrix, 'right')
  const stepsToMoveToDown = rotateMatrix(steps, 'right')
  return [rotatedMatrixR, stepsToMoveToDown]
}

const sumEveryCell = (matrix) => {
  return matrix.reduce((acc, row) => {
    return acc + row.reduce((acc, cell) => acc + cell, 0)
  }, 0)
}

const utils = {
  initializeBoard,
  putRandomValueInMatrix,
  get2or4,
  getMatrixToRight,
  getMatrixToLeft,
  getMatrixToUp,
  getMatrixToDown,
  sumEveryCell,
}

export default utils
