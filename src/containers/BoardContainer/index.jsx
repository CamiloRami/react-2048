import Board from '../../components/Board'

export default function BoardContainer() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center outline-none">
      <div className="relative grid">
        <div className="grid grid-cols-4 grid-rows-4 gap-4">
          {Array.from({ length: 16 }).map((_, index) => {
            return <div className="bg-gray-200 rounded-lg p-8" key={index}></div>
          })}
        </div>
        <div className="absolute">
          <Board />
        </div>
      </div>
    </div>
  )
}
