import React from 'react';

const Navbar = () => {
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

                    <nav className="md:flex md:items-center md:space-x-5 text-base mt-4 md:mt-0">
                        <a href="/" className="hover:text-gray-900 font-bold">Home</a>
                        <a href="/second" className="hover:text-gray-900 font-bold">Our Story</a>
                        <a href="/third" className="hover:text-gray-900 font-bold">Pricing</a>
                        <a href="/fourth" className="hover:text-gray-900 font-bold">Project</a>
                        <a href="/fifth" className="hover:text-gray-900 font-bold">Contact Us</a>
                    </nav>

                    <div className="md:flex md:items-center md:space-x-4 mt-4 md:mt-0">
                        <a href="/Login" className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none bg-yellow-500 hover:text-gray-900 rounded-xl text-base font-bold">
                            Login
                        </a>
                        <a href="/SignUp" className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none bg-yellow-500 hover:text-gray-900 rounded-xl text-base font-bold">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
