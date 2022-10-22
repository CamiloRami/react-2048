import { useContext, createContext, useState } from 'react'

const TilesContext = createContext()

const initialTiles = [
  [2, 0, 4, 0],
  [0, 0, 0, 4],
  [0, 0, 2, 0],
  [4, 0, 0, 0],
]

const useTiles = () => {
  const context = useContext(TilesContext)
  if (context === undefined) {
    throw new Error('useTiles must be used within a TilesProvider')
  }
  return context
}

const TilesProvider = ({ children }) => {
  const [tiles, setTiles] = useState(initialTiles)

  return <TilesContext.Provider value={{ tiles, setTiles }}>{children}</TilesContext.Provider>
}

export { TilesProvider, useTiles }
