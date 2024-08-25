import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">

        {/* Join Section */}
        <div className="text-center text-black bg-bg-inherit m-2 rounded-xl pr-12 border-2 bg-white p-4 border-gray-900 flex-1">
          <h1 className="text-black text-1xl font-bold">JOIN OUR INVESTOR TODAY</h1>
          <p>DK Group's insightful strategies and commitment<br/> to client success have transformed my portfolio <br/> earning both trust and impressive returns.</p>
          <button className="bg-yellow-500 px-4 py-2 rounded-md mt-4 text-black hover:bg-white">
            <a href="/">Join Now</a>
          </button>
        </div>

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
