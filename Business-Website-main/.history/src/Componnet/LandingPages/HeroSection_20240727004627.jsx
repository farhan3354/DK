import React from 'react';
import p1 from '../../assets/s1.png';
import p2 from '../../assets/s2.png'
const HeroSection = () => {
    return (
        <div>
            <section className="text-black body-font bg-white opacity-100 translate-y-0 transition-opacity duration-300 ease-in-out transform transition-transform duration-500 ease-in-out absolute bg-yellow-500">
                <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 md:pl-32 items-start bg-yellow-500 ">
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
                            <button className="text-white bg-black shadow-transparent border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border-gray-900 rounded-lg text-lg transition-all duration-300">
                                View Our Plan
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center order-1 ml-96  " >
                        <img className="object-cover object-center rounded-lg mb-4 " alt="hero" src={p1} />
                    </div>

                </div>

            </section>


            <div className="flex justify-center items-start relative top-52  right-6"> {/* Adjusted to align the content to the top */}
                <img
                    className="pl-50 w-3/4"
                    src={p2}
                    alt="Project Image"
                />
            </div>



        </div>
    );
}

export default HeroSection;
