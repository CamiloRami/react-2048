import { useState, useCallback } from 'react'
import { useGame } from '../../contexts/GameContext'
import { createPortal } from 'react-dom'

export default function TouchArea() {
  const { touchMove } = useGame()
  const [startLocation, setStartLocation] = useState(null)

  const handleTouchStart = useCallback((e) => {
    setStartLocation({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    })
  }, [])

  const handleTouchEnd = useCallback((e) => {
    const endLocation = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    }
    const xDiff = startLocation.x - endLocation.x
    const yDiff = startLocation.y - endLocation.y

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        touchMove('left')
      } else {
        touchMove('right')
      }
    } 
    if (Math.abs(yDiff) > Math.abs(xDiff)) {
      if (yDiff > 0) {
        touchMove('up')
      } else {
        touchMove('down')
      }
    }
  }, [startLocation, touchMove])

  return createPortal(
    <div
      className="fixed top-64 left-0 w-full h-full bg-transparent"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    />,
    document.getElementById('modal')
  )
}