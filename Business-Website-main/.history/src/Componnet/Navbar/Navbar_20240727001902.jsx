import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Mod
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="text-black-600 body-font">
            <div className="bg-white">
                <div className="container mx-auto px-5 md:px-32 py-4 flex flex-wrap items-center justify-between">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img
                            src={Logo} // Replace with your logo path
                            alt="Logo"
                            className="w-16 h-16"
                        />
                    </Link>

                    <nav className={`md:flex md:items-center md:space-x-5 text-base mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
                        <Link to="/" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Home</Link>
                        <Link to="/our-story" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Our Story</Link>
                        <Link to="/pricing" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Pricing</Link>
                        <Link to="/projects" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Projects</Link>
                        <Link to="/contact" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Contact Us</Link>
                    </nav>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                )}
                            </svg>
                        </button>
                    </div>

                    <div className="md:flex md:items-center md:space-x-4 mt-4 md:mt-0 hidden md:block">
                        <Link to="/login" className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none bg-yellow-500 hover:text-gray-900 rounded-xl text-base font-bold">
                            Login
                        </Link>
                        <Link to="/signup" className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none bg-yellow-500 hover:text-gray-900 rounded-xl text-base font-bold">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
