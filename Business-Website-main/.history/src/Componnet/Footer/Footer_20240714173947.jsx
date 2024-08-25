import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Logo or site title */}
          <div >
            <img className="h-8" src="/path/to/logo.png" alt="Logo" />
          </div>
          
          {/* Menu */}
          <nav className="hidden  space-x-4">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <a href="/our-story" className="text-white hover:text-gray-300">Our Story</a>
            <a href="/projects" className="text-white hover:text-gray-300">Projects</a>
            <a href="/pricing" className="text-white hover:text-gray-300">Pricing</a>
            <a href="/contact" className="text-white hover:text-gray-300">Contact Us</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
