import Score from "../../components/Score"
import ResetButton from "../../components/ResetButton"

export default function ScoreContainer() {
  return (
    <div className="flex flex-row justify-between w-80 pb-16">
      <Score />
      <ResetButton />
    </div>
  )
}