import React from 'react'
import { BrowserRouter,Router,R } from 'react-router-dom'
import Navbar from './Componnet/Navbar/Navbar'
import LandinPage from './Componnet/LandingPages/LandinPage'
import Footer from './Componnet/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <LandinPage />
      <Footer/>
    </div>
  )
}

export default App