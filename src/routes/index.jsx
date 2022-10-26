import Layout from '../containers/Layout'
import Header from '../components/Header'
import BoardContainer from '../containers/BoardContainer'
import { GameProvider } from '../contexts/GameContext'

export default function App() {
  return (
    <GameProvider>
      <Layout>
        <Header />
        <BoardContainer />
      </Layout>
    </GameProvider>
  )
}
