import { useEffect, useCallback } from 'react'
import { useGame } from '../../hooks/useGame'
import Tile from '../Tile'

export default function Board() {
  const { game, handlerKeyDown } = useGame()
  console.log('render')

  const handleKeyDown = useCallback((event) => {
    handlerKeyDown(event, game.board)
  }, [game.board])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [game.board])

  useEffect(() => {
    console.log('board', game.board)
  }, [game])

  return <>
    { game && game.board.map((row, rowIndex) => {
      return row.map((value, colIndex) => {
        return <Tile key={`${colIndex}-${rowIndex}`} position={[colIndex, rowIndex]} value={value} />
      })
    })
    } 
  </>
}
