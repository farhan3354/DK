import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Componnet/Navbar/Navbar';
import LandinPage from './Componnet/LandingPages/LandinPage';
import Footer from './Componnet/Footer/Footer';
import OurStory from './Componnet/Pages/Story/OutStory';
import Pricing from './Componnet/Pages/Pricing/Pricing';
import Projects from './Componnet/Pages/Pro/Projects';
import ContactUs from './Componnet/Pages/Contact/ContactUs';
import Login from './Componnet/Form/Login';
import Social from './Componnet/LandingPages/Projects/Social';
import Loja from './Componnet/LandingPages/Projects/Loja';
import Goloritu from './Componnet/LandingPages/Projects/Goloritu';
import Elisha from './Componnet/LandingPages/Projects/Elisha';
import Dk from './Componnet/LandingPages/Projects/Dk';
import DkTech from './Componnet/LandingPages/Projects/DkTech';
import Dashboard from './Componnet/Dashboard/Dashboard';
import User from './Componnet/Dashboard/User'
const App = () => {
  const location = useLocation(); // Hook to get the current location
  
  return (
    <>
      {/* Conditionally render Navbar based on the current route */}
      {location.pathname !== '/Dashboard' && <Navbar />}
      
      <Routes>
        <Route path='/' element={<LandinPage />} />
        <Route path='our-story' element={<OurStory />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='login' element={<Login />} />
        {/* <Route path='signup' element={<SignUp />} /> */}
        <Route path='social-swiril' element={<Social />} />
        <Route path='Loja' element={<Loja />} />
        <Route path='Gotrolly' element={<Goloritu />} />
        <Route path='Elisha' element={<Elisha />} />
        <Route path='Dk' element={<Dk />} />
        <Route path='DKTech' element={<DkTech />} />
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='/User' element={<User />} />

      </Routes>
      
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
