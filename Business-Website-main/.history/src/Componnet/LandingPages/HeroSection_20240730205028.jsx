import React from 'react';
import p1 from '../../assets/s1.png';
import p2 from '../../assets/s2.png';

const HeroSection = () => {
    return (
        <div>
            <section className="text-black body-font opacity-100 translate-y-0 transition-opacity duration-300 ease-in-out transform transition-transform duration-500 ease-in-out absolute w-full md:flex  ">
                <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 md:pl-32 items-start">
                    <div className="hero-content pl-0 md:pl-20 w-full md:w-auto ">
                        <h2 className="text-3xl sm:text-5xl mb-4 font-bold text-black transition-all duration-500">
                            INVEST YOUR
                        </h2>
                        <h1 className="text-5xl sm:text-7xl mb-4 font-bold text-black transition-all duration-500">
                            MONEY!
                        </h1>
                        <p className="mb-8 text-black text-lg sm:text-2xl leading-relaxed transition-all duration-500">
                            JOIN OUR COMMUNITY OF INVESTORS TODAY
                            <br />
                            AND TAKE CONTROL OF YOUR FINANCIAL
                            <br />
                            FUTURE WITH DK GROUP
                        </p>
                        <div className="flex">
                            <button className="text-white bg-black shadow-transparent border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border-gray-900 rounded-lg text-lg transition-all duration-300">
                                View Our Plan
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-8 md:mt-0 ml-0 md:ml-64 w-full md:w-auto">
                        <img className="object-cover object-center rounded-lg mb-4 w-full md:w-auto" alt="hero" src={p1} />
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-start relative mt-16 md:mt-0 md:top-56 md:right-6   ">
                <img className="w-full md:w-2/4 px-4 md:px-0" src={p2} alt="Project Image" />
            </div>
        </div>
    );
}

export default HeroSection;
