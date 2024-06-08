import CardList from '../../components/CardList'
import Rodape from '../../components/Footer'
import Hero from '../../components/Hero'

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <CardList />
    </div>
    <Rodape />
  </>
)

export default Home
