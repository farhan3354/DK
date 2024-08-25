import React from 'react';
import p1 from '../../assets/s1.png';
import p2 from '../../assets/s2.png';

const HeroSection = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-white opacity-100 translate-y-0 transition-opacity duration-300 ease-in-out transform transition-transform duration-500 ease-in-out absolute">
                <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 items-center">
                    {/* Text Section */}
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl mb-4 font-bold text-black transition-all duration-500">
                            INVEST YOUR
                        </h2>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl mb-4 font-bold text-black transition-all duration-500">
                            MONEY!
                        </h1>
                        <p className="mb-8 text-black text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-500">
                            JOIN OUR COMMUNITY OF INVESTORS TODAY
                            <br />
                            AND TAKE CONTROL OF YOUR FINANCIAL
                            <br />
                            FUTURE WITH DK GROUP
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button className="text-white bg-black border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border-gray-900 rounded-lg text-lg transition-all duration-300">
                                View Our Plan
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end pt-8 md:pt-0">
                        <img className="object-cover object-center rounded-lg mb-4 w-3/4 md:w-full" alt="hero" src={p1} />
                    </div>
                </div>
            </section>

            <div className="flex justify-center items-start relative top-32 md:top-52 right-0 md:right-6">
                <img className="w-3/4 md:w-1/2 lg:w-1/3" src={p2} alt="Project Image" />
            </div>
        </div>
    );
}

export default HeroSection;
