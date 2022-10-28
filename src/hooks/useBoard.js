import useLocalStorage from './useLocalStorage'
import utils from '../utils/utils'

export default function useBoard() {
  const [board, setBoard] = useLocalStorage('board', utils.initializeBoard())

  const resetBoard = () => {
    setBoard(utils.initializeBoard())
  }

  const updateBoard = (newBoard) => {
    setBoard(newBoard)
  }

  return [board, resetBoard, updateBoard]
}
