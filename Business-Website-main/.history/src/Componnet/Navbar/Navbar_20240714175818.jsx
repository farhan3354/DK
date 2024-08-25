import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="text-black-600 body-font">
            <div className="bg-amber-100">
                <div className="container mx-auto px-5 md:px-32 py-4 flex flex-wrap items-center justify-between">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img
                            src="https://dkgroup.pk/wp-content/uploads/2024/03/dk-group-2-1.png" // Replace with your logo path
                            alt="Logo"
                            className="w-16 h-16"
                        />
                    </a>

                    <nav className="hidden md:flex md:flex-wrap md:items-center md:text-base md:justify-center">
                        <a href="/" className="block mt-4 md:mt-0 mr-5 hover:text-gray-900 font-bold">Home</a>
                        <a href="/second" className="block mt-4 md:mt-0 mr-5 hover:text-gray-900 font-bold">Our Story</a>
                        <a href="/third" className="block mt-4 md:mt-0 mr-5 hover:text-gray-900 font-bold">Pricing</a>
                        <a href="/fourth" className="block mt-4 md:mt-0 mr-5 hover:text-gray-900 font-bold">Project</a>
                        <a href="/fifth" className="block mt-4 md:mt-0 mr-5 hover:text-gray-900 font-bold">Contact Us</a>
                    </nav>
                    <div className="hidden md:flex items-center mt-4 md:mt-0">
                        <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-400 hover:text-gray-900 rounded- text-base font-bold transition-colors duration-300 mr-4">
                            <a href="/Login">Login</a>
                        </button>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-400 hover:text-gray-900 rounded-lg text-base font-bold transition-colors duration-300">
                            <a href="/Login">SignUp</a>
                        </button>
                    </div>
                    <div className="md:hidden ml-auto">
                        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    {menuOpen && (
                        <nav className="md:hidden absolute top-16 left-0 w-full bg-white">
                            <a href="/" className="block px-5 py-4 hover:text-gray-900 font-bold">Menu</a>
                            <a href="/second" className="block px-5 py-4 hover:text-gray-900 font-bold">Our Story</a>
                            <a href="/third" className="block px-5 py-4 hover:text-gray-900 font-bold">Pricing</a>
                            <a href="/fourth" className="block px-5 py-4 hover:text-gray-900 font-bold">Project</a>
                            <a href="/fifth" className="block px-5 py-4 hover:text-gray-900 font-bold">Contact Us</a>
                            <button className="block w-full text-left px-5 py-4 hover:text-gray-900 font-bold">Login</button>
                            <button className="block w-full text-left px-5 py-4 hover:text-gray-900 font-bold">Sign Up</button>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;
