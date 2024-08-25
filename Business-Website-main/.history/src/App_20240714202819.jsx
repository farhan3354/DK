import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar fr
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
