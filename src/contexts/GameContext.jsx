import { useContext, createContext, useState, useEffect, useCallback } from 'react'
import utils from '../utils/utils'
import useScore from '../hooks/useScore'
import useBoard from '../hooks/useBoard'

const GameContext = createContext()

const {
  putRandomValueInMatrix: putTile,
  get2or4,
  mergeMatrixToRight,
  mergeMatrixToLeft,
  mergeMatrixToUp,
  mergeMatrixToDown,
  sumEveryCell,
  isAnyCellEmpty,
  isGameOver,
} = utils

const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

const ANIMATION_DURATION = 160

const GameProvider = ({ children }) => {
  const [gameOver, setGameOver] = useState(false)
  const [motion, setMotion] = useState({
    isMoving: false,
    direction: null,
    nextBoard: null,
    steps: null
  })

  const [score, bestScore, resetScore, updateScore] = useScore()
  const [board, resetBoard, updateBoard] = useBoard()

  const resetGame = () => {
    setGameOver(false)
    resetBoard()
    resetScore()
  }
  const mergeFn = {
    right: mergeMatrixToRight,
    left: mergeMatrixToLeft,
    up: mergeMatrixToUp,
    down: mergeMatrixToDown,
  }

  const move = (direction, board) => {
    const [newBoard, steps] = mergeFn[direction](board)
    if (sumEveryCell(steps) === 0 && isAnyCellEmpty(newBoard)) {
      return null
    }
    if (!isAnyCellEmpty(newBoard) && isGameOver(newBoard)) {
      setGameOver(true)
      return null
    }
    setMotion({ 
      isMoving: true,
      direction,
      nextBoard: newBoard,
      steps
    })
    setTimeout(() => {
      const boardInitialized = putTile(newBoard, get2or4())
      setMotion({ 
        isMoving: false,
        direction: null,
        nextBoard: null,
        steps: null
      })
      updateBoard(boardInitialized)
      updateScore(sumEveryCell(newBoard))
    }, ANIMATION_DURATION)
  }

  const handlerKeyDown = ({ key }, board) => {
    if (key === 'ArrowRight') move('right', board)
    if (key === 'ArrowLeft') move('left', board)
    if (key === 'ArrowUp') move('up', board)
    if (key === 'ArrowDown') move('down', board)
  }

  const handleKeyDown = useCallback((event) => {
    handlerKeyDown(event, board)
  }, [board])

  useEffect(() => {
    if (!motion.isMoving) {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [board, motion.isMoving])

  const touchMove = useCallback((direction) => {
    if (motion.isMoving) return
    move(direction, board)
  }, [board, motion.isMoving])

  return <GameContext.Provider value={{ gameOver, board, motion, resetGame, score, bestScore, touchMove }}>{children}</GameContext.Provider>
}

export { GameProvider, useGame }
