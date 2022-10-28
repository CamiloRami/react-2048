import { GameProvider } from '../contexts/GameContext'
import Layout from '../containers/Layout'
import BoardContainer from '../containers/BoardContainer'
import Header from '../components/Header'
import GameOver from '../components/GameOver'
import ScoreContainer from '../containers/ScoreContainer'

export default function App() {
  return (
    <GameProvider>
      <Layout>
        <Header />
        <ScoreContainer />
        <BoardContainer />
        <GameOver />
      </Layout>
    </GameProvider>
  )
}
