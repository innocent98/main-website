import './App.scss'
import Auth from './atomic/organisms/Auth'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={LandingPage}/>
      <Route exact path='/signUp' Component={Auth}/>
    </Routes>
  )
}

export default App
