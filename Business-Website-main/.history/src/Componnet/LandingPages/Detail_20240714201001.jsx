import React from 'react';

const Detail = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      {/* Left side */}
      <div className='w-full md:w-1/2 bg-yellow-500 p-6 md:p-12 flex flex-col items-center'>
        <div className='md:pl-32'>
          <h1 className='font-bold text-3xl mb-8'>
            Token Harvest Unleash Daily Gains <br />
            from Idle Assets
          </h1>
          <p className='mb-8'>
            Earn daily rewards effortlessly as your idle tokens work for you with<br/> unmatched efficiency. Embrace the power of passive income with <br />our innovative platform, maximizing your earnings while you relax.
          </p>
          <ul className='m-0'>
            <li className='mb-2'>Lowest fees in market</li>
            <li className='mb-2'>Fast and secure transactions</li>
            <li className='mb-2'>256-bit secure encryption</li>
          </ul>
        </div>
      </div>
      {/* Right side */}
      <div className='w-full md:w-1/2'>
        <img className='w-full h-auto' src="https://dkgroup.pk/wp-content/uploads/2024/03/black-1536x1025.png" alt="img" />
      </div>
    </div>
  );
}

export default Detail;
