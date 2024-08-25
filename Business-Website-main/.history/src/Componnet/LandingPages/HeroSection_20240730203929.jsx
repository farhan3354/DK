import React from 'react';
import p1 from '../../assets/s1.png';
import p2 from '../../assets/s2.png';

const HeroSection = () => {
    return (
        <div>
            <section className="text-black body-font opacity-100 translate-y-0 transition-opacity duration-300 ease-in-out transform transition-transform duration-500 ease-in-out relative w-full">
                <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-16 items-center md:items-start">
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img className="object-cover object-center rounded-lg w-full md:w-auto" alt="hero" src={p1} />
                    </div>
                    
                </div>
            </section>
            <div className="flex justify-center items-center mt-8 md:mt-16">
                <img className="w-full md:w-2/3 px-4 md:px-0" src={p2} alt="Project Image" />
            </div>
        </div>
    );
}

export default HeroSection;
