import { Provider } from 'react-redux'
import './App.css'
import { NavBar } from './components'
import { Home } from './pages'
import { LayoutContainer } from './styled-components'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <LayoutContainer>
        <Home/>
      </LayoutContainer>
    </Provider>
  )
}

export default App
