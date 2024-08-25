import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Componnet/Navbar/Navbar'
import LandinPage from './Componnet/LandingPages/LandinPage'
import Footer from './Componnet/Footer/Footer'
import OurStory from './Componnet/Pages/OutStory'
import Pricing from './Componnet/Pages/Pricing'
import Projects from './Componnet/Pages/Projects'
import  ContactUs from './Componnet/Pages/ContactUs'
import Login from './Componnet/Form/Login'
import SignUp from './Componnet/Form/SignUp'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<LandinPage/>} />
      <Route path='our-story'element={<OurStory/>} />
      <Route path='pricing'element={<LandinPage/>} />
      <Route path='projects'element={<LandinPage/>} />
      <Route path='contact'element={<LandinPage/>} />
      <Route path='login'element={<LandinPage/>} />
      <Route path='/'element={<LandinPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App