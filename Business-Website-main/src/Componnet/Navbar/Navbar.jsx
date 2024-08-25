// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.png'
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <header className="text-black-600 body-font">
//             <div className="bg-white">
//                 <div className="container flex flex-wrap items-center justify-between px-5 py-4 mx-auto md:px-32">
//                     <Link to="/" className="flex items-center mb-4 text-2xl font-semibold text-black title-font md:mb-0">
//                         <img
//                             src={Logo} // Replace with your logo path
//                             alt="Logo"
//                             className="w-16 h-16"
//                         />
//                     </Link>

//                     <nav className={`md:flex md:items-center md:space-x-5 text-lg  mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
//                         <Link to="/" className="block mt-4 font-bold hover:text-gray-900 md:inline-block md:mt-0">Home</Link>
//                         <Link to="/our-story" className="block mt-4 font-bold hover:text-gray-900 md:inline-block md:mt-0">Our Story</Link>
//                         <Link to="/pricing" className="block mt-4 font-bold hover:text-gray-900 md:inline-block md:mt-0">Pricing</Link>
//                         <Link to="/projects" className="block mt-4 font-bold hover:text-gray-900 md:inline-block md:mt-0">Projects</Link>
//                         <Link to="/contact" className="block mt-4 font-bold hover:text-gray-900 md:inline-block md:mt-0">Contact Us</Link>
//                     </nav>

//                     <div className="md:hidden">
//                         <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 {isOpen ? (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                                 ) : (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                                 )}
//                             </svg>
//                         </button>
//                     </div>

//                     <div className="hidden mt-4 md:flex md:items-center md:space-x-4 md:mt-0 md:block">
//                         <Link to="/login" className="inline-flex items-center px-4 py-2 text-base font-bold bg-gray-100 bg-yellow-500 border-0 focus:outline-none hover:text-gray-900 rounded-xl">
//                             Login
//                         </Link>
//                         <Link to="/signup" className="inline-flex items-center px-4 py-2 text-base font-bold bg-gray-100 bg-yellow-500 border-0 focus:outline-none hover:text-gray-900 rounded-xl">
//                             Sign Up
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Navbar;


import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Logo from '../../assets/logo.png'; // Ensure the logo import matches the filename
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = () => {
    setShowMenu(false); // Close the menu when a link is clicked
  };

  return (
    <div>
      <nav className="justify-between p-3 bg-white shadow-md md:flex">
        <div className="flex items-center justify-between w-full md:w-1/4">
          <Link to={'/'}>
            <img src={Logo} className="w-24 h-24 mx-10" alt="Logo" />
          </Link>
          <div className="md:hidden">
            <button
              className="text-3xl text-yellow-400"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <RxCross2 /> : <IoMenuSharp />}
            </button>
          </div>
        </div>

        <div
          className={`md:flex items-center md:w-3/4 justify-between ${showMenu ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col items-center w-full gap-5 mr-24 text-xl text-black md:flex-row md:justify-center font-semi-bold">
            <li className="mt-1 nav-item md:mt-0">
              <NavLink to="/" exact className="font-semibold text-black transition duration-300 hover:text-yellow-500" activeClassName="text-yellow-500" onClick={handleLinkClick}>Home</NavLink>
            </li>
            <li className="mt-1 nav-item md:mt-0">
              <NavLink to="/our-story" className="font-semibold text-black transition duration-300 hover:text-yellow-500" activeClassName="text-yellow-500" onClick={handleLinkClick}>Our Story</NavLink>
            </li>
            <li className="mt-1 nav-item md:mt-0">
              <NavLink to="/projects" className="font-semibold text-black transition duration-300 hover:text-yellow-500" activeClassName="text-yellow-500" onClick={handleLinkClick}>Projects</NavLink>
            </li>
            <li className="mt-1 nav-item md:mt-0">
              <NavLink to="/pricing" className="font-semibold text-black transition duration-300 hover:text-yellow-500" activeClassName="text-yellow-500" onClick={handleLinkClick}>Pricing</NavLink>
            </li>
            <li className="mt-1 nav-item md:mt-0">
              <NavLink to="/contact" className="font-semibold text-black transition duration-300 hover:text-yellow-500" activeClassName="text-yellow-500" onClick={handleLinkClick}>Contact Us</NavLink>
            </li>
           
          </ul>
          <div className="flex flex-col items-center gap-4 mt-4 md:flex-row md:gap-6 md:items-center md:mt-0">
            <ul className="flex flex-col w-full gap-4 text-center md:flex-row md:justify-end md:items-center md:text-left">
              <li className="mt-2 md:mt-0">
                <Link
                  to="/login"
                  className="block px-6 py-2 ml-2 font-bold text-center text-black transition duration-300 bg-yellow-500 border-2 border-yellow-500 rounded-md hover:bg-yellow-600 hover:border-yellow-600"
                  onClick={handleLinkClick}
                >
                  Login
                </Link>
              </li>
              <li className="mt-2 md:mt-0">
                <Link
                  to="/signup"
                  className="block px-6 py-2 ml-2 font-bold text-center text-black transition duration-300 bg-yellow-500 border-2 border-yellow-500 rounded-md hover:bg-yellow-600 hover:border-yellow-600"
                  onClick={handleLinkClick}
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
