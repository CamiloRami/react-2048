import { useGame } from '../../contexts/GameContext'
import Tile from '../Tile'

export default function Board() {
  const { board } = useGame()

  const renderBoard = () => {
    return board.map((row, rowIndex) => {
      return row.map((value, colIndex) => {
        if (value === 0) return null
        return <Tile key={Math.random()} position={[colIndex, rowIndex]} value={value}/>
      })
    })
  }

  return <>
    { board && renderBoard() } 
  </>
}
