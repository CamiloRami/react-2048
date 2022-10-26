import { useEffect, useState } from 'react'
import { useGame } from '../../contexts/GameContext'

export default function Tile({ position, value }) {
  const [positionState, setPositionState] = useState({
    transform: `translate(${position[0] * 5}rem, ${position[1] * 5}rem)`,
  })
  
  const [color, setColor] = useState('tile-2')



  const { game, motion } = useGame()
  
  useEffect(() => {
    if (motion.isMoving) {
      console.log('motion', motion)
      if (motion.direction === 'right') {
        const newPosition = [position[0] + motion.steps[position[1]][position[0]], position[1]]
        setPositionState({
          transform: `translate(${newPosition[0] * 5}rem, ${newPosition[1] * 5}rem)`,
        })
      }
      if (motion.direction === 'left') {
        const newPosition = [position[0] - motion.steps[position[1]][position[0]], position[1]]
        setPositionState({
          transform: `translate(${newPosition[0] * 5}rem, ${newPosition[1] * 5}rem)`,
        })
      }
      if (motion.direction === 'up') {
        const newPosition = [position[0], position[1] - motion.steps[position[1]][position[0]]]
        setPositionState({
          transform: `translate(${newPosition[0] * 5}rem, ${newPosition[1] * 5}rem)`,
        })
      }
      if (motion.direction === 'down') {
        const newPosition = [position[0], position[1] + motion.steps[position[1]][position[0]]]
        setPositionState({
          transform: `translate(${newPosition[0] * 5}rem, ${newPosition[1] * 5}rem)`,
        })
      }
    }
  }, [motion, game.board, position])
  
  return (
    <div className="rounded-lg w-16 h-16 grid items-center text-4xl transition absolute" style={positionState}>
      <span className="mb-1">{value}</span>
    </div>
  )
}
