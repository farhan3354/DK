import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Componnet/Navbar/Navbar'
import LandinPage from './Componnet/LandingPages/LandinPage'
import Footer from './Componnet/Footer/Footer'
import OurStory from '././Componnet/Page/OurStory'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<LandinPage/>} />
      <Route path='our-story'element={<OurStory/>} />
      <Route path='/'element={<LandinPage/>} />
      <Route path='/'element={<LandinPage/>} />
      <Route path='/'element={<LandinPage/>} />
      <Route path='/'element={<LandinPage/>} />
      <Route path='/'element={<LandinPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App