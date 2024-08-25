import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaGlobe, FaEye, FaUsers } from 'react-icons/fa';
import Copy from './Copy';
import Investor from './Investor';
const OutStory = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100 p-4 md:p-12'>
      <div className="text-center mb-12 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-yellow-500 m-5">Our Story</h1>
        <p className="mt-4 text-base">
          DK Group is a renowned financial institution committed to excellence,<br />
          providing comprehensive services globally with a focus on transparency and<br />
          community-driven initiatives.
        </p>
      </div>

      <div className="flex justify-center  items-center">
        <h1 className='font-bold text-2xl mr-24 m-8 '>What drives Dk Group?</h1>
        <p className='m-5'>
          DK Group is driven by a commitment to excellence, transparency, and<br /> community empowerment, ensuring sustainable growth and positive<br /> impact globally.</p>
      </div>

      <div className='flex flex-wrap space-x-7 items-center justify-center m-10'>
        <div className='bg-yellow-500 border rounded-2xl shadow-2xl pl-12 p-4'>
          <h1 className='font-bold text-2xl m-3'>
            <FaCode className="inline mr-2" /> Open source
          </h1>
          <p className='pl-6'>
            Open source
            DK Group operates as an open-source <br />
            platform, fostering collaboration and innovation with<br />
            its community-focused initiatives.
          </p>
        </div>

        <div className='bg-yellow-500 border rounded-2xl shadow-full pl-12 p-4'>
          <h1 className='font-bold text-2xl m-3'>
            <FaGlobe className="inline mr-2" /> Worldwide
          </h1>
          <p className='pl-6'>
            Open source
            DK Group operates as an open-source <br />
            platform, fostering collaboration and innovation with<br />
            its community-focused initiatives.
          </p>
        </div>

        <div className='bg-yellow-500 border rounded-2xl shadow-full pl-12 p-4 m-6 mx-0'>
          <h1 className='font-bold text-2xl m-3'>
            <FaEye className="inline mr-2" /> Transparent
          </h1>
          <p className='pl-6'>
            Open source
            DK Group operates as an open-source <br />
            platform, fostering collaboration and innovation with<br />
            its community-focused initiatives.
          </p>
        </div>

        <div className='bg-yellow-500 border rounded-2xl shadow-full pl-12 p-4'>
          <h1 className='font-bold text-2xl m-3'>
            <FaUsers className="inline mr-2" /> Community Driven
          </h1>
          <p className='pl-6'>
            Open source
            DK Group operates as an open-source <br />
            platform, fostering collaboration and innovation with<br />
            its community-focused initiatives.
          </p>
        </div>
      </div>


      

      <div className="text-center mb-12 flex flex-col items-center my-14">
        <h1 className="text-4xl font-bold text-yellow-500 ">Timeline</h1>
        <p className="mt-4 text-base">
          DK Group timeline showcases a journey of growth, innovation<br />
          and client-centric excellence, setting benchmarks in <br />the financial industry globally.
        </p>
      </div>
      <Copy />

      <div className="text-center mb-12 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-yellow-500 m-8">Investors</h1>
        <p className="mt-4 text-base">
          Investors
          DK Group attracts investors seeking superior returns and ethical<br />
          investment opportunities supported by robust financial<br />
          expertise and a proven track record.
        </p>
      </div>
      <Investor />
    </div>
  )
}

export default OutStory