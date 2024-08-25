import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`body-font ${isOpen ? 'bg-white' : 'bg-amber-100'}`}>
            <div className="container mx-auto px-5 md:px-32 py-4 flex flex-wrap items-center justify-between">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img
                        src="https://dkgroup.pk/wp-content/uploads/2024/03/dk-group-2-1.png" // Replace with your logo path
                        alt="Logo"
                        className="w-16 h-16"
                    />
                </a>

                <nav className={`md:flex md:items-center md:space-x-5 text-base mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:flex-col md:space-y-4 md:ml-auto`}>
                    <a href="/" className="hover:text-gray-900 font-bold block md:inline-block">Home</a>
                    <a href="/second" className="hover:text-gray-900 font-bold block md:inline-block">Our Story</a>
                    <a href="/third" className="hover:text-gray-900 font-bold block md:inline-block">Pricing</a>
                    <a href="/fourth" className="hover:text-gray-900 font-bold block md:inline-block">Project</a>
                    <a href="/fifth" className="hover:text-gray-900 font-bold block md:inline-block">Contact Us</a>
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

                <div className={`md:flex md:items-center md:space-x-4 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <a href="/Login" className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none bg-yellow-500 hover:text-gray-900 rounded-xl text-base font-bold">
                        Login
                    </a>
                    <a href="/SignUp" className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none bg-yellow-500 hover:text-gray-900 rounded-xl text-base font-bold">
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
