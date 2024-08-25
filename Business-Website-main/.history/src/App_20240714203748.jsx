import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Componnet/Navbar/Navbar'
import LandinPage from './Componnet/LandingPages/LandinPage'
import Footer from './Componnet/Footer/Footer'
import OurStory from './Componnet/Pages/OutStory'
import Pricing from './Componnet/Pages/Pricing'
import Projects from './Componnet/Pages/Projects'
import  ContactUs from './Componnet/Pages/ContactUs'
import OurStory from './Componnet/Form/Login'
import OurStory from './Componnet/Pages/OutStory'

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