import { useGame } from '../../contexts/GameContext'
import Tile from '../Tile'

export default function Board() {
  const { game } = useGame()

  const renderBoard = () => {
    return game.board.map((row, rowIndex) => {
      return row.map((value, colIndex) => {
        if (value === 0) return null
        return <Tile key={Math.random()} position={[colIndex, rowIndex]} value={value}/>
      })
    })
  }

  return <>
    { game && renderBoard() } 
  </>
}
