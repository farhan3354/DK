import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">

       

        {/* Navigation */}
        <nav className="flex space-x-6 my-4 flex-1 justify-center">
          <a href="/" className="text-black hover:text-yellow-500">Home</a>
          <a href="/projects" className="text-black hover:text-yellow-500">Projects</a>
          <a href="/pricing" className="text-black hover:text-yellow-500">Pricing</a>
          <a href="/our-story" className="text-black hover:text-yellow-500">Our Story</a>
          <a href="/contact" className="text-black hover:text-yellow-500">Contact Us</a>
        </nav>

      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-4">
        <a href="https://facebook.com" className="text-black mx-2 hover:text-yellow-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" className="text-black mx-2 hover:text-yellow-500">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" className="text-black mx-2 hover:text-yellow-500">
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-black py-4 text-whitey-900 m-2 hover:text-yellow-500">
        <button>
          <a href="/">© 2024 DK Group. All rights reserved.</a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
