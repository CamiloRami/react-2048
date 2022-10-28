import { useGame } from "../../contexts/GameContext"

export default function Score() {
  const { score, bestScore } = useGame()

  return (
    <>
      <div className="flex flex-col items-center justify-center w-32 rounded-lg bg-gray-1">
        <div className="text-xl font-bold text-gray-3">Score</div>
        <div className="text-xl font-bold text-gray-3">{score}</div>
      </div>
      <div className="flex flex-col items-center justify-center w-32 rounded-lg bg-gray-1">
        <div className="text-xl font-bold text-gray-3">Best Score</div>
        <div className="text-xl font-bold text-gray-3">{bestScore}</div>
      </div>
    </>
  )
}