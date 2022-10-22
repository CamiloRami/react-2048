import utils from '../utils/utils'

const initializeBoard = () => {
  const { 
    putRandomValueInMatrix: putRandomValueInBoard, 
    get2or4 
  } = utils

  const board = Array(4).fill(0).map(() => Array(4).fill(0))
  putRandomValueInBoard(board, get2or4())
  putRandomValueInBoard(board, get2or4())
  return board
}

export function useBoard() {
 const board = initializeBoard()
  return board
}
