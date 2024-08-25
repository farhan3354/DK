import React from 'react';
import p10 from '../../assets/s1.png';
import p20 from '../../assets/s2.png';
import { NavLink } from 'react-router-dom'; // Correct import statement

const HeroSection = () => {
    return (
        <div>
            <section className="absolute w-full text-black ease-in-out transform translate-y-0 opacity-100 body-font md:flex">
                <div className="container flex flex-col items-start px-5 py-16 mx-auto md:flex-row md:pl-32">
                    <div className="w-full pl-0 mb-4 hero-content md:pl-20 md:w-auto md:mb-0">
                        <h2 className="mb-4 text-3xl font-bold text-black transition-all duration-500 sm:text-5xl">
                            INVEST YOUR
                        </h2>
                        <h1 className="mb-4 text-5xl font-bold text-black transition-all duration-500 sm:text-7xl">
                            MONEY!
                        </h1>
                        <p className="mb-8 text-lg leading-relaxed text-black transition-all duration-500 sm:text-2xl">
                            JOIN OUR COMMUNITY OF INVESTORS TODAY
                            <br />
                            AND TAKE CONTROL OF YOUR FINANCIAL
                            <br />
                            FUTURE WITH DK GROUP
                        </p>
                        <NavLink to={"/pricing"}>
                            <div className="flex">
                                <button className="px-6 py-2 text-lg text-white transition-all duration-300 bg-black border-2 border-black rounded-lg shadow-transparent focus:outline-none hover:bg-gray-900 hover:border-gray-900">
                                    View Our Plan
                                </button>
                            </div>
                        </NavLink>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full mt-6 ml-0 md:mt-0 md:ml-64 md:w-auto custom-range:hidden">
                        <img className="object-cover object-center w-full mb-4 rounded-lg md:w-auto custom-range:hidden" alt="hero" src={p10} />
                    </div>
                </div>
            </section>
            <div className="relative flex items-start justify-center mt-16 md:mt-0 md:top-56 md:right-6 custom-range:top-96">
                <img className="w-full px-4 md:w-2/4 md:px-0" src={p20} alt="Project Image" />
            </div>
        </div>
    );
}

export default HeroSection;
