import React from 'react';
import { FaCode, FaGlobe, FaEye, FaUsers } from 'react-icons/fa';
import Copy from './Copy';
import Investor from './Investor';

const OutStory = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100 p-4 md:p-12'>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-yellow-500 m-5">Our Story</h1>
        <p className="mt-4 text-base">
          DK Group is a renowned financial institution committed to excellence,
          providing comprehensive services globally with a focus on transparency and
          community-driven initiatives.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 mb-8">
        <div className='md:w-1/2'>
          <h1 className='font-bold text-2xl m-3'>
            What drives DK Group?
          </h1>
          <p className='m-5'>
            DK Group is driven by a commitment to excellence, transparency, and
            community empowerment, ensuring sustainable growth and positive
            impact globally.
          </p>
        </div>

        <div className='flex flex-wrap justify-center md:w-1/2 md:space-x-12'>
          <div className='bg-yellow-500 border rounded-2xl shadow-2xl p-4 w-full md:w-auto mb-4'>
            <h1 className='font-bold text-2xl m-3'>
              <FaCode className="inline mr-2" /> Open source
            </h1>
            <p>
              DK Group operates as an open-source platform, fostering collaboration and innovation with
              its community-focused initiatives.
            </p>
          </div>

          <div className='bg-yellow-500 border rounded-2xl shadow-2xl p-4 w-full md:w-auto mb-4'>
            <h1 className='font-bold text-2xl m-3'>
              <FaGlobe className="inline mr-2" /> Worldwide
            </h1>
            <p>
              DK Group operates globally, promoting transparency and fostering collaboration and innovation with
              its community-focused initiatives.
            </p>
          </div>

          <div className='bg-yellow-500 border rounded-2xl shadow-2xl p-4 w-full md:w-auto mb-4'>
            <h1 className='font-bold text-2xl m-3'>
              <FaEye className="inline mr-2" /> Transparent
            </h1>
            <p>
              DK Group operates transparently, ensuring clarity and trust in its operations and community interactions.
            </p>
          </div>

          <div className='bg-yellow-500 border rounded-2xl shadow-2xl p-4 w-full md:w-auto'>
            <h1 className='font-bold text-2xl m-3'>
              <FaUsers className="inline mr-2" /> Community Driven
            </h1>
            <p>
              DK Group is community-driven, engaging with its stakeholders to drive meaningful impact and growth.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center md:space-x-12'>
        <div className='md:w-1/2'>
          <h1 className='font-bold text-2xl m-4'>Our missions</h1>
          <p className='m-2'>
            At DK Group, our mission is to empower individuals by strategically multiplying their investments across diverse projects and various digital assets. We believe in the transformative power of strategic investments, aiming not only to generate wealth but to do so with integrity, security, and purpose. Our commitment extends beyond profits; we are dedicated to creating opportunities for our clients and communities alike.
          </p>
        </div>
        <img className='h-auto md:h-96 m-10 w-full md:w-auto' src="https://dkgroup.pk/wp-content/uploads/2024/03/Globe-image.png" alt="img" />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-500 ">Timeline</h1>
        <p className="mt-4 text-base">
          DK Group timeline showcases a journey of growth, innovation and client-centric excellence, setting benchmarks in the financial industry globally.
        </p>
      </div>

      <Copy />

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-yellow-500 m-8">Investors</h1>
        <p className="mt-4 text-base">
          DK Group attracts investors seeking superior returns and ethical investment opportunities supported by robust financial expertise and a proven track record.
        </p>
      </div>
      
      <Investor />
    </div>
  );
}

export default OutStory;
