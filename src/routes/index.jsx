import { GameProvider } from '../contexts/GameContext'
import Layout from '../containers/Layout'
import BoardContainer from '../containers/BoardContainer'
import Header from '../components/Header'
import GameOver from '../components/GameOver'
import ScoreContainer from '../containers/ScoreContainer'
import TouchArea from '../components/TouchArea'

export default function App() {
  return (
    <GameProvider>
      <Layout>
        <Header />
        <ScoreContainer />
        <BoardContainer />
        <TouchArea />
        <GameOver />
      </Layout>
    </GameProvider>
  )
}
