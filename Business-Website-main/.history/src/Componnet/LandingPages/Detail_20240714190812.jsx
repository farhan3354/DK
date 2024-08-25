import React from 'react';

const Detail = () => {
  return (
    <div className='bg-yellow-500 p-6 md:p-12 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 px-6 md:px-12'>
        <h1 className='font-bold text-3xl mb-4 md:mb-8 text-center md:text-left'>
          Token Harvest Unleash Daily Gains <br/>
          from Idle Assets
        </h1>
        <p className='mb-4 md:mb-8 text-center md:text-left'>
          Earn daily rewards effortlessly as your idle tokens work for you with unmatched efficiency. Embrace the power of passive income with our innovative platform, maximizing your earnings while you relax.
        </p>
        <ul className='m-0 text-center md:text-left'>
          <li className='mb-2'>Lowest fees in market</li>
          <li className='mb-2'>Fast and secure transactions</li>
          <li className='mb-2'>256-bit secure encryption</li>
        </ul>
      </div>
      <img className='w-full md:w-96 h-auto mx-auto mt-6 md:mt-0 rounded-xl' src="https://dkgroup.pk/wp-content/uploads/2024/03/black-1536x1025.png" alt="img" />
    </div>
  );
}

export default Detail;
