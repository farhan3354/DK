import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaGlobe, FaEye, FaUsers } from 'react-icons/fa';
import Copy from './Copy';
import Investor from './Investor';
import Vedio from '../../LandingPages/Vedio';

const OutStory = () => {
  return (
    <div className='bg-white p-4 md:p-12'>
      {/* Header Section */}
      <div className="text-center mb-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-5">Our Story</h1>
        <p className="text-base md:text-lg">
          DK Group is a renowned financial institution committed to excellence, providing comprehensive services globally with a focus on transparency and community-driven initiatives.
        </p>
      </div>

      {/* What Drives DK Group */}
      <div className="px-4 md:px-16">
        <h1 className='font-bold text-xl md:text-2xl mb-4'>What drives DK Group?</h1>
        <p className='text-base md:text-lg'>
          DK Group is driven by a commitment to excellence, transparency, and community empowerment, ensuring sustainable growth and positive impact globally.
        </p>
      </div>

      {/* Link Cards */}
      <div className='flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center my-10'>
        <Link to='/home' className='transform transition duration-300 hover:scale-105 w-full sm:w-72'>
          <div className='bg-yellow-500 border rounded-2xl shadow-2xl p-4'>
            <h1 className='font-bold text-xl md:text-2xl mb-2 flex items-center'>
              <FaCode className="inline mr-2" /> Home
            </h1>
            <p className='text-sm md:text-base'>
              DK Group operates as an open-source platform, fostering collaboration and innovation with its community-focused initiatives.
            </p>
          </div>
        </Link>

        <Link to='/project' className='transform transition duration-300 hover:scale-105 w-full sm:w-72'>
          <div className='bg-yellow-500 border rounded-2xl shadow-2xl p-4'>
            <h1 className='font-bold text-xl md:text-2xl mb-2 flex items-center'>
              <FaGlobe className="inline mr-2" /> Project
            </h1>
            <p className='text-sm md:text-base'>
              DK Group operates as an open-source platform, fostering collaboration and innovation with its community-focused initiatives.
            </p>
          </div>
        </Link>

        <Link to='/plans' className='transform transition duration-300 hover:scale-105 w-full sm:w-72'>
          <div className='bg-yellow-500 border rounded-2xl shadow-2xl p-4'>
            <h1 className='font-bold text-xl md:text-2xl mb-2 flex items-center'>
              <FaEye className="inline mr-2" /> Plans
            </h1>
            <p className='text-sm md:text-base'>
              DK Group operates as an open-source platform, fostering collaboration and innovation with its community-focused initiatives.
            </p>
          </div>
        </Link>

        <Link to='/contact' className='transform transition duration-300 hover:scale-105 w-full sm:w-72'>
          <div className='bg-yellow-500 border rounded-2xl shadow-2xl p-4'>
            <h1 className='font-bold text-xl md:text-2xl mb-2 flex items-center'>
              <FaUsers className="inline mr-2" /> Contact Us
            </h1>
            <p className='text-sm md:text-base'>
              DK Group operates as an open-source platform, fostering collaboration and innovation with its community-focused initiatives.
            </p>
          </div>
        </Link>
      </div>

      {/* Mission Section */}
      <div className='flex flex-col md:flex-row items-center md:justify-between p-4'>
        <div className='my-6 md:w-1/2'>
          <h1 className='font-bold text-xl md:text-2xl mb-4 text-center md:text-left'>Our Mission</h1>
          <p className='text-center md:text-left'>_______________________________________________________________________</p>
          <p className='border-t border-b my-2 md:my-4 text-center md:text-left'>
            At DK Group, our mission is to empower individuals by strategically multiplying their investments across diverse projects and various digital assets. We believe in the transformative power of strategic investments, aiming not only to generate wealth but to do so with integrity, security, and purpose. Our commitment extends beyond profits; we are dedicated to creating opportunities for our clients and communities alike.
          </p>
          <p className='mt-4 md:mt-8 text-center md:text-left'>
            Through our innovative approach, we strive to provide monthly returns on investments, ensuring a steady income stream for our clients. Our focus on diversity, both in projects and digital assets, allows us to mitigate risks and maximize returns. With a dedication to excellence and a vision for social impact, we invite you to join us in rewriting the story of success through responsible investing.
          </p>
        </div>
        <img className='h-48 w-full object-cover md:h-96 md:w-auto' src="https://dkgroup.pk/wp-content/uploads/2024/03/Globe-image.png" alt="Globe" />
      </div>

      {/* Timeline Section */}
      <div className="text-center mb-12 flex flex-col items-center my-14">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Timeline</h1>
        <p className="text-base md:text-lg">
          DK Group timeline showcases a journey of growth, innovation and client-centric excellence, setting benchmarks in the financial industry globally.
        </p>
      </div>
      <Copy />
      <Vedio />

      {/* Investors Section */}
      <div className="text-center mb-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">Investors</h1>
        <p className="text-base md:text-lg">
          DK Group attracts investors seeking superior returns and ethical investment opportunities supported by robust financial expertise and a proven track record.
        </p>
      </div>
      <Investor />
    </div>
  );
};

export default OutStory;
