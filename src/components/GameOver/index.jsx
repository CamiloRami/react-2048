import { useEffect, useState } from "react"
import { useGame } from "../../contexts/GameContext"

export default function GameOver() {
  const { game, resetGame } = useGame()
  const [show, setShow] = useState(false)

  useEffect(() => {
    game.isGameOver ? setShow(true) : setShow(false)
  }, [game.isGameOver])

  if (!show) return null

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-96 h-96 bg-white rounded-lg flex flex-col items-center justify-center bg-opacity-50 mt-16">
        <h1 className="text-5xl font-semibold mb-5">Game Over</h1>
        <button onClick={resetGame} className="text-xl py-2 px-8 bg-tile-2 font-semibold rounded-lg" >Restart</button>
      </div>
    </div>
  )
}