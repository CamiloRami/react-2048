import { useState } from 'react'
import { useBoard } from './useBoard'
import utils from '../utils/utils'

const {
  moveEveryCellToRight: toRight,
  moveEveryCellToLeft: toLeft,
  moveEveryCellToUp: toUp,
  moveEveryCellToDown: toDown,
} = utils

export function useGame() {
  const [game, setGame] = useState({
    board: useBoard(),
    score: 0,
    isOver: false,
  })

  const moveRight = (board) => {
    const newBoard = toRight(board)
    setGame(prevState => {
      return {...prevState, board: newBoard}
    })
  }

  const moveLeft = (board) => {
    const newBoard = toLeft(board)
    setGame(prevState => {
      return {...prevState, board: newBoard}
    })
  }

  const moveUp = (board) => {
    const newBoard = toUp(board)
    setGame(prevState => {
      return {...prevState, board: newBoard}
    })
  }

  const moveDown = (board) => {
    const newBoard = toDown(board)
    setGame(prevState => {
      return {...prevState, board: newBoard}
    })
  }

  const handlerKeyDown = ({ key }, board) => {
    if (key === 'ArrowRight') moveRight(board)
    if (key === 'ArrowLeft') moveLeft(board)
    if (key === 'ArrowUp') moveUp(board)
    if (key === 'ArrowDown') moveDown(board)
  }

  return { game, handlerKeyDown }
}
