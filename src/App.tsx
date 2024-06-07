import CardList from './components/CardList'
import Hero from './components/Hero'
import { GlobalStyles } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <div className="container">
        <CardList />
      </div>
    </>
  )
}

export default App
