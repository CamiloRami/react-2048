import Score from "../../components/Score"
import ResetButton from "../../components/ResetButton"

export default function ScoreContainer() {
  return (
    <div className="flex flex-row justify-between mt-32 w-80">
      <Score />
      <ResetButton />
    </div>
  )
}