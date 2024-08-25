import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import LandingPage from './Component/LandingPages/LandingPage';
import Footer from './Component/Footer/Footer';
import OurStory from './Component/Pages/Story/OurStory';
import Pricing from './Component/Pages/Pricing/Pricing';
import Projects from './Component/Pages/Projects/Projects';
import ContactUs from './Component/Pages/Contact/ContactUs';
import Login from './Component/Form/Login';
import SignUp from './Component/Form/SignUp';
import Social from './Component/LandingPages/Projects/Social';
import Loja from './Component/LandingPages/Projects/Loja';
import Goloritu from './Component/LandingPages/Projects/Goloritu';
import Elisha from './Component/LandingPages/Projects/Elisha';
import Dk from './Component/LandingPages/Projects/Dk';
import DkTech from './Component/LandingPages/Projects/DkTech';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with settings
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='our-story' element={<OurStory />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='social-swiril' element={<Social />} />
        <Route path='loja' element={<Loja />} />
        <Route path='goloritu' element={<Goloritu />} />
        <Route path='elisha' element={<Elisha />} />
        <Route path='dk' element={<Dk />} />
        <Route path='dktech' element={<DkTech />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
