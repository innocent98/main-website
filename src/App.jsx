import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/aboutpage/About'
import LandingPage from './pages/landingpage/LandingPage'
import Layout from './Layout'
import FaqPage from './components/faq-frame/FaqPage'
import AfilliatePage from './pages/affiliate-page/AfilliatePage'


function App() {

  return (
     <div>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/affiliate" element={<AfilliatePage />} />
        </Route>
      </Routes>
     </div>
  )
}

export default App
