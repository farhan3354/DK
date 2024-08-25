import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import LandingPage from './Component/LandingPages/LandingPage'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
