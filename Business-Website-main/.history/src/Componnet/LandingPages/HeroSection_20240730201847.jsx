import React from 'react';
import p1 from '../../assets/s1.png';
import p2 from '../../assets/s2.png';

const HeroSection = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <section className="text-black body-font bg-white">
                <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 md:py-24 items-center md:pl-20">
                    <div className="flex flex-col md:items-start md:text-left mb-10 md:mb-0 w-full md:w-1/2">
                        <h2 className="text-3xl sm:text-5xl mb-4 font-bold text-black">
                            INVEST YOUR
                        </h2>
                        <h1 className="text-4xl sm:text-6xl mb-4 font-bold text-black">
                            MONEY!
                        </h1>
                        <p className="mb-8 text-black text-lg sm:text-2xl leading-relaxed">
                            JOIN OUR COMMUNITY OF INVESTORS TODAY
                            <br />
                            AND TAKE CONTROL OF YOUR FINANCIAL
                            <br />
                            FUTURE WITH DK GROUP
                        </p>
                        <div className="flex justify-start">
                            <button className="text-white bg-black border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border-gray-900 rounded-lg text-lg transition-all duration-300">
                                View Our Plan
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img className="object-cover object-center rounded-lg w-full max-w-sm md:max-w-md" alt="hero" src={p1} />
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-center mt-16 md:mt-0">
                <img className="w-full md:w-2/4 px-4 md:px-0" src={p2} alt="Project Image" />
            </div>
        </div>
    );
}

export default HeroSection;
