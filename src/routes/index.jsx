import Layout from '../containers/Layout'
import Header from '../components/Header'
import BoardContainer from '../containers/BoardContainer'
import { TilesProvider } from '../contexts/TilesContext'

export default function App() {
  return (
    <TilesProvider>
      <Layout>
        <Header />
        <BoardContainer />
      </Layout>
    </TilesProvider>
  )
}
