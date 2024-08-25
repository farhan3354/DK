import React from 'react'
import { BrowserRouter,Router,Route } from 'react-router-dom'
import Navbar from './Componnet/Navbar/Navbar'
import LandinPage from './Componnet/LandingPages/LandinPage'
import Footer from './Componnet/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Router>
      <Route path='/'element={<LandinPage/>} />
     
    </Router>
    <Footer/>
    </BrowserRouter>
  )
}

export default App