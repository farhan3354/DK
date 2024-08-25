import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-4">
          <img className="h-14 mx-12" src="https://dkgroup.pk/wp-content/uploads/2024/03/dk-group-2-1.png" alt="Logo" />
        </div>
        {/* Menu */}
        <h1 className='text-1xl font-bold text-white mx-12 py-0 hover:text-yellow-500'>Menu</h1>
        <p className="mx-12 py-1">____________________________</p>
        {/* Navigation */}
        <nav className="space-y-3 mx-12">
          <a href="/" className="block text-white hover:text-yellow-500">Home</a>
          <a href="/projects" className="block text-white hover:text-yellow-500">Projects</a>
          <a href="/pricing" className="block text-white hover:text-yellow-500">Pricing</a>
          <a href="/our-story" className="block text-white hover:text-gray-500">Our Story</a>
          <a href="/contact" className="block text-white hover:text-gray-300">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
