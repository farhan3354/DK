import React from 'react';
import './HeroSection.css'; // Assuming you create a CSS file for animations

const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font bg-gradient-to-b from-yellow-300 via-white to-yellow-100 opacity-100 translate-y-0" style={{ transition: 'opacity 3s ease, transform 0.5s ease' }}>
            <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 md:pl-32 items-start">
                <div className="hero-content pl-20 order-2 md:order-1">
                    <h2 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-black transition-all duration-500">
                        INVEST YOUR
                    </h2>
                    <h1 className="title-font sm:text-7xl text-5xl mb-4 font-bold text-black transition-all duration-500">
                        MONEY!
                    </h1>
                    <p className="mb-8 leading-relaxed transition-all duration-500 text-black title-font sm:text-2xl">
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
                <div className="image-container  pl-64 order-1 md:order-2">
                    <img className="object-cover object-center rounded-lg" alt="hero" src="https://dkgroup.pk/wp-content/uploads/2024/03/image-removebg-preview__2_-removebg-preview.png" />
                    <div className='pr-32'>
                    <img className="" src="https://dkgroup.pk/wp-content/uploads/2024/03/Screenshot_2024-02-29_at_17-17-52_funnel.pdf-removebg-preview.png" alt="Project Image" />
                    </div>
                </div>
            </div>
        
        </section>
    );
}

export default HeroSection;
