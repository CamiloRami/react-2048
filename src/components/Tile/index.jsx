export default function Tile({ position = [1, 1], value }) {
  const tilePosition = {
    transform: `translate(${position[0] * 5}rem, ${position[1] * 5}rem)`,
  }

  if (value === 0) {
    return null
  }

  return (
    <div
      className="bg-green-300 rounded-lg w-16 h-16 grid items-center text-4xl transition absolute"
      style={tilePosition}
    >
      <span className="mb-1">{value}</span>
    </div>
  )
}
