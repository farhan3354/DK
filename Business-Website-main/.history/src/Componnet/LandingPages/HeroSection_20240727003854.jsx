import React from 'react';
import p1 from '../../assets/s1.png';
import p2 from '../../assets/s2.png'
const HeroSection = () => {
    return (
        <div>
            <section className="text-black body-font bg-white opacity-100 translate-y-0 transition-opacity duration-300 ease-in-out transform transition-transform duration-500 ease-in-out absolute bg-yellow-500">


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
