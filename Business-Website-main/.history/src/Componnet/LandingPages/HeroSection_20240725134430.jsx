import React from 'react';
import '../Ass'
const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font bg-gradient-to-b from-yellow-300 via-white to-yellow-100 opacity-100 translate-y-0 transition-opacity duration-300 ease-in-out transform transition-transform duration-500 ease-in-out">
            <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 md:pl-32 items-start">
                <div className="hero-content pl-20 order-2 md:order-1">
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
                        <button className="text-white bg-black border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border-gray-900 rounded-lg text-lg transition-all duration-300">
                            View Our Plan
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center order-1 md:order-2 pl-0 md:pl-64 " >
                    <img className="object-cover object-center rounded-lg mb-4" alt="hero" src="https://dkgroup.pk/wp-content/uploads/2024/03/image-removebg-preview__2_-removebg-preview.png" />
                </div>
                
            </div>
           
        </section>
    );
}

export default HeroSection;
