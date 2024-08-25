import React from 'react';

const Vedio = () => {
  return (
    <div className='p-6 md:p-12 import React from 'react';
import './HeroSection.css'; // Assuming you create a CSS file for animations

const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font bg-gradient-to-b from-yellow-100 via-white to-yellow-100 opacity-100 translate-y-0" style={{ transition: 'opacity 3s ease, transform 0.5s ease' }}>
            <div className="container mx-auto flex px-5 py-16 flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="hero-content text-center md:text-left md:flex-1">
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
                        <div className="flex justify-center md:justify-start">
                            <button className="text-white bg-black border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border-gray-900 rounded-lg text-lg transition-all duration-300">
                                View Our Plan
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0">
                        <img className="object-cover object-center rounded-lg mx-auto" alt="hero" src="https://dkgroup.pk/wp-content/uploads/2024/03/image-removebg-preview__2_-removebg-preview.png" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
'>
      {/* Flex container for first and second sections */}
      <div className='flex flex-col md:flex-row md:space-x-8'>
        {/* First Section */}
        <div className='flex-1 px-12 md:px-32 mb-8 md:mb-0'>
          <h1 className='font-bold text-5xl mb-8'>
            About DK Group
          </h1>
          <p className='mb-8 '>
            Welcome to DK Group: Where strategic investments meet social<br />
            responsibility. Our platform is designed for those seeking financial growth <br />
            with integrity. Through diverse projects and cryptocurrencies, we provide<br />
            professional, attractive opportunities that generate monthly returns while<br />
            making a positive impact on communities.
          </p>
          <ul className='list-disc pl-6 mb-8'>
            <li className='mb-2'>Lowest fees in the market</li>
            <li className='mb-2'>Fast and secure transactions</li>
            <li className='mb-2'>256-bit secure encryption</li>
          </ul>
        </div>

        {/* Video Section */}
        <div className='flex-1 w-full max-w-lg mx-auto rounded-2xl overflow-hidden'>
          <iframe
            width="80%"
            height="315"
            src="https://www.youtube.com/embed/your_video_id" // Replace with actual video ID
            frameBorder="0"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </div>

      {/* Video Information */}
      <div className=" ">
  <h1 className="font-bold text-4xl mb-4 m-8 text-center">
    DK Group Our Latest News
  </h1>
  <p className="text-lg text-center m-5">
    Stay informed and empowered with the latest investment news 
    and <br/>updates from DK Group. By staying abreast 
    of market trends, 
    sector <br/>developments, and economic indicators, you can 
    make informed <br/>investment decisions that align with
    your financial goals <br/> and objectives.
    Trust DK Group to keep you informed  <br/>and guide you on your investment journey.
  </p>
</div>
</div>
  );
}

export default Vedio;
