import useLocalStorage from './useLocalStorage'

export default function useScore() {
  const [score, setScore] = useLocalStorage('score', 0)
  const [bestScore, setBestScore] = useLocalStorage('bestScore', 0)

  const resetScore = () => {
    setScore(0)
  }

  const updateScore = (newScore) => {
    setScore(newScore)
    if (newScore > bestScore) {
      setBestScore(newScore)
    }
  }

  return [score, bestScore, resetScore, updateScore]
}
