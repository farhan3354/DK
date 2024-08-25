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
        <div className="mx-12">
          <h1 className="text-xl font-bold text-white py-0 hover:text-yellow-500">Menu</h1>
          <p className="py-1 border-b border-white opacity-50"></p>
        </div>

        {/* Navigation */}
        <nav className="space-y-3 mx-12">
          <a href="/" className="block text-white hover:text-yellow-500">Home</a>
          <a href="/projects" className="block text-white hover:text-yellow-500">Projects</a>
          <a href="/pricing" className="block text-white hover:text-yellow-500">Pricing</a>
          <a href="/our-story" className="block text-white hover:text-yellow-500">Our Story</a>
          <a href="/contact" className="block text-white hover:text-yellow-500">Contact Us</a>
        </nav>

        {/* Join Section */}
        <div className="mx-12 my-4 py-4 bg-bg-inherit rounded-xl text-center text-white">
          <h2 className="font-bold text-xl mb-2">JOIN OUR OF INVESTOR TODAY</h2>
          <p className="mb-4">
            DK Group insightful strategies and commitment to client success have transformed my portfolio,
            earning both trust and impressive returns.
          </p>
          <button className="bg-white px-4 py-2 rounded-md text-black hover:bg-yellow-500">Join Now</button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-white py-4 bg-yellow-500 m-2">
        <p>© 2024 DK Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
