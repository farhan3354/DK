import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">

        {/* Logo and Menu */}
        <div className="flex flex-col mb-4 sm:mb-0">
          <div className="mb-4 sm:mb-0">
            <img className="h-14 mx-12" src="https://dkgroup.pk/wp-content/uploads/2024/03/dk-group-2-1.png" alt="Logo" />
          </div>
          <h1 className="text-1xl font-bold text-white mx-12 py-0 hover:text-yellow-500">Menu</h1>
          <p className="mx-12 py-1">____________________________</p>
          {/* Navigation */}
          <nav className="space-y-3 mx-12">
            <a href="/" className="block text-white hover:text-yellow-500">Home</a>
            <a href="/projects" className="block text-white hover:text-yellow-500">Projects</a>
            <a href="/pricing" className="block text-white hover:text-yellow-500">Pricing</a>
            <a href="/our-story" className="block text-white hover:text-yellow-500">Our Story</a>
            <a href="/contact" className="block text-white hover:text-yellow-500">Contact Us</a>
          </nav>
        </div>

        {/* Join Section */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center ml-4 ">
          <div className="text-center text-white bg-bg-inherit m-2 rounded-xl pr-12 border-2 bg-gray-900 p-4 border-gray-900">
            <h1 className="text-white text-1xl font-bold">JOIN OUR OF INVESTOR TODAY</h1>
            <p>DK Group insightful strategies and commitment<br/> to client success have transformed my portfolio <br/> earning both trust and impressive returns.</p>
            <button className="bg-yellow-500 px-4 py-2 rounded-md mt-4 text-black hover:bg-white">Join Now</button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-4">
        <a href="https://facebook.com" className="text-white mx-2 hover:text-yellow-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" className="text-white mx-2 hover:text-yellow-500">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" className="text-white mx-2 hover:text-yellow-500">
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-white py-4 bg-gray-900 m-2 ">
        <p>© 2024 DK Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
