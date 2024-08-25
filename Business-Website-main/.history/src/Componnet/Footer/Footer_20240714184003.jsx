import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex ">
        <div>
        <div className="mb-4">
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
        <div className="flex items-center m">
          <div className="text-center text-white bg-bg-inherit m-2 mx-auto rounded-xl">
            <h1 className="text-white text-2xl font-bold">JOIN OUR OF INVESTOR TODAY</h1>
            <p>DK Group insightful strategies and commitment<br/> to client success have transformed my portfolio <br/> earning both trust and impressive returns.</p>
            <button className="bg-white px-4 py-2 rounded-md mt-4 text-black hover:bg-yellow-500">Join Now</button>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-white py-4 bg-yellow-500 m-2">
        <p>© 2024 DK Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
