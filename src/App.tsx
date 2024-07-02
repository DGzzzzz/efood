import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles'

import Rotas from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
