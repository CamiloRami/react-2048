import { useContext, createContext, useState, useEffect, useCallback } from 'react'
import utils from '../utils/utils'

const GameContext = createContext()

const {
  putRandomValueInMatrix: putTile,
  initializeBoard,
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
  const [game, setGame] = useState({
    board: initializeBoard(),
    score: 0,
    isGameOver: false,
  })
  const [motion, setMotion] = useState({
    isMoving: false,
    direction: null,
    nextBoard: null,
    steps: null
  })

  const resetGame = () => {
    setGame({
      board: initializeBoard(),
      score: 0,
      isGameOver: false,
    })
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
      setGame({ ...game, isGameOver: true })
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
      // if (!boardInitialized) {
      //   setGame({ ...game, isGameOver: true })
      //   setMotion({
      //     isMoving: false,
      //     direction: null,
      //     nextBoard: null,
      //     steps: null
      //   })
      //   return null
      // }
      setMotion({ 
        isMoving: false,
        direction: null,
        nextBoard: null,
        steps: null
      })
      setGame(prevState => {
        return {...prevState, board: boardInitialized}
      })
    }, ANIMATION_DURATION)
  }

  const handlerKeyDown = ({ key }, board) => {
    if (key === 'ArrowRight') move('right', board)
    if (key === 'ArrowLeft') move('left', board)
    if (key === 'ArrowUp') move('up', board)
    if (key === 'ArrowDown') move('down', board)
  }

  const handleKeyDown = useCallback((event) => {
    handlerKeyDown(event, game.board)
  }, [game.board])

  useEffect(() => {
    if (!motion.isMoving) {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [game.board, motion.isMoving])

  return <GameContext.Provider value={{ game, motion, resetGame }}>{children}</GameContext.Provider>
}

export { GameProvider, useGame }
