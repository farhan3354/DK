import React from 'react';
import { FaCode, FaGlobe, FaEye, FaUsers } from 'react-icons/fa';

const YourComponent = () => {
  return (
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
  );
};

export default YourComponent;
