import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Countries from './pages/Countries'
import StateDetail from './pages/StateDetail'
import CountryDetail from './pages/CountryDetail'

function App() {
  return (
    <>
      <Router>
        <div className='container mx-auto bg-light'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/countries' element={<Countries />} />
            <Route path='/:countryId/state/:stateId' element={<StateDetail />} />
            <Route path='/country/:countryId' element={<CountryDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
