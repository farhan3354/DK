import React from 'react';

const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font bg-gradient-to-b from-yellow-300 via-white to-yellow-100 opacity-100">
            <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 items-center md:items-start">
                <div className="hero-content md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0 ">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-black transition-all duration-500">
                        INVEST YOUR
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl mb-4 font-bold text-black transition-all duration-500">
                        MONEY!
                    </h1>
                    <p className="mb-8 text-black text-base sm:text-lg md:text-2xl leading-relaxed transition-all duration-500">
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
                <div className="md:w-1/2 flex justify-center">
                    <img className="object-cover object-center rounded-lg mb-4 w-full md:w-auto" alt="hero" src="https://dkgroup.pk/wp-content/uploads/2024/03/image-removebg-preview__2_-removebg-preview.png" />
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <img className="w-full md:w-1/2" src="https://dkgroup.pk/wp-content/uploads/2024/03/Screenshot_2024-02-29_at_17-17-52_funnel.pdf-removebg-preview.png" alt="Project Image" />
            </div>
        </section>
    );
}

export default HeroSection;
