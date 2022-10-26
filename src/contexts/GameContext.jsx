import { useContext, createContext, useState, useEffect, useCallback } from 'react'
import utils from '../utils/utils'

const GameContext = createContext()

const {
  getMatrixToRight,
  getMatrixToLeft,
  getMatrixToUp,
  getMatrixToDown,
  putRandomValueInMatrix: putTile,
  initializeBoard,
  get2or4
} = utils

const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

const ANIMATION_DURATION = 200

const GameProvider = ({ children }) => {
  const [game, setGame] = useState({
    board: initializeBoard(),
    score: 0,
    isOver: false,
  })
  const [motion, setMotion] = useState({
    isMoving: false,
    direction: null,
    nextBoard: null,
    steps: null
  })

  const moveRight = (board) => {
    const [newBoard, steps] = getMatrixToRight(board)
    setMotion({ 
      isMoving: true,
      direction: 'right',
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
      setGame(prevState => {
        return {...prevState, board: boardInitialized}
      })
    }, ANIMATION_DURATION)
  }

  const moveLeft = (board) => {
    const [newBoard, steps] = getMatrixToLeft(board)
    setMotion({ 
      isMoving: true, 
      direction: 'left',
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
      setGame(prevState => {
        return {...prevState, board: boardInitialized}
      })
    }, ANIMATION_DURATION)
  }

  const moveUp = (board) => {
    const [newBoard, steps] = getMatrixToUp(board)
    setMotion({ 
      isMoving: true, 
      direction: 'up',
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
      setGame(prevState => {
        return {...prevState, board: boardInitialized}
      })
    }, ANIMATION_DURATION)
  }

  const moveDown = (board) => {
    const [newBoard, steps] = getMatrixToDown(board)
    setMotion({ 
      isMoving: true, 
      direction: 'down',
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
      setGame(prevState => {
        return {...prevState, board: boardInitialized}
      })
    }, ANIMATION_DURATION)
  }

  const handlerKeyDown = ({ key }, board) => {
    if (key === 'ArrowRight') moveRight(board)
    if (key === 'ArrowLeft') moveLeft(board)
    if (key === 'ArrowUp') moveUp(board)
    if (key === 'ArrowDown') moveDown(board)
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

  return <GameContext.Provider value={{ game, motion }}>{children}</GameContext.Provider>
}

export { GameProvider, useGame }
