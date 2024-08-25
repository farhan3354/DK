import React from 'react';
import './HeroSection.css'; // Assuming you create a CSS file for animations

const HeroSection = () => {
    return (
        <section className={`text-gray-600 body-font bg-yellow-200 opacity-100 translate-y-0`} style={{ transition: 'opacity 3s ease, transform 0.5s ease' }}>
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center md:pl-32">
                <div className="hero-content">
                    <h2 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-black transition-all duration-500">
                        INVEST YOUR
                    </h2>
                    <h1 className="title-font sm:text-7xl text-5xl mb-4 font-bold text-white transition-all duration-500">
                        MONEY!
                    </h1>
                    <p className="mb-8 leading-relaxed transition-all duration-500 text-black title-font sm:text-2xl">
                        JOIN OUR COMMUNITY OF INVESTORS TODAY
                        <br />
                        AND TAKE CONTROL OF YOUR FINANCIAL
                        <br />
                        FUTURE WITH DK GROUP
                    </p>
                    <div className="flex ">
                        <button className=" text-white bg-black border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border-gray-900 rounded-lg text-lg transition-all duration-300">
                            View Our Plan
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pl-48">
                    <img className="object-cover object-center rounded-lg" alt="hero" src="https://dkgroup.pk/wp-content/uploads/2024/03/image-removebg-preview__2_-removebg-preview.png" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
