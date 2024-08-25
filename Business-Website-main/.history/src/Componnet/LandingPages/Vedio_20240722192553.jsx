import React from 'react';

const V = () => {
  return (
    <div className='p-6 md:p-12 flex flex-col md:flex-row items-center'>
      <div className='px-12 md:pl-32'>
        <h1 className='font-bold text-3xl mb-8'>
          Token Harvest Unleash Daily Gains <br />
          from Idle Assets
        </h1>
        <p className='mb-8'>
          Earn daily rewards effortlessly as your idle tokens work for you with<br />
          unmatched efficiency. Embrace the power of passive income with <br />
          our innovative platform, maximizing your earnings while you relax.
        </p>
        <ul className='m-0'>
          <li className='mb-2'>Lowest fees in market</li>
          <li className='mb-2'>Fast and secure transactions</li>
          <li className='mb-2'>256-bit secure encryption</li>
        </ul>
      </div>
      <video className='w-96 h-auto mx-auto rounded-xl' controls>
        <source src="https://example.com/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Vedio;
